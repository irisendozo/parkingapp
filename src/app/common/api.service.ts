import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ParkingSpace } from './parking-space';

@Injectable()
export class ApiService {

  constructor (private http: Http) { }

  getParkingSpaces (page): Observable<ParkingSpace[]> {
    const items = 10;
    const apiUrl =
      `http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=${items}&page=${page}`;

    return this.http.get(apiUrl)
               .map(this.extractData)
               .catch(this.handleApiError);
  }

  private extractData(res: Response) {
    const body = res.json();
    const parkingData = body.features || [];

    return parkingData.map((feature) => {
      const featureData = feature.properties.layers['parking.garage'].data;

      return {
        id: feature['@id'],
        name: featureData.Name,
        capacity: featureData.ShortCapacity,
        freeSpace: featureData.FreeSpaceShort,
        state: featureData.State === `ok`,
        geodata: {
          longitude: feature.geometry.coordinates[0],
          latitude: feature.geometry.coordinates[1]
        }
      };
    });
  }

  private handleApiError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || ``;
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
