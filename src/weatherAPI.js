const tempAir = [];

function getTempAir(){
     fetch('api.openweathermap.org/data/2.5/forecast?id=2715081&appid=75303f12006046a5556974d2d62ef0d1&units=metric')
        .then((data) => data.json())
        .then((json) => {
            console.table(json);
        })
        .catch((error) =>{
        console.error('Error', error)
    });
    };

    export default getTempAir;