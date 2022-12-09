import './style/style.scss';

const icons = new Image();
icons.src = "/suncloud.png";


const placeHolderIcon = document.querySelector('#placeHolderIcon');
let weather = "cloudySun";

if (weather === "sun") {
  placeHolderIcon.classList.add("placeHolderIcon");
  placeHolderIcon.classList.remove("cloudySun");
  console.log(placeHolderIcon);} 
if (weather === "cloudySun") {
  placeHolderIcon.classList.add("cloudySun");
  placeHolderIcon.classList.remove("placeHolderIcon");
};
