const axios =  require('axios').default;

const postRequest = async()=>{
    try{
        const respuesta=await axios.post('http://127.0.0.1:8000/api/book',{
                title: 'La vida de un programador',
                genre: 'Realismo',
                author: 'Gabriel García Márquez',
                publisher: 'Editorial Sudamericana',
                year: 1970,
                cover: 'https://thisartworkdoesnotexist.com/'
            } 
        );
        console.log(respuesta.data);
    }catch(e){
        console.log(e);
    }
}

postRequest();