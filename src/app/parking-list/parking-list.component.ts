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
  parkingSpaces: ParkingSpace[] = [];
  selectedParkingSpace: ParkingSpace;
  errorMessage: string;
  loading: boolean;
  mode = 'Observable';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getParkingSpaces();
  }

  getParkingSpaces() {
    const page = (this.parkingSpaces.length / 10) + 1;

    this.loading = true;

    this.apiService.getParkingSpaces(page)
        .subscribe(
          parkingSpaces => this.parkingSpaces = this.parkingSpaces.concat(parkingSpaces),
          error => this.errorMessage = <any>error,
          () => this.loading = false);
  }

  selectParkingSpace(parkingSpace: ParkingSpace) {
    this.selectedParkingSpace = parkingSpace;
  }
}
