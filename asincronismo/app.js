/*El EVENTLOOP es un bucle, el que se encarga de la gestion de todos
los eventos de la aplicación. El event loop siempre va a estar ejecuntadose.
 El Event Queue es el que va a ir leyendo (tirandole) los eventos al event loop
para que los procese, en caso de que no lo resuelva inmediatamente se los pasará al thread pool
el cual va a procesar por cada peticion en un hilo independiente y al finalizarlo lo devuelve al Event Loop/*

/*function saludo(){
    console.log("Bienvenidos");
}

function asincrona(){
    setTimeout(function() {
        console.log("Esta es una funcion asincrona");
    }, 1000 
    );
}

saludo()
console.log("Hola");

asincrona()//llamadi a la funcion
console.log("adios")*/


function asincrona(nombre, callback){
    setTimeout(function() {
        console.log("Hola", nombre);
        callback(nombre);
    }, 800
    );
}


function adios(nombre, callback1){
    setTimeout(function() {
        console.log("Adios", nombre);
        callback1();
    }, 1000 
    );
}


//llamado a la funcion
//cuando uno llama una funcion dentro de otra funcion asincrona se ejectuta una seguida de la otra
//si no se inicia una funcion dentro de otra se ejecuta en el tiempo que deba ejecutarse
asincrona('Jose', function(nombre){ //la variable nombre la dara el callback
    adios(nombre, function(){
        console.log('Finalizando proceso');
    })
})