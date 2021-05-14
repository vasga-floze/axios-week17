const axios =  require('axios').default;

const deleteRequest = async()=>{
    try{
        const respuesta=await axios.delete('http://127.0.0.1:8000/api/book/58'
        );
        console.log(respuesta.data);
    }catch(err){
        console.error(err);
    }
}

deleteRequest();