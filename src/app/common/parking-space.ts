export class ParkingSpace {
  constructor(
    public id: string,
    public name: string,
    public capacity: number,
    public freeSpace: number,
    public state: boolean,
    public geodata: {
      latitude: number,
      longitude: number
    }) { }
}
