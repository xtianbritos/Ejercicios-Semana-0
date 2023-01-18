import { FiguraGeometrica } from "./FiguraGeometrica";

export abstract class Figura implements FiguraGeometrica {
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    calcularArea(): void {}
    calcularPerimetro(): void {}
}