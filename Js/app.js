//Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
alert("Un mensaje")
//Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write("Hello World")
//Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.write("<br> 3+5=8")
//Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
let nombreUsuario=prompt("Ingrese su nombre de usuario")
console.log("Hola",nombreUsuario);
//Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

let numero_1=parseInt(prompt("Ingrese el primer número"))
let numero_2=parseInt(prompt("Ingrese el segundo número"))
let suma=(numero_1)+(numero_2)
console.log("El resultado de la suma es:",suma);

//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let numero1=parseInt(prompt("Por favor ingrese el primer número"))
let numero2=parseInt(prompt("Por favor ingrese el segundo número"))
if (numero1>numero2) {
    console.log("El primer número es mayor");
}else if (numero1<numero2) {
    console.log("El segundo número es mayor ");
}else{
    console.log("No ingreso un número valido");
}

// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let números=(prompt("Ingrese tres números separados por coma"))
let variable=números.split(",").map(Number)
if (variable.every((numero => !isNaN(numero)))) {
    
if (variable.length> 0) {
    let max=Math.max(...variable)
    console.log("Elnúmeros mas grande es ",max);
}
 }
//Escribe un programa que pida un número y diga si es divisible por 2
let numDivisible = parseInt(prompt("Por favor ingrese un número:"));

if (!isNaN(numDivisible)) {
  if (numDivisible % 2 === 0) {
    console.log("El número es divisible por 2.");
  } else {
    console.log("El número no es divisible por 2.");
  }
} else {
  console.log("Por favor, ingrese un número válido.");
}

//Escribe un programa que pida una frase y escriba las vocales que aparecen
let frase = prompt("Escribe una frase");

if (frase !== null) {
    let vocalesEncontradas = "";

    for (let i = 0; i < frase.length; i++) {
        let caracter = frase[i];

        if ("aeiou".includes(caracter.toLowerCase())) {
            vocalesEncontradas += caracter;
        }
    }

    if (vocalesEncontradas !== "") {
        console.log("Las vocales encontradas son: " + vocalesEncontradas);
    } else {
        console.log("No se encontraron vocales en la frase.");
    }
} else {
    console.log("Por favor, ingrese una frase válida.");
}

// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
let divisibles=parseInt(prompt("Ingrese un número!"))
if (!isNaN(divisibles)) {
    let esDivisible=false;
    if (divisibles % 2 === 0 || divisibles % 3 === 0 || divisibles % 5 === 0 || divisibles % 7 === 0){
        esDivisible=true
    }

if (esDivisible) {
    console.log("El número es divisible por 2,3,5 o 7 ");
}else{
    console.log("El número no es divisible por 2,3,5 o 7 ");
}
 }
// Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
let numero = parseInt(prompt("Ingrese un número por favor"));

if (!isNaN(numero)) {
  let divisores = [];

  if (numero % 2 === 0) {
    divisores.push(2);
  }
  if (numero % 3 === 0) {
    divisores.push(3);
  }
  if (numero % 5 === 0) {
    divisores.push(5);
  }
  if (numero % 7 === 0) {
    divisores.push(7);
  }

  if (divisores.length > 0) {
    console.log(numero + " es divisible por los siguientes números: " + divisores.join(', '));
  } else {
    console.log(numero + " no es divisible por 2, 3, 5 ni 7.");
  }
} else {
  console.log("Por favor, ingrese un número válido.");
}
