document.addEventListener("DOMContentLoaded", function(){
    iniciarApp();
});

function iniciarApp(){
    cambioFondo();
}


function cambioFondo(){

    const body = document.querySelector("BODY");
    const boton = document.querySelector(".boton");
    const img = ["fondo0", "fondo1", "fondo2", "fondo3"];
    let contador = 0;

    body.classList.add("fondo0");


    boton.addEventListener("click", function(){

        contador++;

        body.classList.remove( img[contador - 1] );

        if(contador > 3) contador = 0;

        body.classList.add( img[contador] );

    });

}