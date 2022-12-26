import './style/style.scss';
let checkTime = new Date().getHours();
let getCity = 'oslo';
let tempuratureArray = await getTempuratureArray();
const icons = new Image();
icons.src = '/suncloud.png';
const submitCity = document.querySelector('#submitCity');
const placeHolderIcon = document.querySelector('#placeHolderIcon');
let clouds = tempuratureArray.clouds.all;
let temp = tempuratureArray.main.temp;
let tempuratureDecimal = Math.round(temp);
let city = tempuratureArray.name;
let rightInDemFeels = tempuratureArray.main.feels_like;
let feelsLike = Math.round(rightInDemFeels);
let getIconForSky = tempuratureArray.weather[0].icon;
submitCity.addEventListener('click', getTextFromInput);
document.getElementById("placeHolderTemp").innerHTML = "Idag är det " + tempuratureDecimal + " och det känns som " + feelsLike + " i " + city;

console.table(getIconForSky)
/*If-sats för att byta bakgrund beroende på tid*/
if (checkTime >= 7 && checkTime <= 18) {
  document.body.style.background = "Red";
} else {
   document.body.style.background = "black";
}

/*function to get info from input to getCity */ 
async function getTextFromInput() {
  if (document.getElementById('inputCity').value.length == '') {
    alert('Vänligen skriv in något i rutan!')
  } else {
  getCity = document.getElementById('inputCity').value;
  localStorage.setItem('input', getCity);
  tempuratureArray = await getTempuratureArray();
  temp = tempuratureArray.main.temp;
  tempuratureDecimal = Math.round(temp);
  city = tempuratureArray.name;
  rightInDemFeels = tempuratureArray.main.feels_like;
  feelsLike = Math.round(rightInDemFeels);
  getIconForSky = tempuratureArray.weather[0].icon;
  console.table(getIconForSky);
  document.getElementById("placeHolderTemp").innerHTML = "Idag är det " + tempuratureDecimal + " och det känns som " + feelsLike + " i " + city;
    
}}

async function getTempuratureArray(){
  let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${getCity}&appid=75303f12006046a5556974d2d62ef0d1&units=metric`
  return fetch(apiLink)
    .then((data) => data.json())
    .then((json) => {
      return json;
  })
    .catch((error) =>{
    console.error('Error', error)
    return null;
  });
  };

switch (true){
  case getIconForSky = "04n":
    console.log('Sno');
    break;
  default:
    console.log('Skiten funkar inte....');
}



/* En slask för sånt som kan behövas igen sen
const tempInAir = document.querySelector('#placeHolderTemp')
placeHolderCity

import tempuratureArray from './weatherAPI';

*/