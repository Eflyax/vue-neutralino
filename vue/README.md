# vue-neutralino

## Development environment

For development create `.env` file from `.env.sample`. Then create development docker container:
```bash
docker-compose -f .docker/docker-compose.yml --env-file=".env" up -d
```

Go to the Docker container, install the dependencies, and start the dev server:

```bash
docker exec -ti vue-neutralino sh
yarn install
yarn dev
```
