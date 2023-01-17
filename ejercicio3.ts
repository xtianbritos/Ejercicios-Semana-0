const obtenerMayor = (...argumentos: number[]): number => {
    let mayor = Math.max(...argumentos);
    return mayor;
}

console.log(obtenerMayor(1, 2, 40, 5));
console.log(obtenerMayor(100, 34, 2));
console.log(obtenerMayor(5, 66, 34, 1, 6900));
