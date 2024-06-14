# PROYECTO TEST REACT + NESTJS (MONOREPO) + VITE
<style>

</style>

<div style="
    display:flex; flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%
    ">
<p align="center" style="margin:2rem">
<a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" style="margin: 1rem" width="100" alt="Nest Logo" />
</a>
<a href="https://es.react.dev/" target="blank">
    <img src="./apps/frontend/src/assets/img/react.svg" style="margin: 1rem" width="100" alt="React Logo" />
</a>
<a href="https://es.vitejs.dev/guide/" target="blank">
    <img src="./apps/frontend/src/assets/img/vite.svg" style="margin: 1rem" width="100" alt="Vite Logo" />
</a>
<a href="https://yarnpkg.com/" target="blank">
    <img src="./apps/frontend/src/assets/img/yarn-logo-F5E7A65FA2-seeklogo.com.png" style="margin: 1rem" width="100" alt="Yarn Logo" />
</a>
<a href="https://turbo.build/repo/docs" target="blank">
    <img src="./apps/frontend/src/assets/img/repo-hero-logo-dark.svg" style="margin: 1rem" width="100" alt="Turbo Logo" />
</a>
</p>
</div>

## Descripción
    El siguiente es una propuesta a proyectos monorepos empleando tecnologías diferentes a las habituales. En ese sentido, es una primera mirada que debe ir puliéndose según lo aprendido y las nuevas aportaciones que puedan surgir por parte del equipo.

## Herramientas utilizadas
    Las herramientas empleadas para este tipo de proyectos ha quedado establecido de la siguiente manera:
    -----------------------------------------------------
        * Backend                               : nestJs
        * Frontend                              : React
        * Herramienta de compilación            : Vite
        * Administrador de paquetes para Node   : yarn
        * Task-Manager para monorepositorios    : turbo
    --------------------------------------------------------------------------------

## Uso de la aplicación
    Instrucciones generales:
    -----------------------------------------------------
        * Para la instalación de dependencias                   : yarn install
        * Para agregar dependencias por proyectos individuales  : yarn workspace @nombreDelaCarpeta[api-frontend] add @dependencia
        * Si se desea ajecutar ejecutar solo un proyecto        : yarn workspace @nombreDelaCarpeta[api-frontend] run dev
        * Para iniciar ambos proyectos a la vez                 : yarn turbo run dev
    ---------------------------------------------------------------------------------


## Guía de Creación de proyectos monorepo
    Para la creación de futuros proyectos monorepo:

>   1- Se debe crear una carpeta contenedora del proyecto  
````mkdir monorepo-name````  
>   2- Una vez dentro de la carpeta se debe inicializar  
````yarn init -w````  
>   3- Se debe instalar la dependencia de turbo  
````yarn add turbo````  
>   4- Se debe crear una carpeta que contendrá los repositorios  
````mkdir apps````  
>   5- Una vez dentro de la carpeta se crearán dos proyectos (para este caso, pueden ser n). Se usará NestJs y React (también puede usarse cualquier tecnología)    
>   BACKEND ````nest new api````  (En el caso de un framework como nest, solo nos interesa la estructura base, así que se debe cancelar la instalación una vez que ha creado la estrucutra ````ctrl + c```` cuando vaya a instalar los packages)  
>   FRONTEND ````yarn create vite````  
>   6- Volver a la raíz del proyecto y crear un archivo turbo.json  
````type json > turbo.json````  
>   7- Se agregará el siguiente contenido a este turbo.json
````
{
    "$schema": "https://turbo.build/schema.json",
    "tasks": {
      "dev": {
        "cache": false,
        "persistent": true
      },
      "build": {
        "dependsOn": ["^build"],
        "outputs": ["dist/**"]
      }
    }
  }
  ````
  > 8- Para que los proyectos se puedan levantar juntos, será necesario hacer una modificación en el script de NestJs
  > Es necesario ir al package.json de apps/api y modificar en el objeto "scripts"     
````
"scripts": {
    "build": "nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
````
````"start:dev": "nest start --watch",```` <= Se debe modificar es ta línea
````
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json"
  },
````  
````
"scripts": {
    "build": "nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
````
````"dev": "nest start --watch",```` <= Por esta (Eliminar "start:")
````
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json"
  },
````
>   9- Se debe Agregar la propiedad workspaces al package.json de la raíz apuntando a las carpetas que contienen los proyectos (se pueden marcar todas o individualizar) y hay que asegurarse de que los packages.json de los proyectos internos tengan la propiedad "private": true
````
"private": true,
"workspaces": [
    "apps/*"
  ],
````

## Adionales
    - El backend ya cuenta con swagger integrado y configurado 😋

## Contacto
````Miguel Rojas````