const tempAir = [];

function getTempAir(){
     fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={75303f12006046a5556974d2d62ef0d1}')
        .then((data) => data.json())
        .then((json) => {
            console.log(json);
        })
    }