# text2video

This is a simple web application that uses the [Manim](https://github.com/3b1b/manim) library to generate animations from text descriptions. The application is built using the [FastAPI](https://fastapi.tiangolo.com/) as backend and [Next.js](https://nextjs.org/) as frontend.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/tanavposwal/text2video.git
```

2. Install the required dependencies:

```bash
cd server && pip install -r requirements.txt
cd frontend && npm install
```

3. Start the development server:

```bash
cd server && uvicorn server.main:app --reload
```

4. Start the frontend server:

```bash
cd frontend && npm run dev
```

## Usage

To generate an animation, send a POST request to the `/generate` endpoint with a JSON payload containing the url to the video.
