import { Figura } from "./Figura";

export class Circulo extends Figura{
    radio: number;

    constructor(nombre: string, radio: number) {
        super(nombre);
        this.radio = radio;
    }

    calcularArea(): void {
        console.log(`El área del circulo es ${(Math.PI*this.radio*this.radio).toFixed(2)}`);
    }

    calcularPerimetro(): void {
        console.log(`El perímetro del circulo es ${(2*Math.PI*this.radio).toFixed(2)}`);
    }
}