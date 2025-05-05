import os
import subprocess

filename = "script"


def do():
    try:
        subprocess.run(
            ["manim", f"{filename}.py", "-o", f"{filename}.mp4"],
            check=True,
        )
    except subprocess.CalledProcessError as e:
        print(e.output)


def clean():
    movewhat = os.path.join("media", "videos", "script", "1080p60", f"{filename}.mp4")
    try:
        os.remove("output/script.mp4")
    except FileNotFoundError:
        pass
    movewhere = os.path.join("output", f"{filename}.mp4")
    os.rename(movewhat, movewhere)


do()
# clean()
