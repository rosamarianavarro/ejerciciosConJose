$('document').ready(function(){
    let arrColores = ['rojo','verde','amarillo','purple'];

const escribeColores = () => arrColores.map( elemento => $('#coloresul').append('<li>' + elemento + '</li>')  );
  

escribeColores();

$('#anadeNuevoColor').click( () => {
    arrColores.push(   $('#nuevoColorInput').val()   );
    $('#coloresul').html('');
    escribeColores();
});

})