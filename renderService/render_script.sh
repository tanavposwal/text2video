#!/bin/bash

# This script expects the Manim script file path as the first argument.
# The file is expected to be mounted into the container.

MANIM_SCRIPT_PATH="$1"
SCENE_NAME="$2" # Optional: Scene name as the second argument

if [ -z "$MANIM_SCRIPT_PATH" ]; then
  echo "Error: No Manim script file path provided."
  echo "Usage: docker run ... manim-renderer /path/to/your/script_in_container [SceneName]"
  exit 1
fi

if [ ! -f "$MANIM_SCRIPT_PATH" ]; then
  echo "Error: Manim script file not found at $MANIM_SCRIPT_PATH inside the container."
  exit 1
fi

# Navigate to the directory where the script is located
SCRIPT_DIR=$(dirname "$MANIM_SCRIPT_PATH")
SCRIPT_FILE=$(basename "$MANIM_SCRIPT_PATH")

cd "$SCRIPT_DIR" || { echo "Error: Could not change directory to $SCRIPT_DIR"; exit 1; }

# Run Manim on the mounted script
if [ -z "$SCENE_NAME" ]; then
  manim -pqm "$SCRIPT_FILE" -ql --disable_caching
else
  manim -pqm "$SCRIPT_FILE" "$SCENE_NAME"
fi

# Manim will output videos to ./media/videos within the working directory,
# which is the mounted directory in this case.
