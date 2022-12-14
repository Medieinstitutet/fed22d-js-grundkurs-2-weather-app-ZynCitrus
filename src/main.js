import './style/style.scss';
import tempArray from './weatherAPI';
const icons = new Image();
icons.src = '/suncloud.png';
const submitCity = document.querySelector('#submitCity');
const placeHolderIcon = document.querySelector('#placeHolderIcon');
let clouds = tempArray.clouds.all;
let weather = '';
let getCity = 'Stockholm';
let temp = tempArray.main.temp;
let city = tempArray.name;
let rightInDemFeels = tempArray.main.feels_like;
submitCity.addEventListener('click', returnText);
document.getElementById("placeHolderTemp").innerHTML = "Idag är det " + temp + ", men det känns som " + rightInDemFeels + " i " + city;
console.table(tempArray);

/*function to get info from input to getCity */ 
function returnText() {
  if (document.getElementById('inputCity').value.length == '') {
    alert('Vänligen skriv in något i rutan!')
  } else {
  getCity = document.getElementById('inputCity').value;
  localStorage.setItem('input', getCity);
  console.log(getCity);
}}

/*if-sats for att andra tema beroende pa vader */

if (weather === 'Sun') {
  placeHolderIcon.classList.add('placeHolderIcon');
  placeHolderIcon.classList.remove('cloudySun');
}if (weather === 'cloudySun') {
  placeHolderIcon.classList.add('cloudySun');
  placeHolderIcon.classList.remove('placeHolderIcon');
}if (clouds > 50) {
  console.log('mordin')
}


/* En slask för sånt som kan behövas igen sen
const tempInAir = document.querySelector('#placeHolderTemp')
placeHolderCity



*/