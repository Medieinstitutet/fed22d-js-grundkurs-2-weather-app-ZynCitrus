(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();let l=new Date().getHours();const a=document.querySelector("#submitCity");a.addEventListener("click",d);l>=7&&l<=18?document.body.style.background="lightblue":document.body.style.background="darkblue";async function d(){const n=document.getElementById("inputCity").value;n.length==""?alert("V\xE4nligen skriv in n\xE5got i rutan!"):await s(n)}async function s(n){let r=`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=75303f12006046a5556974d2d62ef0d1&units=metric`;return fetch(r).then(t=>t.json()).then(t=>{f(t)}).catch(t=>(console.error("Error",t),null))}function m(){const n=t=>{console.log({position:t});let c=`http://api.openweathermap.org/geo/1.0/reverse?lat=${t.coords.latitude}&lon=${t.coords.longitude}&limit=0&appid=75303f12006046a5556974d2d62ef0d1&units=metric`;return fetch(c).then(e=>e.json()).then(e=>{console.log(e),s(e[0].name)}).catch(e=>(console.error("Error",e),null))},r=t=>{console.log(t)};navigator.geolocation.getCurrentPosition(n,r)}function f(n){console.log(n);const r=n.main.temp,t=Math.round(r),c=n.name,e=n.main.feels_like,o=Math.round(e),u=`https://openweathermap.org/img/wn/${n.weather[0].icon}@2x.png`;document.getElementById("iconForSky").src=u,document.getElementById("placeHolderTemp").innerHTML="Idag \xE4r det "+t+" och det k\xE4nns som "+o+" i "+c}m();
