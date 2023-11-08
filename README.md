# Vue-neutralino

Simple demo with Vue3 + TypeScript + Vite and working HMR

## Setup development environment

1. Install `neutralino-cli` with `npm i -g @neutralinojs/neu`
1. Run VSCode task `(Re)install project`
1. Run VSCode task `Start` to start Vue app
1. Run VSCode task `Neu-dev` to start Neutralino app

## Production build

1. Run VSCode task "Shell"
1. Create Vue app build:  ```yarn build```
1. Create Neutralino build with VSCode task `neu-dist`

### Known issues 🐛
1. Vue app must run on port `3000`. Neutralino binary cannot handle another port for some reason with message:
```
neu: INFO App will be launched when http://localhost:XXXX/ is ready...
```
Neutralino binary is not configurable with `neutralino.config.json` > `frontendLibrary.devUrl`

2. Neutralino - `dist-mode` cannot make production build if configuration file contains configration `frontendLibrary`. For this reason is dev/dist copied before use.

3. Neutralino - `dist-mode` requires folder `./undefined` in root directory
