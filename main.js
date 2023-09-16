ImprimirElementoPorElemento (["andres","juanita","pedro","jorge"]) ;


let myFamily = ["Andres","Andrea","Salomon","Betty","Mia"];

function ImprimirElementoPorElemento (arr){
for( let i = 0; i<arr.length ; i++){
console.log("Posicion ["+ i +"] Tiene como valor: " + arr[i])}
}

ImprimirElementoPorElemento(myFamily);

/*AQUI CREAREMOS UN OBJETO */

let memberFamily = {
    name: "Andres",
    lastName: "Vergara",
    years: 24,
    sexType: "male",
    profesion: "Civil Engineer",
}

function imprimirObject(obj){
    console.log("The member of the family here is: " + obj.name +" "+ obj.lastName + ". Years Old: " + obj.years + ". Sexype: " + obj.sexType + ". Profession: "+obj.profesion);
}

imprimirObject(memberFamily);



