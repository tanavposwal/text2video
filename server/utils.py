from google import genai
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Get API key from environment variable
api_key = os.getenv("GOOGLE_API_KEY")
if not api_key:
    raise ValueError("GOOGLE_API_KEY environment variable is not set")

client = genai.Client(api_key=api_key)


def generate_manim_code(text):
    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=f"""You are a model that generates the python code with manim module for an animation. 
            You generates only code *without* starting and ending backticks and no language name. 
            Animation should be related to the prompt. Do not use any other image or assets.
            
            Prompt: {text}""",
        )

        if not response.text:
            raise Exception("No code was generated")

        return response.text
    except Exception as e:
        raise Exception(f"Error generating Manim code: {str(e)}")
