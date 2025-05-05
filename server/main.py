from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from render.render import do, clean
import os
from utils import generate_manim_code

app = FastAPI()

# Get the absolute path to the server directory
SERVER_DIR = os.path.dirname(os.path.abspath(__file__))


class Prompt(BaseModel):
    text: str


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/generate")
async def generate_video(prompt: Prompt):
    try:
        manim_code = generate_manim_code(prompt.text)

        # Save code to script.py in the render directory
        script_path = os.path.join(SERVER_DIR, "render", "script.py")
        with open(script_path, "w") as f:
            f.write(manim_code)

        # Render the video
        do()

        # Move the file to the output directory
        clean()

        # Return the correct path to the rendered video
        return {"video_url": "/render/output/script.mp4"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
