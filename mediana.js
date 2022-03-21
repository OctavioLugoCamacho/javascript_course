const list = [
  100,
  50,
  300,
  20,
  60,
  30,
];

const list2 = list.sort(function(a, b){return a - b});


function calcularPromedio(list2) {
  const sumList = list2.reduce(
    function(acumulado = 0, elemento) {
      return acumulado + elemento;
    }
  );
  const promedio = sumList / list2.length;
  return promedio;
}

let mediana;
const mitad = parseInt(list2.length / 2);

function par(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

if (par(list2.length)) {
  const element1 = list2[mitad - 1];
  const element2 = list2[mitad];
  const promedio = calcularPromedio([element1, element2]);
  mediana = promedio;
} else {
  mediana = list2[mitad];
}