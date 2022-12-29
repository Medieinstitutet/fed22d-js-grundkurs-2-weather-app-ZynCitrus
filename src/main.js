import './style/style.scss';
let checkTime = new Date().getHours();
const submitCity = document.querySelector('#submitCity');
submitCity.addEventListener('click', getTextFromInput);
/*If-sats för att byta bakgrund beroende på tid*/
if (checkTime >= 7 && checkTime <= 18) {
  document.body.style.background = "Red";
} else {
  document.body.style.background = "black";
}



/*function to get info from input to getCity */ 
async function getTextFromInput() {
  const input = document.getElementById('inputCity').value;
  if (input.length == '') {
    alert('Vänligen skriv in något i rutan!')
  } else {
  await getTempuratureArray(input);
}}

async function getTempuratureArray(inputCity){
  let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=75303f12006046a5556974d2d62ef0d1&units=metric`
  return fetch(apiLink)
    .then((data) => data.json())
    .then((json) => {
     handleData(json)
  })
    .catch((error) =>{
    console.error('Error', error)
    return null;
  });
  };

  
function handleLocation(){
  const successCallback = (position) => {
    console.log({position});
    let locationLink = `http://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=0&appid=75303f12006046a5556974d2d62ef0d1&units=metric`
  return fetch(locationLink)
    .then((data) => data.json())
    .then((json) => {
      console.log(json);
    getTempuratureArray(json[0].name);
  })
    .catch((error) =>{
    console.error('Error', error)
    return null;
  });

  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  
}

function handleData(data){
  console.log(data)
  const temp = data.main.temp;
  const tempuratureDecimal = Math.round(temp);
  const city = data.name;
  const rightInDemFeels = data.main.feels_like;
  const feelsLike = Math.round(rightInDemFeels);
  const getIconForSky = data.weather[0].icon;
  const iconForSky = `https://openweathermap.org/img/wn/${getIconForSky}@2x.png`
  document.getElementById('iconForSky').src=iconForSky;
  document.getElementById("placeHolderTemp").innerHTML = "Idag är det " + tempuratureDecimal + " och det känns som " + feelsLike + " i " + city;
  // localStorage.setItem('input', getCity);
};

handleLocation();


/*
switch (){
  case getIconForSky = `04n` :
    console.log('Snö');
    break;
  default:
    console.log('Skiten funkar inte....');
}
  document.getElementById("placeHolderTemp").innerHTML = "Idag är det " + tempuratureDecimal + " och det känns som " + feelsLike + " i " + city;



 En slask för sånt som kan behövas igen sen
const tempInAir = document.querySelector('#placeHolderTemp')
placeHolderCity

import tempuratureArray from './weatherAPI';

*/