import './style/style.scss';

const icons = new Image();
icons.src = "/suncloud.png";
let input = '';
const submitCity = document.querySelector('#submitCity');
const placeHolderIcon = document.querySelector('#placeHolderIcon');
let weather = "sun";
submitCity.addEventListener('click', returnText);

function returnText() {
  input = document.getElementById("inputCity").value;
  localStorage.setItem('input', input);
  console.log(input);
}

if (weather === "sun") {
  placeHolderIcon.classList.add("placeHolderIcon");
  placeHolderIcon.classList.remove("cloudySun");
}if (weather === "cloudySun") {
  placeHolderIcon.classList.add("cloudySun");
  placeHolderIcon.classList.remove("placeHolderIcon");
};

console.log(input);