const  h1 = document.querySelector('h1');
const  p = document.querySelector('p');
const  parrafito = document.querySelector('.parrafito');
const  parrafote = document.querySelector('#parrafote');
const  input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    parrafote,
    input,
});


h1.innerText ="Soy Andrés Vergara";
console.log(h1.getAttribute("class"));
h1.setAttribute('class','titulo');
