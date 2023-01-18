const crearPalindromo = (palabra: string): string[] => {
    let arreglo: string[] = [];

    for (const letra of palabra) {
        arreglo.push(letra);
    }

    for (let index = arreglo.length-2; index >= 0; index--) {
        arreglo.push(arreglo[index]);
    }

    return arreglo;
}

console.log(`Palabra: HOLA. Palíndromo: ${crearPalindromo('HOLA')}`);
console.log(`Palabra: Pimiento. Palíndromo: ${crearPalindromo('Pimiento')}`);
console.log(`Palabra: casa. Palíndromo: ${crearPalindromo('casa')}`);