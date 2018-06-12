function Rectangulo(nombre, anchura, altura){

    Figura.call(this, nombre);

    if(!altura){
        this.altura = anchura;
    } else {
        this.altura = altura;    
    }//if

    this.anchura = anchura;
   
    Rectangulo.prototype.calcularArea = function(){
        return this.anchura * this.altura;  
     }
 
     Rectangulo.prototype.calcularPerimetro = function(){
         return (2 * this.anchura) + (2 * this.altura);
     }

    
}//fct Rectangulo

    Figura.prototype = Rectangulo.prototype;
    Figura.prototype.constructor = Rectangulo;