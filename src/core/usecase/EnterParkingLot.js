"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ParkingLot_1 = __importDefault(require("../entity/ParkingLot"));
var EnterParkingLot = /** @class */ (function () {
    function EnterParkingLot() {
    }
    EnterParkingLot.prototype.execute = function () {
        var parkingLot = new ParkingLot_1.default("shopping", 100, 8, 22);
        return parkingLot;
    };
    return EnterParkingLot;
}());
exports.default = EnterParkingLot;
