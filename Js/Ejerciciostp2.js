//Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
let edad=parseInt(prompt("Ingrese su edad:"))
if (edad>=18) {
    console.log("Tienes edad para conducir");
}else if (edad <18) {
    console.log("No tienes edad para conducir");
}else{
    console.log("No ingreso un número valido");
}
/*Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.Ejemplo:
Input: 5   Output: Suficiente
Input: 50  Output: Número erróneo
Input: hola10  Output: Introduce un número válido
*/
let nota=parseInt(prompt("Ingrese una nota de 0 a 10"))
if (nota == 0 || nota == 1 || nota == 2) {
    alert("Muy deficiente")
} else if (nota == 3 || nota == 4) {
    alert("Insuficiente")
} else if (nota == 5 ||  nota == 6) {
    alert("Suficiente")
}else if (nota ==7 ) {
    alert("Bien")
} else if (nota == 8 || nota == 9) {
    alert("Notable")
} else if (nota == 10) {
    alert("Sobresaliente")
}else if (nota >10 ) {
    alert("Número erroneo")
}else{
    alert("Introduce un número valido")
}
//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.Nota: usar confirm()
let cadenas=[];
do {
    let texto=prompt("Escriba  cadenas de texto")
    if (texto) {
        cadenas.push(texto);
    }else{
        console.log("Ingrese una cadena de texto valida");
    }
    
} while (confirm("¿Desea seguir operando?"));
if (cadenas.length >0) {
    let resultado=cadenas.join("-")
    console.log("Las cadenas ingresadas son:",resultado);
}else{
    console.log("No se ingresaron cadenas");
}
//Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
let numeros=[];
let suma=0
do {
    let ingresar=prompt("Ingrese los números que desee y luego oprima cancelar")
    if (ingresar === null) {
      break;;
    }
    let num=parseFloat(ingresar)
    if (num) {
        numeros.push(num)
        suma += num
    }
    if (numeros.length > 0) {
        console.log("La suma total de los números ingresados es:", suma);
    }else{
        alert ("No ingreso un número valido")
    }
} while (true);  


/**Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
 */
do {
    let dni=(prompt("Ingrese su DNI"))
    if (dni === null) {
        console.log("El usuario preciono cancelar");
    }
    if (dni  < 0 || dni > 99999999) {
     alert("Ingrese un  número  de DNI valido")
      }
      let resto= dni % 23
      let letrasDni="TRWAGMYFPDXBNJZSQVHLCKE"
      let letra=letrasDni.charAt(resto)
      console.log("Para el Dni ingresado la letra es:",letra);
} while (confirm("Desea seguir operando"));
/*Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….*/

 for (let i = 1; i <= 30; i++) {
    for (let rep = 0; rep < i; rep++) {
       
        document.write(i);
   }
 document.write("<br>")   
 }

/**Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
 */
let piramideInversa=parseInt(prompt("Indique el número de repeticiones"))
if (piramideInversa > 0 && piramideInversa <= 50) {
    
for (let i = piramideInversa; i >=1; i--) {
    for (let rep = i; rep >= 1; rep--) {
        document.write(i)
        
    }
    document.write("<br>")
} 

} else{
    console.log("No ingreso un número valido");
}
/**Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
1
12
123
1234
12345
123456
……
 */
let piramide=parseInt(prompt("Ingrese un número entre 1 y 50"))
if (piramide > 0 && piramide  <= 50) {
    
for (let i = 1; i <= piramide; i++) {
   for (let rep = 1; rep <= i; rep++) {
    document.write(rep)
    
   } document.write("<br>")
    
} } else{
    console.log("No ingreso un número valido");
}
/**Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
1
2
3
4 (Múltiplo de 4)
5-
————————————————————-
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
 */
document.write("<br>")

for (let i = 0; i <= 500; i++) {
   document.write(i)
    if (i % 4 == 0) {
        document.write("Es multiplo de 4")
    }
    if (i % 9 == 0) {
        document.write("Es multiplo de 9")
    }
    document.write("<br>")
    if (i% 5 == 0) {
        document.write("<hr>")
    }
}
// Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
let filas=parseInt(prompt("Ingrese un número de filas"))
let columnas=parseInt(prompt("Ingrese un número de columnas"))
let tabla= filas *  columnas
document.write("<table>")
for (let i = 0; i < filas; i++) {
   document.write("<tr>")
    for (let col = 0; col < columnas; col++) {
        document.write("<td>")  
        document.write(tabla)
        tabla--;
        document.write("<td>") 
    }
    document.write("<tr>") 
}
document.write("<table>") 
//Ejercicios con Math
//Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. 
let nombre1=prompt("Ingrese el nombre de la primera persona")
let edad1=parseInt(prompt("Ingrese la edad de la primera persona"))
let nombre2=prompt("Ingrese el nombre de la segunda persona")
let edad2=parseInt(prompt("Ingrese la edad de la segunda persona"))
let nombre3=prompt("Ingrese el nombre de la tercera persona")
let edad3=parseInt(prompt("Ingrese la edad de la tercera persona"))
if (edad1 >edad2 && edad1 > edad3 ) {
    console.log("El de mayor edad es:",nombre1);
}else if ( edad2 > edad1 && edad2 >edad3) {
    console.log("El  de mayor edad es:",nombre2);
} else if (edad3 > edad1 && edad3 > edad2 ) {
    console.log("El de mayor edad es:",nombre3);
}else{
    console.log("Ingrese edades validas");
}
//Realiza un script que genere un número aleatorio entre 1 y 99
let aleatorio=Math.floor(Math.random()*100)-1
console.log("El número aleatorio es:",aleatorio);
//Ejercicios con String
//Realiza un script que pida un texto y lo muestre en mayúsculas.
let textoMayuscula=prompt("Ingrese un texto:")
mayuscula=textoMayuscula.toUpperCase()
console.log("El resultado del texto en mayusculas es:",mayuscula);
// Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
let cadena=prompt("Ingrese un texto:")
if (cadena.length >0) {
    let caracteres=cadena.split("");
        let resultado=caracteres.join("-")
    console.log("Las cadenas ingresadas son:",resultado);
}else{
    console.log("No se ingresaron cadenas");
}
//Realiza un script que cuente el número de vocales que tiene un texto.
let frase = prompt("Escribe una frase");
let numeroVocales=0
if (frase.length > 0) {
    let minuscula=frase.toLowerCase();

    for (let i = 0; i < minuscula.length; i++) {
        let caracter = minuscula[i];

        if ("aeiou".includes(caracter)) {
            numeroVocales++;
        }
    }

    console.log("El número de vocales en el texto es:",numeroVocales);
} else {
    console.log("Por favor, ingrese una frase válida.");
}
// Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
let reves=prompt("Ingrese un texto por favor:")
if (reves.length >0) {
    let caracteres=cadena.split("");
        let resultado=caracteres.reverse()
    console.log("El texto al revés es:",resultado);
}else{
    console.log("No se ingreso un texto valido");
}

/*Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.Ejemplo:
Input: Hola mundo     Output: la vocal ‘o’ está en la posición 1 */
let vocal=prompt("Por favor ingrese un texto")

if (vocal.length > 0) {
    let minuscula=vocal.toLowerCase();
let posición=-1
    for (let i = 0; i < minuscula.length; i++) {
        let caracter = minuscula[i];

        if ("aeiou".includes(caracter)) {
            posición = i +1
            break;
        }
    }
    if (posición !== -1) {
        
        console.log("La vocal en ", vocal+ " esta en la posicion:",posición);
    }else{
        console.log("No ingresaste un texto valido");
    }

} 

