import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
// Import Angular Material 2
import { MaterialModule } from '@angular/material';
// Import Google Maps for Angular 2
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { ParkingListComponent } from './parking-list/parking-list.component';
import { ParkingInfoComponent } from './parking-info/parking-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ParkingListComponent,
    ParkingInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: `AIzaSyAIuCVF1uhzVVoaJU0LHiB9tE25pcHui0o`
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
