function Circulo(nombre, radio){

    //1. llamamos desde la clase hija la clase padre
    //y le pasamos los parametros que necesita
    Figura.call(this, nombre);

    //2. anadimos los parametros propios de la clase hija
    this.radio = radio;

    //Definicion de los metodos:

    Circulo.prototype.calcularArea = function(){
       return 3.14159 * this.radio * this.radio;   
    }

    Circulo.prototype.calcularPerimetro = function(){
        return 2 * 3.14159 * this.radio;   
    }
    
}//fct Circulo

//3. FUERA de la definicion de las clase:
    Figura.prototype = Circulo.prototype;
    Figura.prototype.constructor = Circulo;