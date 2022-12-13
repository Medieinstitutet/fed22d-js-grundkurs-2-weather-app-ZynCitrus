const tempArray = await getTempAir();

    async function getTempAir(){
     return fetch('https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=75303f12006046a5556974d2d62ef0d1&units=metric')
        .then((data) => data.json())
        .then((json) => {
            return json;
        })
        .catch((error) =>{
        console.error('Error', error)
        return null;
    });
    };

    export default tempArray;