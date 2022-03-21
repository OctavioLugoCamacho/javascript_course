function calcularPromedio(list) {
  const sumList = list.reduce(
    function(acumulado = 0, elemento) {
      return acumulado + elemento;
    }
  );
  const promedio = sumList / list.length;
  return promedio;
}