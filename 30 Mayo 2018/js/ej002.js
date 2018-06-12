$('document').ready(function(){

    //inicializar la variable de control:
    let ultimaVez = 'O';

    /* Cuando usuario hace click en
       una de las cajas, se ejecuta la
       sgt fct anonima
    */
    $('.caja').click( function() {

            //solo si la caja en que hemos
            //dado click está vacía:
            
            if( $(this).html() == "" ){

                if(ultimaVez == 'X'){
                    $(this).html('O');
                    ultimaVez = 'O';
                }else{
                    $(this).html('X');
                    ultimaVez = 'X';
                }//if

            }//if caja vacía 

        }// fct anónima 
    );//caja click

// Cambiamos imagenes 

    $('#img1').on('mouseover',function(){

        let src1 = $('#img1').attr('src');
        let src2 = $('#img2').attr('src');

        $('#img1').attr('src', src2);
        $('#img2').attr('src', src1);

    });//on mouseover sobre img1

    $('#img2').on('mouseover',function(){

        let src1 = $('#img1').attr('src');
        let src2 = $('#img2').attr('src');

        $('#img2').attr('src', src1);
        $('#img1').attr('src', src2);

    });//on mouseover sobre img2

});//document ready