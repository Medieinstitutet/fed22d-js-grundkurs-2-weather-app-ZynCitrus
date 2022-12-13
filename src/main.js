import './style/style.scss';
const icons = new Image();
icons.src = '/suncloud.png';
const submitCity = document.querySelector('#submitCity');
const placeHolderIcon = document.querySelector('#placeHolderIcon');
const tempiInAir = document.querySelector('#placeHolderTemp')
let weather = 'sun';
let input = 'Stockholm';
submitCity.addEventListener('click', returnText);
import tempArray from './weatherAPI';
let temp = tempArray.main.temp;
let city = tempArray.name;

document.getElementById("placeHolderTemp").innerHTML = ("Det är " +temp+ " i " + city);

console.table(tempArray);


function returnText() {
  if (document.getElementById('inputCity').value.length == '') {
    alert('Vänligen skriv in något i rutan!')
  } else {
  input = document.getElementById('inputCity').value;
  localStorage.setItem('input', input);
  console.log(input);
}}

if (weather === 'Sun') {
  placeHolderIcon.classList.add('placeHolderIcon');
  placeHolderIcon.classList.remove('cloudySun');
}if (weather === 'cloudySun') {
  placeHolderIcon.classList.add('cloudySun');
  placeHolderIcon.classList.remove('placeHolderIcon');
}if (weather === 'cloudy') {
  
}