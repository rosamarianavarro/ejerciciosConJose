/*let c = new Circulo("jose", 8);

console.log("c: ", c);
console.log("Area de c: " + c.calcularArea() );
console.log("Perimetro de c: " + c.calcularPerimetro() );


let rect = new Rectangulo("ana", 20, 30);

console.log("rect: ", rect);
console.log("Area de rect: " + rect.calcularArea() );
console.log("Perimetro de rect: " + rect.calcularPerimetro() );

let cuad = new Rectangulo("juan", 50);

console.log("cuad: ", cuad);
console.log("Area de cuad: " + cuad.calcularArea() );
console.log("Perimetro de cuad: " + cuad.calcularPerimetro() );


let tria = new Triangulo("Peer", 15, 10);

console.log("tria: ", tria);
console.log("Area de tria: " + tria.calcularArea() );
*/

let e = new Electrodomestico(500,"verde","F" ,30);
e.comprobarConsumoEnergetico();
e.comprobarColor();
console.log(e);
console.log( e.precioFinal() );