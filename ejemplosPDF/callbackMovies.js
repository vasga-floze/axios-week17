
const request=require('request');

request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {
    if(error){
        console.error(`Could not send request to API:${error.message}`);
        return;
    }
    if (response.statusCode != 200) {
        console.error(`Expected status code 200 but received
    ${response.statusCode}.`);
    return;
    }
    console.log('Processing our list of movies');
    movies = JSON.parse(body);
    movies.forEach(movie=>{
        console.log(`Titulo: ${movie['title']}, Fecha de estreno: ${movie['release_date']}`);
    })
})



/*

const request=require('request');
const fs = require('fs'); //importa modulo fs para escribir en un archivo de forma asincrona (metodo ya incluido en la instalacion de node.js)

request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {
    if(error){
        console.error(`Could not send request to API:${error.message}`);
        return;
    }
    if (response.statusCode != 200) {
        console.error(`Expected status code 200 but received
        ${response.statusCode}.`);
        return;
    }
    console.log('Processing our list of movies');
    movies = JSON.parse(body);
    let movieList=""; //se crea una variable vacia

    //se recorre el objeto movies
    movies.forEach(movie=>{
        movieList += `${movie['title']}, -------------------- ${movie['release_date']}\n`; //se rellena la variable
        console.log(`Titulo: ${movie['title']}, Fecha de estreno: ${movie['release_date']} \n`);
    });

    //se escribe en el arhivo 
    fs.writeFile('callbackMovies3.txt', movieList, (error)=>{
        if (error){
            console.error(`Could not save the Ghibli movies to a file:${error}`);
            return;
        }

        console.log('Lista de peliculas guardadas en callbackMovies3.txt')
    });

});
*/
