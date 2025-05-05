from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from render.render import do, clean
import os
from utils import generate_manim_code

app = FastAPI()


class Prompt(BaseModel):
    text: str


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/generate")
async def generate_video(prompt: Prompt):
    manim_code = generate_manim_code(prompt.text)

    # Save code to a temporary Python file
    # filename = f"{uuid.uuid4()}.py"
    path = os.path.join("render", "script.py")
    with open(path, "w") as f:
        f.write(manim_code)

    # actually render
    do()
    # move the file to the right place
    clean()

    # Return the path or URL to the rendered video
    return {"video_url": "/render/ouput/script.mp4"}
