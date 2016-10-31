import { Component, Input } from '@angular/core';
import { ParkingSpace } from '../common/parking-space';

@Component({
  selector: 'app-parking-info',
  templateUrl: './parking-info.component.html',
  styleUrls: ['./parking-info.component.less']
})
export class ParkingInfoComponent {
  // Get the selected parking space from parent component, parking-list
  @Input() parkingSpace: ParkingSpace;

  // Get the date today
  today: Date = new Date();
}
