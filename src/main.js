import './style/style.scss';
 
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
submitCity.addEventListener('click', returnText);
document.getElementById("placeHolderTemp").innerHTML = "Idag är det " + tempuratureDecimal + " och det känns som " + feelsLike + " i " + city;

/*function to get info from input to getCity */ 
async function returnText() {
  if (document.getElementById('inputCity').value.length == '') {
    alert('Vänligen skriv in något i rutan!')
  } else {
  getCity = document.getElementById('inputCity').value;
  localStorage.setItem('input', getCity);
  tempuratureArray = await getTempuratureArray();
  clouds = tempuratureArray.clouds.all;

  temp = tempuratureArray.main.temp;
  tempuratureDecimal = Math.round(temp);
  city = tempuratureArray.name;
  rightInDemFeels = tempuratureArray.main.feels_like;
  document.getElementById("placeHolderTemp").innerHTML = "Idag är det " + tempuratureDecimal + " och det känns som " + feelsLike + " i " + city;
  
  /* if-statement to change theme depending on weather
  if (weather === 'Sun') {
    placeHolderIcon.classList.add('placeHolderIcon');
    placeHolderIcon.classList.remove('cloudySun');
  }if (weather === 'cloudySun') {
    placeHolderIcon.classList.add('cloudySun');
    placeHolderIcon.classList.remove('placeHolderIcon');
  }if (clouds > 50) {
    console.log('fggfhgfh')
  }*/  
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




/* En slask för sånt som kan behövas igen sen
const tempInAir = document.querySelector('#placeHolderTemp')
placeHolderCity

import tempuratureArray from './weatherAPI';

*/