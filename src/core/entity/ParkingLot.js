"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ParkingLot = /** @class */ (function () {
    function ParkingLot(code, capacity, openHour, closeHour) {
        this.code = code;
        this.capacity = capacity;
        this.openHour = openHour;
        this.closeHour = closeHour;
    }
    return ParkingLot;
}());
exports.default = ParkingLot;
