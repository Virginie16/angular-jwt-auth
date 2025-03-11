suivi du tuto : https://github.com/bezkoder/angular-17-jwt-auth/tree/master

API à corriger avec
https://www.bezkoder.com/spring-boot-security-login-jwt/

# AngularJwtAuth

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Angular 17 JWT Authentication & Authorization example with Rest API

Build Angular 17 JWT Authentication & Authorization example with Rest Api, HttpOnly Cookie and JWT (including HttpInterceptor, Router & Form Validation).

- JWT Authentication Flow for User Registration (Signup) & User Login
- Project Structure with HttpInterceptor, Router
- Way to implement HttpInterceptor
- How to store JWT token in HttpOnly Cookie
- Creating Login, Signup Components with Form Validation
- Angular Components for accessing protected Resources
- How to add a dynamic Navigation Bar to Angular App
- Working with Browser Session Storage

## Flow for User Registration and User Login

For JWT – Token based Authentication with Rest API, we’re gonna call 2 endpoints:

- POST `api/auth/signup` for User Registration
- POST `api/auth/signin` for User Login
- POST `api/auth/signout` for User Logout

You can take a look at following flow to have an overview of Requests and Responses that Angular 17 JWT Authentication & Authorization Client will make or receive.

![angular-17-jwt-authentication-authorization-flow](angular-17-jwt-authentication-authorization-flow.png)

## Angular JWT App Diagram with Router and HttpInterceptor

![angular-17-jwt-authentication](angular-17-jwt-authentication.png)

For more detail, please visit the tutorial:

> [Angular 17 JWT Authentication & Authorization with Web API example](https://www.bezkoder.com/angular-17-jwt-auth/)

> [Angular 17 Logout when Token is expired](https://www.bezkoder.com/logout-when-token-expired-angular-17/)

> [Angular Refresh Token with Interceptor & JWT example](https://www.bezkoder.com/angular-17-refresh-token/)

## With Spring Boot back-end

> [Angular 17 + Spring Boot: JWT Authentication and Authorization example](https://www.bezkoder.com/angular-17-spring-boot-jwt-auth/)

## With Node.js Express back-end

> [Angular 17 + Node.js Express: JWT Authentication and Authorization example](https://www.bezkoder.com/node-js-angular-17-jwt-auth/)

Run `ng serve --port 8081` for a dev server. Navigate to `http://localhost:8081/`.

## More practice

> [Angular 17 CRUD example with Rest API](https://www.bezkoder.com/angular-17-crud-example/)

> [Angular 17 Pagination example](https://www.bezkoder.com/angular-17-pagination-ngx/)

> [Angular 17 File upload example with Progress bar](https://www.bezkoder.com/angular-17-file-upload/)

> [Angular 17 Form Validation example](https://www.bezkoder.com/angular-17-form-validation/)

Fullstack with Node:

> [Angular 17 + Node Express + MySQL example](https://www.bezkoder.com/angular-17-node-js-express-mysql/)

> [Angular 17 + Node Express + PostgreSQL example](https://www.bezkoder.com/angular-17-node-js-express-postgresql/)

> [Angular 17 + Node Express + MongoDB example](https://www.bezkoder.com/angular-17-node-js-express-mongodb/)

> [Angular 17 + Node Express: File upload example](https://www.bezkoder.com/angular-17-node-express-file-upload/)

Fullstack with Spring Boot:

> [Angular 17 + Spring Boot example](https://www.bezkoder.com/spring-boot-angular-17-crud/)

> [Angular 17 + Spring Boot + MySQL example](https://www.bezkoder.com/spring-boot-angular-17-mysql/)

> [Angular 17 + Spring Boot + PostgreSQL example](https://www.bezkoder.com/spring-boot-angular-17-postgresql/)

> [Angular 17 + Spring Boot + MongoDB example](https://www.bezkoder.com/spring-boot-angular-17-mongodb/)

> [Angular 17 + Spring Boot: File upload example](https://www.bezkoder.com/angular-17-spring-boot-file-upload/)

Fullstack with Django:

> [Angular + Django example](https://www.bezkoder.com/django-angular-13-crud-rest-framework/)

> [Angular + Django + MySQL](https://www.bezkoder.com/django-angular-mysql/)

> [Angular + Django + PostgreSQL](https://www.bezkoder.com/django-angular-postgresql/)

> [Angular + Django + MongoDB](https://www.bezkoder.com/django-angular-mongodb/)

Serverless with Firebase:

> [Angular 17 Firebase CRUD with Realtime DataBase](https://www.bezkoder.com/angular-17-firebase-crud/)

> [Angular 17 Firestore CRUD example](https://www.bezkoder.com/angular-17-firestore-crud/)

> [Angular 17 Firebase Storage: File Upload/Display/Delete example](https://www.bezkoder.com/angular-17-firebase-storage/)

Integration (run back-end & front-end on same server/port)

> [How to integrate Angular with Node Restful Services](https://www.bezkoder.com/integrate-angular-12-node-js/)

> [How to Integrate Angular with Spring Boot Rest API](https://www.bezkoder.com/integrate-angular-12-spring-boot/)
