# Real-time Parking Capacity in Amsterdam

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0. It lists out parking lots in Amsterdam using the
[CitySDK API] (http://citysdk.waag.org/). It also displays statistics on each lot, i.e. free lots and total capacity. It uses google maps plugin to
render the geodata of each lot's latitude and longitude.

## Pre-requisites

This project requires Node 4 or higher, together with NPM 3 or higher.

## Running the Application

1. Run `npm run start` for a server. 
2. Navigate to `http://localhost:4200/`.

## Architecture

The project follows the following project structure:
├── src/
│ ├── app/
│ │ ├── common/
│ │ │ ├── api.service.ts
│ │ │ ├── parking-space.ts
│ │ ├── parking-info/
│ │ │ ├── parking-info.component.html
│ │ │ ├── parking-info.component.less
│ │ │ ├── parking-info.component.ts
│ │ ├── parking-list/
│ │ │ ├── parking-list.component.html
│ │ │ ├── parking-list.component.less
│ │ │ ├── parking-list.component.ts
│ │ ├── app.component.html
│ │ ├── app.component.less
│ │ ├── app.component.ts
│ │ ├── app.module
│ │ ├── index.ts
│ ├── environments/
│ │ ├── environment.ts
│ │ ├── environment.prod.ts
│ ├── icon.png
│ ├── index.html
│ ├── main.ts
│ ├── polyfills.ts
│ ├── styles.less
│ ├── tsconfig.json
│ ├── typings.d.ts
│── dist/
│── node_modules/
│── angular-cli.json
│── package.json
│── tslint.json

This project is in Angular 2 + Typescript. It follows the best practices pushed forward by the Angular team. The root module
is the AppModule (app.module). Two custom modules were also created. One is ParkingList (parking-list.component) which displays
the list of parking spaces obtained from the API. The other is ParkingInfo (parking-info.component) which displays specific
details about the selected parking space and a google map view based on the space's geometric data.

A separate service (common/api.service) is created to abstract the api calls away from the components. It strictly contains
getting the information from the API endpoint (http://api.citysdk.waag.org/layers/parking.garage/objects), extracts the data
according to the ParkingSpace class (common/parking-space) attributes and returns the JSON object to the parent component.

Instead of promises, observables were used to communicate the extracted JSON body from the API to the parent component. 

For the styling, [Angular Material 2] (https://github.com/angular/material2) was mainly used. Responsiveness was achieved with
the use of flexboxes. 