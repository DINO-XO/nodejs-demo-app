
# Node.js Demo App — CI/CD Pipeline

## Objective
Automate testing, Docker image building, and image publishing using GitHub Actions.

## Technologies Used
- Node.js
- Git and GitHub
- GitHub Actions
- Docker
- Docker Hub

## Application
A sample Node.js HTTP server that returns a message when accessed.

## CI/CD Workflow
Workflow file: `.github/workflows/main.yml`

Whenever code is pushed to the `main` branch, GitHub Actions:

1. Checks out the source code.
2. Sets up Node.js.
3. Runs automated tests.
4. Builds a Docker image.
5. Pushes the image to Docker Hub.

The Docker build job runs only after the test job succeeds.

## Run Locally

Start the application:

```bash
npm start
```

Open http://localhost:3000 in your browser.

Run the automated test:

```bash
npm test
```

## Docker Image

Image: `dino2806/nodejs-demo-app:latest`

Replace `dino2806` if your Docker Hub username is different.

## Repository
https://github.com/DINO-XO/nodejs-demo-app
