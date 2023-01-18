const crearPalindromo = (cadena: string): string => {
    let array: string[] = cadena.split('');
    array.reverse();
    let palindromo: string = cadena.concat(array.join(''));

    return palindromo;
}

console.log(`Palabra: Pepe. Palíndromo: ${crearPalindromo('pepe')}`);
console.log(`Palabra: Casa. Palíndromo: ${crearPalindromo('casa')}`);
console.log(`Palabra: ventilador. Palíndromo: ${crearPalindromo('ventilador')}`);
console.log(`Palabra: teclado. Palíndromo: ${crearPalindromo('teclado')}`);