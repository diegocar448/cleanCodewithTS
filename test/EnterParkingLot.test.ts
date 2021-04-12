import type { Config } from '@jest/types';
import EnterParkingLot from '../src/core/usecase/EnterParkingLot';
import ParkingLotRepositoryMemory from '../src/core/infra/repository/ParkingLotRepositoryMemory';
import GetParkingLot from '../src/core/usecase/GetParkingLot';
import { hasUncaughtExceptionCaptureCallback } from 'node:process';



test("Should enter parking lot", async function () {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
    const parkingLotBeforeEnter = getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
    await enterParkingLot.execute("shopping", "MMM-0001", new Date("2021-03-01T10:00:00"));
    const parkingLotAfterEnter = getParkingLot.execute("shopping");
    expect(parkingLotAfterEnter.occupiedSpaces).toBe(1);

    //const parkingLot = await enterParkingLot.execute("shopping", "MMM-0001", new Date("2021-03-01T10:00:00"));
    //expect(parkingLot.code).toBe("shopping");

});


