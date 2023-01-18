const esPalindromo = (palabra: string): boolean => {
    let palabraArray: string[] = palabra.split('');
    palabraArray.reverse();
    let palabraInvertida: string = palabraArray.join('');
    
    return palabra == palabraInvertida? true: false;
}

console.log(`¿Pepe es un palindromo? ${esPalindromo('pepe')}`);
console.log(`¿Hola soy german es un palindromo? ${esPalindromo('hola soy german')}`);
console.log(`¿Oso es un palindromo? ${esPalindromo('oso')}`);
console.log(`¿Anitalavalatina es un palindromo? ${esPalindromo('anitalavalatina')}`);
console.log(`¿Caja es un palindromo? ${esPalindromo('caja')}`);