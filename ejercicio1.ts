const areaCirculo = (radio: number): void => {
    console.log(`El área del círculo con radio ${radio} es ${(Math.PI*radio*radio).toFixed(2)}`);
}

areaCirculo(10);
areaCirculo(5);
areaCirculo(25);