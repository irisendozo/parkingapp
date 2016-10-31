import { Component, OnInit } from '@angular/core';
import { ParkingSpace } from '../common/parking-space';
import { ApiService } from '../common/api.service';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  providers: [ ApiService ],
  styleUrls: ['./parking-list.component.less']
})
export class ParkingListComponent implements OnInit {
  parkingSpaces: ParkingSpace[] = []; // List of parking spaces
  selectedParkingSpace: ParkingSpace; // Selected parking space to show details
  errorMessage: string;
  loading: boolean; // Sets to true if currently getting data from the API
  mode = 'Observable';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // Upon component initialization, load getParkingSpaces method 
    this.getParkingSpaces();
  }

  // Load parking spaces from service
  getParkingSpaces() {
    // Set the page based on the number of parking spaces already loaded
    // divided by the default number of spaces loaded per call
    const page = (this.parkingSpaces.length / 10) + 1;

    // Set loading to true to show spinner
    this.loading = true;

    // Subscribe to the api service to trigger the call and return extracted data,
    // if successful to this.parkingSpaces 
    this.apiService.getParkingSpaces(page)
        .subscribe(
          // Append new results to existing parkingSpaces list
          parkingSpaces => this.parkingSpaces = this.parkingSpaces.concat(parkingSpaces),
          error => this.errorMessage = <any>error,
          () => this.loading = false);
  }

  // Set the selected parking space which is passed on to
  // parking-info component (a child component)
  selectParkingSpace(parkingSpace: ParkingSpace) {
    this.selectedParkingSpace = parkingSpace;
  }
}
