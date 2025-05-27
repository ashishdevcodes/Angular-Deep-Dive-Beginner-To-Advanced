// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// Modern Angular applications use the `bootstrapApplication` function to bootstrap the root component.
// This function is part of the standalone component architecture introduced in Angular 14.
// It allows for a more modular and flexible application structure without the need for an NgModule.
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


// Legacy Angular applications use the `platformBrowserDynamic` function to bootstrap the root module.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));