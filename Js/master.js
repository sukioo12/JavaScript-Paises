function hola(){
    $('#primero').html('Hola=)');
    console.log('estas cerca');
    $('button').click(()=>{
        $('#primero').html('¿Que tal?');
        $('button').off('click');
    })

}
function funcion2(){
$('#segundo').html('¡sorpresa!')
}


function funcion3(){
$('#tercero').html('<img src="Img/aurora2.jpg" alt="soy una referencia">');
console.log('que tal');
$('button').click(()=>{
    $('#tercero').html('<img src="Img/casas.jpg" alt="soy una referencia">');
    $('button').off('click');
})
}

