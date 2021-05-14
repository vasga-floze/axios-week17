const axios =  require('axios').default;

axios.get('https://jsonplaceholder.typicode.com/201')
    .then(respuesta=>{
        console.log(respuesta.data);
    })
    .catch(err =>{
        console.error(err);
    })