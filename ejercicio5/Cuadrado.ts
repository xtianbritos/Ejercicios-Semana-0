import { Figura } from "./Figura";

export class Cuadrado extends Figura{
    lado: number

    constructor(nombre: string, lado: number) {
        super(nombre);
        this.lado = lado;
    }

    calcularArea(): void {
        console.log(`El área del cuadrado es ${this.lado * this.lado}`);
    }

    calcularPerimetro(): void {
        console.log(`El Perímetro del cuadrado es ${this.lado* 4}`);
    }
}