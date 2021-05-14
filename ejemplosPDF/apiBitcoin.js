const request=require('request');

request('https://api.coindesk.com/v1/bpi/currentprice.json', (error, response, bitcoin) => {
    if(error){
        console.error(`Could not send request to API:${error.message}`);
        return;
    }
    if (response.statusCode != 200) {
        console.error(`Expected status code 200 but received
        ${response.statusCode}.`);
        return;
    }
    console.log('Processing our price of bitcoin');
    console.log(`El precio del bitcoin se detalla a continuación: \n${bitcoin}`);
    
})
