(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function u(){fetch("api.openweathermap.org/data/2.5/forecast?id=2715081&appid=75303f12006046a5556974d2d62ef0d1&units=metric").then(o=>o.json()).then(o=>{console.table(o)}).catch(o=>{console.error("Error",o)})}const d=new Image;d.src="/suncloud.png";const a=document.querySelector("#submitCity"),l=document.querySelector("#placeHolderIcon");document.querySelector("#placeHolderTemp");let c="";a.addEventListener("click",f);function f(){document.getElementById("inputCity").value.length==""?alert("V\xE4nligen skriv in n\xE5got i rutan!"):(c=document.getElementById("inputCity").value,localStorage.setItem("input",c),console.log(c))}l.classList.add("placeHolderIcon"),l.classList.remove("cloudySun");console.log(u());
