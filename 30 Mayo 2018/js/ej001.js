$('document').ready(function(){


    $('li').css('font-size','20px');


    $('#Elemento1').css('color','green');


    let misElementos = $('.rojo');
    misElementos.removeClass('rojo');
    misElementos.addClass('azul');

    $('ul li:nth-child(even)').css('background-color','pink');
    $('ul li:nth-child(odd)').css('background-color','purple');
    $('ul li:nth-child(3)').css('color','white');
    $('[href="www.google.es"]').css('color','yellow');
    $('[title="herbalife"]').css('font-size','30px');


    //Ejercicio 2.


    let a =  $('#contenedor-parrafos').next().children();
    let b = a.parent().parent().children().eq(0).children().eq(1);
    b.css('font-size','30px');

    let c =  $('#contenedor-parrafos').children().eq(1);

    let d = c.parent().next().children().children().eq(4);
    d.css('background-color','green');

    let e =  $('#contenedor-parrafos').next().children().children().eq(3)
    
    let f = e.parent().parent().parent().parent();
    f.css('background-color','blue');
    console.log(f);









});