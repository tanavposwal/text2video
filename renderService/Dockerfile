# Use a base image with Python pre-installed.
FROM ubuntu:latest

# Set environment variables for non-interactive installation
ENV DEBIAN_FRONTEND=noninteractive
ENV PATH="/opt/venv/bin:$PATH"

# Update package list and install necessary dependencies for Manim and LaTeX
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    python3 \
    python3-pip \
    python3-venv \
    build-essential \
    ca-certificates \
    ffmpeg \
    latexmk \
    texlive-full \
    fonts-cmu-bright \
    # Clean up to reduce image size
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Manim into a virtual environment
RUN python3 -m venv /opt/venv
RUN pip install --upgrade pip
RUN pip install manim

# Set the working directory inside the container
WORKDIR /app

# Create directory for output
RUN mkdir -p /app/media/videos

# Copy the script that will execute Manim on a mounted file
COPY render_script.sh /app/
RUN chmod +x /app/render_script.sh

# Set the entrypoint to the script
# This script will be executed when the container runs
ENTRYPOINT ["/app/render_script.sh"]
