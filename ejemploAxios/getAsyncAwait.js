const axios =  require('axios').default;

const getRequest = async()=>{
    try{
        const respuesta=await axios.get('http://127.0.0.1:8000/api/books');
        console.log(respuesta.data);
    }catch(err){
        console.error(err);
    }
}

getRequest();