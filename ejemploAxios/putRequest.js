const axios =  require('axios').default;

const putRequest = async()=>{
    try{
        const respuesta=await axios.put('http://127.0.0.1:8000/api/book',
        {
            id: 58,
            title: 'Cien años de soledad',
            genre: 'Realismo Mágico',
            author: 'Gabriel García Márquez',
            publisher: 'Editorial Sudamericana',
            year: 1970,
            cover: 'https://thisartworkdoesnotexist.com/',
            updated_at: '2021-05-13 20:48:14', 
            created_at: '2021-05-13 20:50:45'
        }
    );
        console.log(respuesta.data);
    }catch(err){
        console.error(err);
    }
}

putRequest();