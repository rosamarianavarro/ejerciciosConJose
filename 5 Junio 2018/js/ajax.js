$(document).ready(function(){

/******************  EJ 1 *************************/
/*

    $.get('https://jsonplaceholder.typicode.com/posts', function(res){

        for(elemento of res){

            if(elemento.userId % 2 === 0 ){
                let texto = `
                    <li>
                        ${elemento.userId} - ${elemento.title}
                    </li>
                    `;

                $('#contenedor').append(texto);
            }//if
 
        }//for
    });//get

*/
/******************  EJ 2 *************************/
/*
    $.get(' https://jsonplaceholder.typicode.com/todos',function(res){
        
        for(elemento of res){

            if(elemento.completed == true){
                $('#contenedor').append( `<li class="verde">${elemento.title}</li>`);
            }else {
                $('#contenedor').append( `<li class="rojo">${elemento.title}</li>`);
            }

        }//for

    });//get
*/
/******************  EJ 3 *************************/

$('#mostrar').click(function(){

    $('#contenedor').empty();

   //asigna a la variable quieroUserId el valor del input si está metido
   //si no, asigna a la variable el valor 1
    let quieroUserId = $('#ipt_userid').val() || 1;

    $.get('https://jsonplaceholder.typicode.com/albums', {userId: quieroUserId}, function(res){

        for(elemento of res){
            $('#contenedor').append( `<li>${elemento.title}</li>`);
        }


    });//get




});//mostrar click

});//ready