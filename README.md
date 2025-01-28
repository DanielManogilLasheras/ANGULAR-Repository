# Angular-Repository

## Steps to install Angular

- Install node.js
- Install typescript

  npm install -g typescript

- Test the versions

  node --version
  tsc --version

- Install the Angular line of commands

  npm install -g @angular/cli

## Create an Angular project

- Create the project:

  ng new appName (--skip-tests --no-standalone)

-Run the project:

    ng serve --open

Or we can customize the host that serves the project:

    ng serve --host 0.0.0.0 --port 4201

## Inside the project:

- The main entry point of the application is main.ts, it is the first file loaded, and it's used to import resources, components, and they load them into the application.
