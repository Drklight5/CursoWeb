var kk = false;
var edad;
var nombre;
var numero = 0;

if(kk){
    ppga = promptInt(prompt("Escribe tu edad"));
    ez = prompt("tu nombre")
    alert("hola");
    prompt("hola");
}
var calvox = {
    tipo: "normal",
    peso: "80kg",
    vida: "10",
    velocidad: "0.1", 
    comer:function(){
        console.log(" ricoche ");
    },
    daño:function(daño){
        calvox.vida = calvox.vida - daño;
    }
}
var lanzapapa =  {
    daño = 5
}
var sandia = {
    daño: 10
}
calvox.daño(1);
calvox.comer();
console.log("El zombie que te ataco es de tipo: " + calvox.tipo);
console.log("El zombie tiene una fuerza de: " + calvox.peso);
console.log("le quedo " + calvox.vida + " de vida a calvox");

console.error("Estas Feo");
console.warn("casi lo echas a perder");

llover();
llover();
llover();
llover();

console.log(numero);

function llover(){
    numero = numero + 1;

    console.log("esta llovindo")
}