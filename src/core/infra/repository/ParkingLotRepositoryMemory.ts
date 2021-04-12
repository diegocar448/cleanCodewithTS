import ParkingLot from '../../entity/ParkingLot';
import ParkingLotRepository from "../../repository/ParkingLotRepository";
import ParkingLotAdapter from "../../../adapter/ParkingLotAdapter";

export default class ParkingLotRepositoryMemory implements ParkingLotRepository {

    parkingLots = [
        { code: "shopping", capacity: 5, open_hour: 8, close_hour: 22, occupiedSpaces: 0 }
    ];
    parkedCars = [];
  
    getParkingLot(code: string): Promise<ParkingLot> {
        const parkingLotData = this.parkingLots.find(parkingLot => parkingLot.code === code)
        const occupiedSpaces = this.parkedCars.length;
        const parkingLot = ParkingLotAdapter.create(parkingLotData.code, parkingLotData.capacity, parkingLotData.open_hour, parkingLotData.close_hour, occupiedSpaces);
        return Promise.resolve(parkingLot);
    }
    saveParkedCar(code: string, plate: string, date: Date): void {
        this.parkedCars.push({ code, plate, date });
    }
}