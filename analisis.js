const salariosMex = mexico.map(
  function (persona) {
    return persona.salary;
  }
);

const salariosMexSorted = salariosMex.sort(
  function (salaryA, salaryB) {
    return salaryA - salaryB;
  }
);

function esPar(num) {
  return (num % 2 === 0);
}

function calcularPromedio(list) {
  const sumList = list.reduce(
    function(acumulado = 0, elemento) {
      return acumulado + elemento;
    }
  );
  const promedio = sumList / list.length;
  return promedio;
}

function salariosMediana(list) {
  const mitad = parseInt(list.length / 2);
  if (esPar(list.length)) {
    const personaMitad1 = list[mitad - 1];
    const personaMitad2 = list[mitad];
    const mediana = calcularPromedio([personaMitad1, personaMitad2]);
    return mediana;
  } else {
    const personaMitad = list[mitad];
    return personaMitad;
  }
}

console.log(
  salariosMediana(salariosMexSorted)
);