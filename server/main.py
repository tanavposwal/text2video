import os
from pydantic import BaseModel
from render.render import do, clean
from utils import generate_manim_code
from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# server static files
app.mount("/output", StaticFiles(directory="render/output"), name="render")

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
        # Remove ticks and laguage identifiers
        manim_code = manim_code.replace("```python", "").replace("```", "")

        # Save code to script.py in the render directory
        script_path = os.path.join(SERVER_DIR, "render", "script.py")
        with open(script_path, "w") as f:
            f.write(manim_code)

        # Render the vide
        do()

        # Move the file to the output directory
        clean()

        # Return the correct path to the rendered video
        return {"video_url": "/output/script.mp4"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
