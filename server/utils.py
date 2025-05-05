from google import genai

client = genai.Client(api_key="AIzaSyC3qdktWjzcP3tMGGKzpP3EEJVv53N9sRY")


def generate_manim_code(text):
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents="""You are a model that generates the python code with manim module for an animation. You generates only code *without* starting and ending backticks and no language name. Animation should be realted to the prompt. Do not use any other image or assets. # prompt: {test}""",
    )
    return response.text
