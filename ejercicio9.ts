const imprimirArbol = (n: number) => {
    for (let i = 0; i < n; i++) {
        let espacios: string = '';
        let estrellas: string = '';
        
        for (let j = 0; j < n-i-1; j++) {
            espacios += ' ';
        }
        
        for (let x = 0; x < i*2+1; x++) {
            estrellas += '*';
        }

        console.log(espacios+estrellas);
    }

    let base: string = '';

    for (let i = 0; i < n - 2; i++) {
        base += ' ';
    }

    base += '***';
    console.log(base);
}

imprimirArbol(10);