!function(){return function e(n,t,r){function o(a,c){if(!t[a]){if(!n[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var m=t[a]={exports:{}};n[a][0].call(m.exports,function(e){return o(n[a][1][e]||e)},m,m.exports,e,n,t,r)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}}()({1:[function(e,n,t){const r='<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charsret="UTF-8">\n  <meta name="description" content="">\n  <meta name="keywords" content="HTML5, SCSS, JavaScript, Node, Jest, ES6, Gulp">\n  <meta name="author" content="@byverdu">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css">\n  <title>Albert Vallverdu CV</title>\n</head>\n<body>',o=["Name: Albert Vallverdu","Email: Byverdu@gmail.com","Telephone: 07720 860376","Address: SW15 2RR"].reduce((e,n)=>e.concat(`\n\t\t<li>${n}</li>`),""),i=`\n  <main class="content-wrapper">\n    ${r}\n    ${`<aside>\n      <h4>Contact details</h4>\n      <ol>\n        ${o}\n      </ol>\n    </aside>`}\n  </main>`;document.addEventListener("DOMContentLoaded",function(){!function(){const e=["prism.min.css","prism-coy.min.css","prism-solarizedlight.min.css"],n=Math.floor(Math.random()*Math.floor(e.length));document.getElementById("link").href=`https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/${e[n]}`}(),console.log(r.concat(i)),document.getElementById("content").innerHTML=r.concat(i)})},{}]},{},[1]);
//# sourceMappingURL=bundle.js.map