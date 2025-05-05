import os
import subprocess
import shutil

# Get the absolute path to the render directory
RENDER_DIR = os.path.dirname(os.path.abspath(__file__))
filename = "script"


def ensure_directories():
    """Ensure all required directories exist"""
    output_dir = os.path.join(RENDER_DIR, "output")
    os.makedirs(output_dir, exist_ok=True)


def do():
    try:
        # Change to the render directory
        original_dir = os.getcwd()
        os.chdir(RENDER_DIR)

        # Run manim
        result = subprocess.run(
            ["manim", f"{filename}.py", "-o", f"{filename}.mp4"],
            check=True,
            capture_output=True,
            text=True,
        )

        # Change back to original directory
        os.chdir(original_dir)

        if result.returncode != 0:
            raise Exception(f"Manim failed: {result.stderr}")

    except subprocess.CalledProcessError as e:
        raise Exception(f"Manim failed: {e.stderr}")
    except Exception as e:
        raise Exception(f"Error during rendering: {str(e)}")


def clean():
    try:
        # Ensure output directory exists
        ensure_directories()

        # Define source and destination paths
        source = os.path.join(
            RENDER_DIR, "media", "videos", "script", "1080p60", f"{filename}.mp4"
        )
        destination = os.path.join(RENDER_DIR, "output", f"{filename}.mp4")

        # Remove existing output file if it exists
        if os.path.exists(destination):
            os.remove(destination)

        # Move the file
        if os.path.exists(source):
            shutil.move(source, destination)
        else:
            raise Exception(f"Source video file not found at {source}")

    except Exception as e:
        raise Exception(f"Error during cleanup: {str(e)}")


do()
clean()
