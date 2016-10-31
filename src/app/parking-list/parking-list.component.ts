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
  parkingSpaces: ParkingSpace[];
  selectedParkingSpace: ParkingSpace;
  errorMessage: string;
  mode = 'Observable';

  constructor(private apiService: ApiService) { }

  ngOnInit() { this.getParkingSpaces(); }

  getParkingSpaces() {
    this.apiService.getParkingSpaces()
        .subscribe(
          parkingSpaces => this.parkingSpaces = parkingSpaces,
          error => this.errorMessage = <any>error);
  }

  selectParkingSpace(parkingSpace: ParkingSpace) {
    this.selectedParkingSpace = parkingSpace;
  }
}
