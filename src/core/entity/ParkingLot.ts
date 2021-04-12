
export default class ParkingLot {


    code: string;
    capacity: number;
    openHour: number;
    closeHour: number;
    occupiedSpaces: number;

    constructor(code, capacity, openHour, closeHour, occupiedSpaces) {
        this.code = code;
        this.capacity = capacity;
        this.openHour = openHour;
        this.closeHour = closeHour;
        this.occupiedSpaces = occupiedSpaces;
    }

    /* verificar se o estacionamento esta aberto */
    isOpen(date: Date) {
        const hour = date.getHours();
        /* se a hora que o carro esta entrando é menor que o horario invalido (estacionamento aberto)*/
        return (hour >= this.openHour && hour <= this.closeHour);

    }

    /* se o capacity for igual ao occupiedSpaces então esta lotado */
    isFull() {
        return this.capacity === this.occupiedSpaces;
    }


}