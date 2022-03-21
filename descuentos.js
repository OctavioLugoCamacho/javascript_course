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

const coupons = [
  "Descuento 1",
  "Descuento 2",
  "Descuento 3",
];

const coupon = document.getElementById("coupon").value;

function calcularDescuento() {
  const inputPrice = parseInt(document.getElementById("price").value);
  const coupon = document.getElementById("coupon").value;
  let descuento;
  switch(coupon) {
    case coupons[0]: //Descuento 1
      descuento = 15;
    break;
    case coupons[1]: //Descuento 2
      descuento = 30;
    break;
    case coupons[2]: //Descuento 3
      descuento = 25;
    break;
  }
  const precioConDescuento = calcularPrecioConDescuento(inputPrice, descuento);
  const result = document.getElementById("result");
  result.innerText = "El precio con descuento son: $" + precioConDescuento;
}