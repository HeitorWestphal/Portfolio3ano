function ListaNumeros(numeros) {
    const NumerosAleatorios = [...numeros];
  
    for (let i = 0; i < NumerosAleatorios.length; i++) {
      for (let j = 0; j < NumerosAleatorios.length - 1 - i; j++) {
        if (NumerosAleatorios[j] > NumerosAleatorios[j + 1]) {
          const temp = NumerosAleatorios[j];
          NumerosAleatorios[j] = NumerosAleatorios[j + 1];
          NumerosAleatorios[j + 1] = temp;
        }
      }
    }
  
    return NumerosAleatorios;
  }
  
  const numbers = [5, 2, 8, 1, 9];
  const NumerosAleatorios = ListaNumeros(numbers);
  console.log("Números ordenados:", NumerosAleatorios);