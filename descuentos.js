function calcularPrecioConDescuento(precio, descuento) {
  const porcentajeDescuento = 100 - descuento;
  const precioDescuento = (precio * porcentajeDescuento) / 100;
  return precioDescuento;
}

function calcularPrecio() {
  const inputPrice = parseInt(document.getElementById("price").value);
  const inputDiscount = parseInt(document.getElementById("discount").value);
  const price = calcularPrecioConDescuento(inputPrice, inputDiscount);
  const result = document.getElementById("result");
  result.innerText = "El precio con descuento es: $" + price;
}
