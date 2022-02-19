






var zombie = {
    tipo: "normal",
    fuerza: 5,
    vida: 50,
    velocidad: 0.5,
    comer:function(){
        console.log("te ha comido el cerebro");
    },
    daño:function(daño){
        
        zombie.vida = zombie.vida - daño;
     if(zombie.vida <= 0){
        console.log("El zombie murió")     
        }
    },
    muere:function(){
        console.log("El zombie murió")
    }
}
var zombiechiquito = Object.create(zombie);
zombiechiquito.vida = 20;
zombiechiquito.tamaño = "chiquito"
var lanzaguisante = {
    daño: 6,
    ataque: function(){
        zombie.daño(lanzaguisante.daño);
    }
};
var comecome = {
    comer: 1 ,
    come:function(){
        console.log("comer");
    }
};
var nuez = {
    resistencia: 100,
    aguante:function(){
        console.log("tiene resistencia de " + this.resistencia);
    }
};
var bomba = {
    explota: 2,
        explotar:function(){
            console.log("explota a " + this.explota);
        }
};
var sandia = {
    daño: 10,
    ataque: function(){
        zombie.daño(sandia.daño);
    }
}