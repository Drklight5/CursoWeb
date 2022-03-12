





var numero = 0;
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
        console.log("El zombie murió");
        document.getElementById("resultado").innerHTML = "El zombie murio, te tomó " + numero + "intentos"
    }
}
var zombiechiquito = Object.create(zombie);
zombiechiquito.vida = 20;
zombiechiquito.tamaño = "chiquito"
var lanzaguisante = {
    daño: 6,
    ataque: function(){
        console.log("hace daño de " + this.daño);
        numero = numero + 1;
    }
};
var comecome = {
    comer: 1 ,
    come:function(){
        console.log("comer" + this.comer);
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
        console.log("tiene un ataque de " + this.daño);
        numero = numero + 1;  
    }
}


document.getElementById("title").innerHTML = "mata es zombie";
document.getElementById("description").innerHTML = "El zombie tiene " + zombie.vida + "de vida";