import { Component, OnInit, Input } from '@angular/core';
import { ParkingSpace } from '../common/parking-space';

@Component({
  selector: 'app-parking-info',
  templateUrl: './parking-info.component.html',
  styleUrls: ['./parking-info.component.less']
})
export class ParkingInfoComponent implements OnInit {
  @Input() parkingSpace: ParkingSpace;
  today: Date = new Date();

  constructor() {
  }

  ngOnInit() {
  }

}
