import type { Config } from '@jest/types';
import EnterParkingLot from '../src/core/usecase/EnterParkingLot';
import ParkingLotRepositoryMemory from '../src/core/infra/repository/ParkingLotRepositoryMemory';



test("Should enter parking lot", async function () {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const parkingLot = await enterParkingLot.execute("shopping", "MMM-0001", new Date("2021-03-01T10:00:00"));
    //expect(parkingLot.code).toBe("shopping");

});


