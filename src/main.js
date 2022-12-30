import './style/style.scss';
let checkTime = new Date().getHours();
let checkMonth = new Date().getMonth();
const submitCity = document.querySelector('#submitCity');
submitCity.addEventListener('click', getTextFromInput);

/*if to change background depending on month*/
if (checkMonth >=2 && checkMonth <= 4) {
  console.log('Vår');
  document.body.style.backgroundImage = "url('./spring.jpg')";
}if (checkMonth >=5 && checkMonth <= 7) {
  console.log('Sommar');
  document.body.style.backgroundImage = "url('./summer.jpg')";
}if (checkMonth >=8 && checkMonth <= 9) {
  console.log('Höst');
  document.body.style.backgroundImage = "url('./fall.jpg')";
}else{
  console.log('Vinter');
  document.body.style.backgroundImage = "url('./winter.jpg')";
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
    let locationLink = `http://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=0&appid=75303f12006046a5556974d2d62ef0d1&units=metric`
  return fetch(locationLink)
    .then((data) => data.json())
    .then((json) => {
    getTempuratureArray(json[0].name);
  })
    .catch((error) =>{
    return null;
  });
};
  
  const errorCallback = (error) => {
  };
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  
}

function handleData(data){
  const temp = data.main.temp;
  const tempuratureDecimal = Math.round(temp);
  const city = data.name;
  const rightInDemFeels = data.main.feels_like;
  const feelsLike = Math.round(rightInDemFeels);
  const getIconForSky = data.weather[0].icon;
  const iconForSky = `https://openweathermap.org/img/wn/${getIconForSky}@2x.png`
  document.getElementById('iconForSky').src=iconForSky;
  document.getElementById("placeHolderTemp").innerHTML = "Idag är det " + tempuratureDecimal + " grader och det känns som " + feelsLike + " i " + city + " grader.";
  // localStorage.setItem('input', getCity);
};

handleLocation();


/*
 En slask för sånt som kan behövas igen sen
switch (){
  case getIconForSky = `04n` :
    console.log('Snö');
    break;
  default:
    console.log('Skiten funkar inte....');
}
  document.getElementById("placeHolderTemp").innerHTML = "Idag är det " + tempuratureDecimal + " och det känns som " + feelsLike + " i " + city;

const tempInAir = document.querySelector('#placeHolderTemp')
placeHolderCity

import tempuratureArray from './weatherAPI';


if (checkTime >= 7 && checkTime <= 18) {
  document.body.style.background = "lightblue";
} else {
  document.body.style.background = "darkblue";
}

*/