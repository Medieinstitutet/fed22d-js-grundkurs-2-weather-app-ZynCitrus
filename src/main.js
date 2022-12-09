import './style/style.scss';

const icons = new Image();
icons.src = "public/suncloud.png";


const placeHolderIcon = document.querySelector('#placeHolderIcon');
let weather = "sun";

if (weather === "sun") {
} else {
  
}
/*
function iconLoader() {
 for (let i = 0; i < icons.length; i++) {
  const element = icons[i];
  document.getElementById("placeHolderIcon").innerHTML = icons[i];
 }
}*/
console.log(placeHolderIcon);
/*
iconLoader(icons);*/