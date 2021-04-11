import type { Config } from '@jest/types';
export default class ParkingLot {


    code: any;
    capacity: any;
    openHour: any;
    closeHour: any;

    constructor(code, capacity, openHour, closeHour) {
        this.code = code;
        this.capacity = capacity;
        this.openHour = openHour;
        this.closeHour = closeHour;
    }

    /* verificar se o estacionamento esta aberto */
    isOpen(date: Date) {
        const hour = date.getHours();
        /* se a hora que o carro esta entrando é menor que o horario invalido (estacionamento aberto)*/
        return (hour >= this.openHour && hour <= this.closeHour);

    }


}