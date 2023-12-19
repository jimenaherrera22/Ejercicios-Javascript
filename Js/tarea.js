// Tarea 

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
let ParImpar=parseInt(prompt("Ingrese un numero"))
if (!isNaN(ParImpar)) {
    if (ParImpar % 2 === 0) {
        console.log("El numero ingresado es par");
    } else{
        console.log("El numero ingresado es impar");
    }
} else{
    console.log("Ingrese un numero valido");
}

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
let numer=parseInt(prompt("Ingrese un número por favor"))
if (numer === 0) {
    console.log("El número ingrsado es cero");
} else if (numer <0) {
    console.log("El número ingresado es negativo");
} else{
    console.log("El número ingresado es positivo");
}
// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
let valor1
let valor2
//valor1=parseInt(prompt("Ingrese el primer número"))
//valor2=parseInt(prompt("Ingrese el segundo número"))

if (valor1>valor2) {
    console.log("El primer numero ingresado es mayor",valor1);
    document.write("El primer numero ingresado es mayor")
}else if (valor2>valor1) {
    console.log("El segundo numero ingresado es mayor",valor2);
    document.write("El segundo numero ingresado es mayor")
}

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
let contraseña
contraseña=prompt('Ingrese una contraseña por favor, entre 3 y 7 caracteres con al menos un ! o -');

console.log('Contraseña-->', contraseña);
const regexContraseña=/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
const regexMayus=/([A-Z])$/;
const regexMinus=/([a-z])$/;

if (contraseña===null) {
    console.log('El usuario presiono cancelar');
} else if(3<=contraseña.length<=7 && (contraseña.includes(caracteres)||contraseña.includes(terminacion))){
    console.log('La contraseña tiene una longitud valida y contiene caracteres especiales');
}else if(regexContraseña.test(contraseña.trim())){
    console.log('La contraseña tiene una longitud valida y contiene caracteres especiales');
}
else{
    console.log('La contraseña no cumple con la longitud o no contiene caracteres especiales');
}

  
// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
let nota
//nota=parseInt(prompt("Ingrese la calificacion"))

if (nota<70) {
    console.log("No aprobaste tu calificacion es menor a 70");
    document.write("No aprobaste tu calificacion es menor a 70")
}else if (nota>=70) {
    console.log("Aprobaste tu nota es 70 o mas");
    document.write("Aprobaste tu nota es 70 o mas");
}

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
let vocalOcons=prompt("Ingrese una letra en minuscula por favor")
switch (vocalOcons) {
    case ("a"):
    case ("e"):
    case ("i"):    
    case ("o"):
    case ("u"):
        console.log("Ingreso una vocal");    
        break;

    default:
        console.log("Ingresaste una consonante");
        break;
}

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
let dia
//dia=parseInt(prompt("Ingrese un número del 1 al 7"))

switch (dia) {
    case 1:
        console.log("Lunes");
        document.write("Lunes")
        break;
     case 2:
        console.log("Martes");
        document.write("Martes")
        break;
     case 3:
        console.log("Miercoles");
        document.write("Miercoles")
    case 4:
        console.log("Jueves");
        document.write("Jueves")
        break;
    case 5:
        console.log("viernes");
        document.write("viernes")
        break;
    case 6:
        console.log("Sabado");
        document.write("Sabado")
        break;
    case 7:
        console.log("Domingo");
        document.write("Domingo")
        break;
    default:
        console.log("No ingresaste un  número valido");
        break;
}

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.
let numPrimo = parseInt(prompt("Ingresa un número:"));

if (!isNaN(numPrimo)) {
  if (esPrimo(numPrimo)) {
    console.log(numPrimo + " es un número primo.");
  } else {
    console.log(numPrimo + " no es un número primo.");
  }
} else {
  console.log("Por favor, ingresa un número válido.");
}

function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
let edad
//edad=parseInt(prompt("Ingrese su edad"))

if (edad<18) {
    console.log("Tienes menos de 18 años");
    document.write("Tienes menos de 18 años")
}else if(edad>18){
    console.log("Tienes mas de 18 años");
    document.write("Tienes mas de 18 años")
}else{
    console.log("Tienes 18 años");
    document.write("Tienes 18 años")
}

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
let numero_1
let numero_2
//numero_1=parseInt(prompt("Ingrese el primer número"))
//numero_2=parseInt(prompt("Ingrese el segundo número"))
let suma
suma=numero_1+numero_2

if (suma<100) {
    console.log("La suma es menor a 100");
    document.write("La suma es menor a 100");
}else if(suma>100){
    console.log("La suma es mayor a 100");
    document.write("La suma es mayor a 100");
}else{
    console.log("La suma es igual a 100");
    document.write("La suma es igual a 100");
}

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
let num1=parseFloat(prompt("Ingrese el primer número"))
let num2=parseFloat(prompt("Ingrese el segundo número"))
let num3=parseFloat(prompt("Ingrese el tercer número"))
let max=Math.max(num1, num2, num3)
console.log("El  número mas grande ingresado es;",max);
// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
let mayOmin=prompt("Ingrese una letra mayuscula o miniscula")
if(regexMayus.test(mayOmin)){
    console.log('Es una letra mayuscula');
}else if(regexMinus.test(mayOmin)){
    console.log('Es una letra minuscula');
}else{
    console.log('No es un caracter valido');
}

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
let numPerfecto=parseInt(prompt("Ingrese un numero!!"))
if (numPerfecto > 0 ) {
    let sumaDivisores=0;
    for (let i = 1; i < numPerfecto; i++) {
        if (numPerfecto % i === 0) {
          sumaDivisores += i;
        }
} 
if (sumaDivisores === numPerfecto) {
    
    console.log(numPerfecto + " es un número perfecto.");
} else {
  console.log(numPerfecto+ " no es un número perfecto.");
}
} else {
console.log("Por favor, ingresa un número entero positivo válido.");
 }

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.
let descomposición=parseInt(prompt("Ingrese su  número."))
if (descomposición >1 ) {

    for (let i = 2; i <= descomposición; i++) {
        console.log("La descomposicion en factores primos es:",descomposición);
        while (descomposición % i === 0) {
            descomposición /= i
            console.log(i);
        }
    }
} else{
    console.log("Ingrese un numero mayor a 1");
}


// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
let fecha=prompt("Ingrese una fecha con este formato dia/mes/año")
const regexFecha=/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/
if (fecha===null) {
    console.log('El usuario presiono cancelar');
} else if (regexFecha.test(fecha)) {
    console.log("La fecha ingresada es:",fecha);
}else{
    console.log("No ingreso una fecha valida");
}

//TAREA 1 Switch

// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
let mes
//mes=parseInt(prompt("Ingrese un número del 1 al 12"))

switch (mes) {
    case 1:
        console.log("Enero");
        document.write("Enero")
        break;
     case 2:
        console.log("Febrero");
        document.write("Febrero")
        break;
     case 3:
        console.log("Marzo");
        document.write("Marzo")
    case 4:
        console.log("Abril");
        document.write("Abril")
        break;
    case 5:
        console.log("Mayo");
        document.write("Mayo")
        break;
    case 6:
        console.log("Junio");
        document.write("Junio")
        break;
    case 7:
        console.log("Julio");
        document.write("Julio")
        break;
        case 8:
            console.log("Agosto");
            document.write("Agosto")
            break;
        case 9:
            console.log("Septiembre");
            document.write("Septiembre")
            break;
        case 10:
            console.log("Octubre");
            document.write("Octubre")
            break;  
            case 11:
                console.log("Noviembre");
                document.write("Noviembre")
                break;
            case 12:
                console.log("Diciembre");
                document.write("Diciembre")          
    default:
        console.log("No ingresaste un  número valido");
        break;
}
// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
let dias
//dias=parseInt(prompt("Ingrese un número del 1 al 7"))

switch (dias) {
    case 1:
        console.log("Lunes");
        document.write("Lunes")
        break;
     case 2:
        console.log("Martes");
        document.write("Martes")
        break;
     case 3:
        console.log("Miercoles");
        document.write("Miercoles")
    case 4:
        console.log("Jueves");
        document.write("Jueves")
        break;
    case 5:
        console.log("viernes");
        document.write("viernes")
        break;
    case 6:
        console.log("Sabado");
        document.write("Sabado")
        break;
    case 7:
        console.log("Domingo");
        document.write("Domingo")
        break;
    default:
        console.log("No ingresaste un  número valido");
        break;
}
// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
let letra
//letra=(prompt("Ingrese una letra en minuscula"))
switch (letra) {
    case ("a"):
    case ("e"):
    case ("i"):
    case ("o"):
    case ("u"):
        console.log("Ingresaste una vocal");            
        document.write("Ingresaste una vocal")
        break;
    default:
        console.log("Ingresaste una consonante");
        document.write("Ingresaste una consonante")
        break;
}
// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
let diaSemana

switch (diaSemana) {
    case 1:
        console.log("Lunes");
        document.write("Lunes");
    case 2:
        console.log("Martes");
        document.write("Martes");
    case 3:
        console.log("Miercoles");
        document.write("Miercoles");
    case 4:
        console.log("Jueves");
        document.write("Jueves");
    case 5:
        console.log("Viernes");
        document.write("Viernes");    
        break;
    default:
        console.log("No ingresaste un numero valido");
        document.write("No ingresaste un numero valido");
        break;
}
// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.

// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
let calificacion
//calificacion=parseInt(prompt("Ingrese su calificacion"))
switch (calificacion) {
    case 0:
    case 1: 
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Suspendido");    
        document.write("Suspendido"); 
        break;
    case 6:
    case 7: 
        console.log("Aprobado");    
        document.write("Aprobado"); 
        break;
    case 8:
    case 9: 
          console.log("Notable");    
          document.write("Notable"); 
          break;  
    case 10:
        console.log("Sobresaliente");
        document.write("Sobreesaliente");
        break;
    default:
        console.log("No ingresaste un numero valido");
        break;
}

//TAREA 2 Ciclos 

// Imprimir los números pares del 2 al 20 en la consola.
let i=2

for (let i= 2; i <= 20; i=i+2) {
    console.log("El valor de i es:",i);
    
}

// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
let texto="Hola Mundo soy Jimena"
for (let i = 0; i < texto.length; i++) {
    let letraMayuscula = texto[i].toUpperCase();
  console.log(letraMayuscula);
    
}
// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
let numerNuevo=parseInt(prompt("Ingrese su número. "))
if (numerNuevo> 0) {
    

for (let i = 1; i <= numerNuevo; i++) {
    console.log(i);
    
}
 }else{
    console.log("Por favor, ingrese un número entero positivo válido.");
 }
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
let numeroIngresado=(prompt("Ingrese una serie de números separados por coma y espacio entre ellos. "))
let serieNumerica = numeroIngresado.split(',').map(Number);
if (serieNumerica.every) {
    if (serieNumerica.length> 0){
        let max=Math.max(...serieNumerica)
        console.log("Elnúmeros mas grande es ",max);
    }
}
// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
let palabra=(prompt("Ingrese una palabra para saber si es palíndromo o no."))
let palabraSinespacio=palabra.toLocaleLowerCase();
let palabraRevertida=palabraSinespacio.split("").reverse().join("");

if (palabraSinespacio===palabraRevertida) {
    console.log("La palabra es un palíndromo");
}else{
    console.log("La palabra no es un palíndromo");
}

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
let serie=(prompt("Por favor ingrese una serie de números separados por coma"))
let sumaPar=serie.split(",").map(Number);

if (sumaPar.every(numero => !isNaN(numero))) {
    let suma=0;
for (let i = 0; i < sumaPar.length; i++) {
   if (sumaPar[i] % 2 === 0) {
    suma += sumaPar[i]
   }
    
}console.log("El resultado de la suma es:",suma);
 }
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
let numNegativo=prompt("Ingrese números separados por comas.")
let numFinal= numNegativo.split(",").map(Number)
if (numFinal.every(numero => !isNaN(numero))) {
    let cantidadNegativos=0
    for (let i = 0; i < numFinal.length; i++) {
        if (numFinal[i] < 0) {
            cantidadNegativos++;
        }
        
    } console.log("Los números negativos son:",cantidadNegativos);
}
// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
let numeroImpar=parseInt(prompt("Ingrese un número!."))
if (numeroImpar> 0) {
    
for (let i= 1; i <= numeroImpar; i += 2) {
    console.log("El valor de i es:",i);
    
}
 }
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
let numeroNuevo=(prompt("Ingrese una serie de números separados por coma y espacio entre ellos. "))
let seriesNumerico = numeroNuevo.split(',').map(Number);
if (seriesNumerico.every) {
    if (seriesNumerico.length> 0){
        let min=Math.min(...seriesNumerico)
        console.log("El número mas pequeño es ",min);
    }
}
// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let intentos = 0;
let adivino = false;

while (!adivino) {
  let intentoUsuario = parseInt(prompt("Adivina el número (entre 1 y 100):"));

  if (!isNaN(intentoUsuario) && intentoUsuario >= 1 && intentoUsuario <= 100) {
    intentos++;

    if (intentoUsuario === numeroAleatorio) {
      adivino = true;
      console.log("¡Adivinaste el número!");
      console.log("Cantidad de intentos:", intentos);
    } else {
      console.log("Intenta nuevamente. ¡No es el número correcto!");
    }
  } else {
    console.log("Por favor, ingrese un número válido entre 1 y 100.");
  }
}

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
let num7=(prompt("Ingrese una serie de de números separados por coma!! "))
let numPar=num7.split(",").map(Number)
if (numPar > 0) {
    

for (let i= 0; i <= numPar.length; i=i+2) {
    
    contador++;
}
 } console.log("Los números pares son ",i);

//TAREA 3 Arrays

// Dado un array de números, escribir una función que retorne el número más grande del array.
let precios=[100,23,45,67,324,32,65];
let valorMax=Math.max(...precios);
console.log("El precio maximo es:",valorMax);
// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
let arrOriginal=[1,2,3,4,5,6,7,8,9,10];
console.log("Array original:",arrOriginal);
let arrFilter=arrOriginal.filter((element)=> element %2===0 );
console.log("El nuevo array es:",arrFilter);
 
// Dado un array de números, escribir una función que retorne la suma de todos los números del array.
let arrNum=[150,70,30];
console.log("El array de numeros es:",arrNum);
let arrSuma=arrNum.reduce((a,b)=>a+b,0 )
console.log("El valor de la suma es:",arrSuma);


// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
let arrMin=["casa,luna,mate,lunes,uno"];
console.log("El listado en miniscula es:",arrMin);
let arrMayus=arrMin.map((element)=> element.toUpperCase())
console.log("El listado en mayuscula es:",arrMayus);

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
let arrX=[20,50,345,67];
console.log("Array original donde el numero X es 67:",arrX);
let arrFil=arrX.filter((element)=> element !==67 );
console.log("El nuevo array es:",arrFil);

// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
let arrNum1=[150,43,35,7,5,2];
console.log("El array de numeros es:",arrNum1);
let arrSuma2=arrNum1.reduce((a,b)=>a+b,0 )
console.log("El valor de la suma es:",arrSuma2);
let numerosGrandes=arrNum1.filter((element)=> element > 10)
console.log("Los numeros grandes son:",numerosGrandes);
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
let arrLargo=["luz","mio","martes","biologia","opera","leon","pollo","palo","orilla"];
console.log("El listado original es:",arrLargo);
let arrpequeño=arrLargo.filter((element) => element.length  >= 5 )
console.log("El listado con palabras con 5 caracteres o mas es:",arrpequeño);
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
let arrPalabras=["arbol","tijera","aire","alcohol","lapicera","lupa","aerolinea","palo"];
console.log("El listado original de palabras es:",arrPalabras);
let arrLetras=arrPalabras.filter((element) => element.length >= 5 && element.startsWith("a"));
console.log("Palabras que empiecen con a y tengan mas de 5 caracteres:",arrLetras);
// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
let arrNumero=[390,455,22,90,13,2,15,800,89];
console.log("Los numeros originales son:",arrNumero,"donde el numero x es 22");
let numeros=arrNumero.filter((element) => element > 5).slice(0,3);
console.log("Los numeros mayores a x son:",numeros);