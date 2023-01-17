const promedio = (...argumentos: number[]): number => {
    let sumatoria = argumentos.reduce((a: number, b: number): number => {
        return a + b;
    })
    return sumatoria / argumentos.length;
}

const compararPromedio = (promedio: number, numero: number): string => {
    return promedio > numero ? 'mayor': 'menor';
}

const promedioMayorMenor = (num: number, ...args: number[]): string => {
    return compararPromedio(promedio(...args), num);
}

console.log(promedioMayorMenor(10, 2, 3, 4, 5, 6, 1));
console.log(promedioMayorMenor(23, 35, 465, 34324,2));
console.log(promedioMayorMenor(999999,35465, 23, 45));
console.log(promedioMayorMenor(2, 3, 4));