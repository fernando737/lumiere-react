#!/bin/bash

# Path to the .env file
ENV_FILE="./.env"

# Check if the .env file exists
if [ ! -f "$ENV_FILE" ]; then
    echo "Error: .env file not found!"
    echo "Please create a .env.development file with the right env variables"
    exit 1
fi

# Run Docker Compose
docker-compose up