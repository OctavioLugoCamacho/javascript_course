//Funciones----------------------------------------------------------------
//Código cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

//Código triángulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

//Código círculo
const pi = Math.PI;
function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * pi;
}

function areaCirculo(radio) {
  return (radio * radio) * pi;
}

//Código HTML--------------------------------------------------------------
//Cuadrado
function calculaPerimetroCuadrado() {
  const input = parseInt(document.getElementById("inputCuadrado").value);
  const perimetro = perimetroCuadrado(input);
  alert(perimetro);
}

function calculaAreaCuadrado() {
  const input = parseInt(document.getElementById("inputCuadrado").value);
  const area = areaCuadrado(input);
  alert(area);
}

//Triángulo
function calculaPerimetroTriangulo() {
  const input1 = parseInt(document.getElementById("primerLado").value);
  const input2 = parseInt(document.getElementById("segundoLado").value);
  const input3 = parseInt(document.getElementById("base").value);
  const perimetro = perimetroTriangulo(input1, input2, input3);
  alert(perimetro);
}

function calculaAreaTriangulo() {
  const input1 = parseInt(document.getElementById("base").value);
  const input2 = parseInt(document.getElementById("altura").value);
  const area = areaTriangulo(input1, input2);
  alert(area);
}

//Círculo
function calculaPerimetroCirculo() {
  const input1 = parseInt(document.getElementById("radio").value);
  const perimetro = perimetroCirculo(input1);
  alert(perimetro);
}

function calculaAreaCirculo() {
  const input1 = parseInt(document.getElementById("radio").value);
  const area = areaCirculo(input1);
  alert(area);
}

//Isosceles
function calculaAltura() {
  const input1 = parseInt(document.getElementById("lado1").value);
  const input2 = parseInt(document.getElementById("lado2").value);
  const input3 = parseInt(document.getElementById("lado3").value);
  if (input1 != input2) {
    alert("No es isósceles");
  } else {
    const raiz = (Math.pow(input1, 2) - ((Math.pow(input2, 2)) / 4));
    const perimetro = Math.sqrt(raiz);
    alert(perimetro);
  }
}
