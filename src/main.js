import './style/style.scss';
let getCity = 'Stockholm';
let tempArray = await getTempAir();
const icons = new Image();
icons.src = '/suncloud.png';
const submitCity = document.querySelector('#submitCity');
const placeHolderIcon = document.querySelector('#placeHolderIcon');
let clouds = tempArray.clouds.all;
let weather = '';
let temp = tempArray.main.temp;
let city = tempArray.name;
let rightInDemFeels = tempArray.main.feels_like;
submitCity.addEventListener('click', returnText);
document.getElementById("placeHolderTemp").innerHTML = "Idag är det " + temp + ", men det känns som " + rightInDemFeels + " i Stockholm";

/*function to get info from input to getCity */ 
async function returnText() {
  if (document.getElementById('inputCity').value.length == '') {
    alert('Vänligen skriv in något i rutan!')
  } else {
  getCity = document.getElementById('inputCity').value;
  localStorage.setItem('input', getCity);
  console.log(getCity);
  tempArray = await getTempAir();
  let clouds = tempArray.clouds.all;
  let weather = '';
  let temp = tempArray.main.temp;
  let city = tempArray.name;
  let rightInDemFeels = tempArray.main.feels_like;
  console.log(tempArray)
  document.getElementById("placeHolderTemp").innerHTML = "Idag är det " + temp + ", men det känns som " + rightInDemFeels + " i " + city;
  /* if-statement to change theme depending on weather*/  
  if (weather === 'Sun') {
    placeHolderIcon.classList.add('placeHolderIcon');
    placeHolderIcon.classList.remove('cloudySun');
  }if (weather === 'cloudySun') {
    placeHolderIcon.classList.add('cloudySun');
    placeHolderIcon.classList.remove('placeHolderIcon');
  }if (clouds > 50) {
    console.log('')
  }
}}


    async function getTempAir(){
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

import tempArray from './weatherAPI';

*/