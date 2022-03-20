function calcularPrecioConDescuento(precio, descuento) {
  const porcentajeDescuento = 100 - descuento;
  const precioDescuento = (precio * porcentajeDescuento) / 100;
  return precioDescuento;
}
