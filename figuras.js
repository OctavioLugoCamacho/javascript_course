//Código cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Código triángulo
console.group("Triángulo");
const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const baseTriangulo = 8;
const alturaTriangulo = 8;
console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm y " + baseTriangulo + "cm");
console.log("La altura del triángulo es: " + alturaTriangulo + "cm");
const permetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + permetroTriangulo + "cm");
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

//Código círculo
console.group("Círculo");
const radioCirculo = 5;
const diametroCirculo = radioCirculo * 2;
const pi = Math.PI;
console.log("El radio del círculo es: " + radioCirculo + "cm");
console.log("El diámetro del círculo es: " + diametroCirculo + "cm");
const perimetroCirculo = diametroCirculo * pi;
console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");
const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log("El área del círculo es: " + areaCirculo + "cm^2");
console.groupEnd();