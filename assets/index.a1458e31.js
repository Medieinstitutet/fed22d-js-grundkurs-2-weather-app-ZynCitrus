(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();new Date().getHours();let i=new Date().getMonth();const u=document.querySelector("#submitCity");u.addEventListener("click",d);i>=2&&i<=4&&(console.log("V\xE5r"),document.body.style.backgroundImage="url('./spring.jpg')");i>=5&&i<=7&&(console.log("Sommar"),document.body.style.backgroundImage="url('./summer.jpg')");i>=8&&i<=9?(console.log("H\xF6st"),document.body.style.backgroundImage="url('./fall.jpg')"):(console.log("Vinter"),document.body.style.backgroundImage="url('./winter.jpg')");async function d(){const o=document.getElementById("inputCity").value;o.length==""?alert("V\xE4nligen skriv in n\xE5got i rutan!"):await s(o)}async function s(o){let r=`https://api.openweathermap.org/data/2.5/weather?q=${o}&appid=75303f12006046a5556974d2d62ef0d1&units=metric`;return fetch(r).then(t=>t.json()).then(t=>{g(t)}).catch(t=>(console.error("Error",t),null))}function m(){const o=t=>{let c=`http://api.openweathermap.org/geo/1.0/reverse?lat=${t.coords.latitude}&lon=${t.coords.longitude}&limit=0&appid=75303f12006046a5556974d2d62ef0d1&units=metric`;return fetch(c).then(e=>e.json()).then(e=>{s(e[0].name)}).catch(e=>null)},r=t=>{};navigator.geolocation.getCurrentPosition(o,r)}function g(o){const r=o.main.temp,t=Math.round(r),c=o.name,e=o.main.feels_like,n=Math.round(e),a=`https://openweathermap.org/img/wn/${o.weather[0].icon}@2x.png`;document.getElementById("iconForSky").src=a,document.getElementById("placeHolderTemp").innerHTML="Idag \xE4r det "+t+" grader och det k\xE4nns som "+n+" i "+c+" grader."}m();
