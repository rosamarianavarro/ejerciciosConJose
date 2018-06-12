function Electrodomestico(precioBase, color, consumoEnergetico, peso){

    this.consumoEnergetico = "F";
    this.precioBase = precioBase;
    this.color = "blanco";
    this.peso = peso;

    Electrodomestico.prototype.comprobarConsumoEnergetico = function(){

        let letras = new Array("A","B","C","D","E","F");

        if (consumoEnergetico && letras.includes(consumoEnergetico) ){
            this.consumoEnergetico = consumoEnergetico;
        }
    }//fct comprobarConsumoEnergetico

    Electrodomestico.prototype.comprobarColor = function(){

        if ( color ){
            this.color = color;
        } 
    }//fct comprobarColor

    Electrodomestico.prototype.precioFinal = function(){

        let precioF = this.precioBase;
        
        switch(this.consumoEnergetico){
            case "A": precioF = this.precioBase + 100;
            break;
            case "B": precioF = this.precioBase + 80;
            break;
            case "C": precioF = this.precioBase + 60;
            break;
            case "D": precioF = this.precioBase + 50;
            break;
            case "E": precioF = this.precioBase + 30;
            break;
            case "F": precioF = this.precioBase + 10;
            break;           
        }//switch(this.consumoEnergetico)

        if(this.peso < 20){
            precioF += 10;
        } else if (this.peso >= 20 && this.peso < 49){
            precioF += 50;
        } else if (this.peso >= 50 && this.peso < 79){
            precioF += 80;
        } else if (this.peso >= 80){
            precioF += 100;
        }//if

        return precioF;

    }//fct precioFinal

}