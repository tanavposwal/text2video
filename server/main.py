import os
import uuid
from pydantic import BaseModel
from server.render import do, clean
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
app.mount("/render/output", StaticFiles(directory="render/output"), name="render")

# Get the absolute path to the server directory
SERVER_DIR = os.path.dirname(os.path.abspath(__file__))


class Prompt(BaseModel):
    text: str


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/generate")
async def generate_video(prompt: Prompt):
    file_name = str(uuid.uuid4())
    try:
        manim_code = generate_manim_code(prompt.text)
        # Remove ticks and laguage identifiers
        manim_code = manim_code.replace("```python", "").replace("```", "")

        # Save code to script.py in the render directory
        script_path = os.path.join(SERVER_DIR, "render", "code", f"{file_name}.py")
        with open(script_path, "w") as f:
            f.write(manim_code)

        # Render the vide
        do(file_name)

        # Move the file to the output directory
        clean(file_name)

        # Return the correct path to the rendered video
        return {"video_url": "/render/output/" + file_name + ".mp4"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
