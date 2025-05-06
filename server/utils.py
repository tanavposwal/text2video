from google import genai

api_key = "AIzaSyBgtKEnKjwITUud_DMJ0k3uj7IYJuk39pQ"
client = genai.Client(api_key=api_key)


def generate_manim_code(text):
    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=f"""You are a model that generates the python code with manim module for an animation. 
            *When generating code, always avoid using /```/python and /```/*
            *Do not include any markdown formatting, backticks, or language identifiers in your response*
            *Return only the raw Python code*
            
            Animation should be related to the prompt. Do not use any other image or assets.
            
            Prompt: {text}""",
        )

        if not response.text:
            raise Exception("No code was generated")

        return response.text
    except Exception as e:
        raise Exception(f"Error generating Manim code: {str(e)}")
