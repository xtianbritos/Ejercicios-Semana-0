import { CrearFiguras } from "./CrearFiguras";

let objeto = new CrearFiguras();

let cuadradoPepe = objeto.crear('pepe', 'cuadrado', 12);
let circuloMaria = objeto.crear('maria', 'circulo', 5);

cuadradoPepe.calcularArea();
cuadradoPepe.calcularPerimetro();

circuloMaria.calcularArea();
circuloMaria.calcularPerimetro();