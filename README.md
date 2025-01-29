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

- Run the project:

  ng serve --open

- Or we can customize the host that serves the project:

  ng serve --host 0.0.0.0 --port 4201

## Inside the project:

- The main entry point of the application is main.ts, it is the first file loaded, and it's used to import resources, components, and they load them into the application.

- In index.html is where we render the root of our components, we can make changes to the head of the document and add any additional resources.

- In app, we have the root of our componentsS
  We use @Component decorator to declare our components in order to use them. This decorator gives certain properties to the component class we want to export.

- app.config.ts is the configuration of our entry point. It declares the providers, and builds the routing system.

## About components:

- To generate a new component you can use either of these two commands by getting yourself into the root folder, depending on the version:

  ng g c your-component
  ng new component user

- It follows the same rules of the ones previously explained.
- Each time you generate a component, it generates a test, but these and more features can be manually disabled.
- When creating a new component, you can add the --help to view a series of suffixes you can add to the component to customize it with the needed properties.
- Dry run: It's the execution of the generation of a component as a test, with the purpose of making sure that there are no typos in the syntax of the command, and to allow you to understand better the result of such instructions.

## About directives:

- Directives are a fundamental part of Angular, and they allow us to perform logic operations on the HTML syntax, there are two types of directives: attribute and structural directives

### Passing values between components:

- If we are rendering a component and we want to use a variable as a prop from the parent component, we need to declare such variable in the rendered component. This is an example of how to do so:

  Parent component:
  <app-games username="{{ username }}"></app-games>

  Rendered component:
  export class GamesComponent:
  @Input() username: string = '';

  Rendered component resource imports:
  import { Component, Input } from '@angular/core';

As you can see, we have used a directive to declare the variable that has been imported into the component.

- If you want to pass a variable or event to the parent, you need to declare an output in the child component, which will be passed in the specified function. Example:

  Child Component:
  @Output() addFavouriteEvent = new EventEmitter<string>();
  fav(gameName : string){
  this.addFavouriteEvent.emit(gameName);
  }

  Parent Component:
  In the rendered component we add our event:
  <app-games (addFavouriteEvent)="getFavouriteGame($event)" username="{{ username }}"> </app-games>

  We create a function for the imported variable:
  favgame = '';
  getFavouriteGame(gameName : string){
  this.favgame = gameName;
  }
  We are ready to use the variable with a control structure or anything we seem fit:

## About @Defer:

- The @Defer directive is a way to put a part of the information we are rendering in standby, refraining it from loading straight away.
  When we apply the defer to components, the cpu will load them when it has no petitions or workload, therefore optimizing the loading times and prioritizing more important information and operations.
  An example of how to use defer can be found here:

  https://www.youtube.com/watch?v=f7unUpshmpA&t=180s

- If the Defer would stop the affected data from showing, we can use the @placeholder directive to show something until we have arrived to that part of the page.
- When the data on stand by is loaded, all the logic such as JS programming is loaded too.

- Defer allows the use of the @loading directive to substitute the element for something else we would like to show to the user while the information is loading.

## Ways to use bootstrap in angular project.

### Using Angular CLI tools:

- We strongly recommend using Angular CLI for setting up a new project. If you have an Angular CLI project, you could simply use our schematics to add ng-bootstrap library to it.
  Just run the following:

      ng add @ng-bootstrap/ng-bootstrap

- It will install ng-bootstrap for the default application specified in your angular.json. If you have multiple projects and you want to target a specific application, you could specify the --project option

      ng add @ng-bootstrap/ng-bootstrap --project myProject

### Alternative imports

- Source: https://ng-bootstrap.github.io/#/getting-started
- Instead of importing the whole library with NgbModule, you could only import modules with components you need, ex. pagination and alert. The resulting bundle will be smaller in this case.

import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

    @NgModule({
      imports: [NgbPaginationModule, NgbAlertModule],
    })
    export class YourAppModule {
    }

- Or, since all our components and directives are standalone, you can directly import them in your modules or in your standalone components.

  import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

  @Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgbAlert],
  templateUrl: './product.component.html'
  })
  export class ProductComponent {
  }

## Import sweetalert2 to angular project

- First we must install sweetalert2 inside our project folder:

  npm install --save sweetalert2

- We import sweetalert library into the component or module we are working on:

import Swal from 'sweetalert2'
