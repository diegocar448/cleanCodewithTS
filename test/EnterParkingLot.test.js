"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var EnterParkingLot_1 = __importDefault(require("../src/core/usecase/EnterParkingLot"));
test("Should enter parking lot", function () {
    var enterParkingLot = new EnterParkingLot_1.default();
    var parkingLot = enterParkingLot.execute();
    expect(parkingLot.code).toBe("shopping");
});
