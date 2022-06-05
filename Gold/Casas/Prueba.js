var numero = 0;
var calvox ={
    tipo: "normal",
    peso: "80kg",
    vida: 10,
    velocidad: 0.1,
    comer:function(){
        console.log(" ricoche ");
    },
    daño:function(daño){
        calvox.vida = calvox.vida - daño;
        if(calvox. vida <= 0){
            calvox.muere();
        }
    },
    muere:function(){
        console.log("El calvox murio ");
        document.getElementById("resultado").innerHTML = "El zombie ha muerto te ha costado " + numero + " intentos";
    }
}    
var zombiechiquito = Object.create(calvox);
zombiechiquito.vida = 1
zombiechiquito.tamaño = "2cm";

var zombiegun = Object.create(calvox);
zombiegun.vida = 12 
zombiegun.damage = 1000

var zombieplanta = {
    daño: -1,
    ataque: function(){
        calvox.daño(zombieplanta.daño);
    }
}

var lanzapapa =  {
    daño: 3,
    lanzapapa: 0,
    ataque: function(){
        numero = numero + 1;
        calvox.daño(lanzapapa.daño);
        
}
}
var sandia = {
    daño: 10,
    ataque: function(){
          numero = numero + 1;
        calvox.daño(sandia.daño);
      
}
}
document.getElementById("title").innerHTML = "mata al zombie";
document.getElementById("description").innerHTML  = "El zombie tiene " + calvox.vida + " de vida";