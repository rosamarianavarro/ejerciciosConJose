function Triangulo(nombre, base, altura){

    Figura.call(this, nombre); //en vez de this.nombre...

    this.base = base;
    this.altura = altura;

    Triangulo.prototype.calcularArea = function(){
       return (this.base * this.altura) / 2;
    }
  
}//fct Circulo

    Figura.prototype = Triangulo.prototype;
    Figura.prototype.constructor = Triangulo;