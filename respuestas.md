## Respuestas al Test de JavaScript

Recuerda que estas respuestas (o al menos la mayoría) NO SON ABSOLUTAS. Es completamente válido (en la mayoría de casos) si tienes otras respuestas. Recuerda que podemos discutirlo en la sección de comentarios del curso. :D

## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?
  Respuesta: Cajitas enque podemos usar informacion y extructura que soporte nuestro lenguaje
- ¿Cuál es la diferencia entre declarar e inicializar una variable?
  Respuesta:
  Declarara una variable se utiliza var, let , const. Se le da el nombre de la variable
  Inicializar es cuando le asignamos un valor con (=) y se le asigna el valor y tipo de valor o reinicializar
- ¿Cuál es la diferencia entre sumar números y concatenar strings?
  Sumar numeros da como resultado otro numero entero, mientras que concatenar es unir
- ¿Cuál operador me permite sumar o concatenar?
  Operador de suma

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre , let nombre= string
- Apellido, let apellido=string
- Nombre de usuario en Platzi let nombre_usuario=string
- Edad let edad=numero
- Correo electrónico let correo=string
- Mayor de edad let mayor_edad=boolean
- Dinero ahorrado
- Deudas

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

let name= "Andres";
let apellido = "Vergara";
let username = "pipevergara";
let edad = 19;
let correo = "pipevergara28@hotmail.com";
let isMayorDeEdad = true;
let dineroAhorrado = number(2800000);
let dineroDeudas = number(800000);

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
  let nombreCompleto = name + " " + apellido;
- Dinero real (dinero ahorrado menos deudas)
  let dineroReal = dineroAhorrado - dineroDeudas;

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
- ¿Cuándo me sirve usar una función en mi código?
- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
  La forma en que ejecutamos un bloque de codigo, dpenediendo de una condicion o no.
- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
  IF ( else y else if, switch)
- ¿Puedo combinar funciones y condicionales?
  Si, las funciones pueden encapsular cualquier bloque de codigo. Incluyendo condicionales

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

if (tipoDeSuscripcion=="free"){
console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion=="Basic"){
console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion =="Expert"){
console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion =="ExpertPlus"){
console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}else {
console.log("TNo tienes ninguna suscripcion");
}

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
- ¿Qué tipos de ciclos existen en JavaScript?
- ¿Qué es un ciclo infinito y por qué es un problema?
- ¿Puedo mezclar ciclos y condicionales?

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
  respuesta: lista de eElementos
  const array = [1,"jajaja",true,false]

- ¿Qué es un objeto?
  Respuesta es una lista de elementos, pero cada elemento tiene un nombre clave
  const objjeto = {
  name:"andres"
  apellido:"vergara"
  birthday:"28 de octubre 1999"
  }
- ¿Cuándo es mejor usar objetos o arrays?
  Arrays cuando lo que haremos en un elemento es lo mismo en todos los demas.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
  Si. Los arrays pueden guardar objetos. Y los objetos pueden guardar arras entre sus propiedades

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

function imprimirPrimerElementoArray (arr){
console.log(arr[0]);
}

imprimirPrimerElementoArray (["andres","juanita","pedro","jorge"]) ;

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

let myFamily = ["Andres","Andrea","Salomon","Betty","Mia"];

function ImprimirElementoPorElemento (arr){
for( let i = 0; i<arr.length ; i++){
console.log("Posicion ["+ i +"] Tiene como valor: " + arr[i])}
}

ImprimirElementoPorElemento(myFamily);

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
