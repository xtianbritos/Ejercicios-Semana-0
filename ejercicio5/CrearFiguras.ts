import { Circulo } from "./Circulo";
import { Cuadrado } from "./Cuadrado";

export class CrearFiguras {

    crear(nombre: string, tipo: string, valor: number): Circulo | Cuadrado {
        return tipo == 'circulo' ? new Circulo(nombre, valor): new Cuadrado(nombre, valor);
    }
}