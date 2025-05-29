import os
import subprocess
import shutil

# Get the absolute path to the render directory
RENDER_DIR = os.path.dirname(os.path.abspath(__file__))


def ensure_directories():
    # Ensure all required directories exist
    output_dir = os.path.join(RENDER_DIR, "output")
    os.makedirs(output_dir, exist_ok=True)


def do(file_name):
    try:
        # Change to the render directory
        original_dir = os.getcwd()
        os.chdir(RENDER_DIR)

        # Run manim
        result = subprocess.run(
            [
                "manim",
                f"code/{file_name}.py",
                "-o",
                f"{file_name}.mp4",
                "-ql",
                "--disable_caching",
            ]
        )

        # Change back to original directory
        os.chdir(original_dir)

        if result.returncode != 0:
            os.remove(os.path.join(RENDER_DIR, "code", f"{file_name}.py"))
            os.remove(os.path.join(RENDER_DIR, "media", "videos", file_name))
            raise Exception(f"Manim failed: {result.stderr}")

    except subprocess.TimeoutExpired as e:
        print(e)


def clean(file_name):
    try:
        # Ensure output directory exists
        ensure_directories()

        # Define source and destination paths
        source = os.path.join(
            RENDER_DIR, "media", "videos", file_name, "1080p60", f"{file_name}.mp4"
        )
        destination = os.path.join(RENDER_DIR, "output", f"{file_name}.mp4")

        # Remove existing output file if it exists
        if os.path.exists(destination):
            os.remove(destination)

        # Move the file
        if os.path.exists(source):
            shutil.move(source, destination)
            os.remove(os.path.join(RENDER_DIR, "media", "videos", file_name))
        else:
            raise Exception(f"Source video file not found at {source}")

    except Exception:
        pass
