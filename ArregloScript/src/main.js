const A = [];
    const arrayLength = 12; // Tamaño del arreglo
    const minRandomValue = -10; // mín para aleatorios
    const maxRandomValue = 45; // máx para aleatorios


    for (let i = 0; i < arrayLength; i++) {
        const randomValue = Math.floor(Math.random() * (maxRandomValue - minRandomValue + 1)) + minRandomValue;
        A.push(randomValue);
    }

    let buscar = null;
    let i = 0;

    while (i < A.length) {
        if (buscar === null || A[i] < buscar) {
            buscar = A[i];
        }
        i++;
    }

    console.log("El número más bajo:", buscar);
    console.log("LA secuencia es la siguiente(Array):", A);