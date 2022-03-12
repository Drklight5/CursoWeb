var numero = 0;
var avion = {
    daño: "50",
    vida: "100",
    disparar:function(){
        console.log("dispara")
    },
    daño:function(daño){

        avion.vida = avion.vida - daño;
        if(avion.vida <= 0){
            console.log("perdiste")
        }
    },
}
var enemigo = Object.create(avion);
enemigo.vida = 50;
enemigo.daño = 25;
var enemigo2 = Object.create(avion);
enemigo2.daño = 25;
var enemigo3 = Object.create(avion);
enemigo3.daño = 50;
enemigo3.vida = 150;

var jefe = Object.create(avion)
jefe.vida = 1000;
jefe.daño = 75;