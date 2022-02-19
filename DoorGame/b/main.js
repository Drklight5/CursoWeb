var kaka = false;
var edad;
var nombre;

if (kaka){
    edad = parseInt(prompt("bruh"));
    nombre = prompt("nombre");
    prompt("xd");
};

var zombie = {
    tipo: "Microfono",
    fuerza: "-10",
    vida: 12,
    velocidad: 0.1, 
    comer:function(){
        console.log("xd")
    },
    daño:function(daño){
        zombie.vida = zombie.vida - daño;
        if(zombie.vida < 0){
            zombie.muerto();    
        }
    },
    muerto:function(){
        console.log("xddd");
    }
}

var lanzamaiz = {
    encontrada: "marespiratas",
    daño: 3,
    ataqueEspecial: "aturdimiento de 3s",
    vida: 5,
    ataque:function(){
        console.log("Lanzamaiz Muerto");
    }
}
var lanzaxd = {
    encontrada: "marespiratas",
    daño: 3,
    ataqueEspecial: "aturdimiento de 3s",
    vida: 5,
    ataque:function(){
        console.log("Lanzamaiz Muerto");
    }
}
var lanzaalgo = {
    encontrada: "marespiratas",
    daño: 3,
    ataqueEspecial: "aturdimiento de 3s",
    vida: 5,
    ataque:function(){
        console.log("Lanzamaiz Muerto");
    }
}
zombie.daño(apisonaflor.daño);
zombie.daño(8);
zombie.daño(35);
console.log("el zombie es tipo: " + zombie.tipo);
console.log("PogU: " + zombie.fuerza);
console.log("La vida :v: " + zombie.vida);     