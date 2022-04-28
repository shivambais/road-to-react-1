(()=>{"use strict";var e,n,t,r,a,o,s,i,c,p,d,l,u,m,f={989:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),a=t.n(r),o=t(645),s=t.n(o)()(a());s.push([e.id,"#center{\r\n    display: flex;\r\n    flex-direction: column;\r\n     align-items: center;\r\n }\r\n #appendRecipe{\r\n     width: 70%;\r\n     margin:auto;\r\n     display: grid;\r\n     grid-template-columns: repeat(2,1fr);\r\n     gap: 35px;\r\n     margin-top:50px; \r\n     margin-bottom:  30px;\r\n     /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */\r\n     /* padding:50px; */\r\n }\r\n .searchBoxClass{\r\n     padding:20px;\r\n    \r\n     height: 600px;\r\n     overflow: auto;\r\n     box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n     padding-bottom:20px;\r\n } \r\n \r\n .searchImageClass{\r\n     width:100%;\r\n     height:300px;\r\n }\r\n \r\n #heading{\r\n     font-weight: bold;\r\n }",""]);const i=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var p=0;p<e.length;p++){var d=[].concat(e[p]);r&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},s=[],i=0;i<e.length;i++){var c=e[i],p=r.base?c[0]+r.base:c[0],d=o[p]||0,l="".concat(p," ").concat(d);o[p]=d+1;var u=t(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=a(m,r);r.byIndex=i,n.splice(i,0,{identifier:l,updater:f,references:1})}s.push(l)}return s}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var i=t(o[s]);n[i].references--}for(var c=r(e,a),p=0;p<o.length;p++){var d=t(o[p]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},h={};function g(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return f[e](t,t.exports,g),t.exports}g.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return g.d(n,{a:n}),n},g.d=(e,n)=>{for(var t in n)g.o(n,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},g.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e=g(379),n=g.n(e),t=g(795),r=g.n(t),a=g(569),o=g.n(a),s=g(565),i=g.n(s),c=g(216),p=g.n(c),d=g(589),l=g.n(d),u=g(989),(m={}).styleTagTransform=l(),m.setAttributes=i(),m.insert=o().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=p(),n()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals,document.getElementById("searchInput").addEventListener("input",(async()=>{let e=`https://www.themealdb.com/api/json/v1/1/search.php?s=${document.getElementById("searchInput").value}`,n=await(async e=>{try{let n=await fetch(e);return(await n.json()).meals}catch(e){console.log("error: ",e)}})(e);var t,r;t=n,r="appendRecipe",document.getElementById(r).innerHTML=null,t.forEach((e=>{let n=document.createElement("div");n.setAttribute("class","searchBoxClass");let t=document.createElement("img");t.src=e.strMealThumb,t.setAttribute("class","searchImageClass");let a=document.createElement("p");a.innerHTML='<span id="heading">Meal: </span>'+e.strMeal;let o=document.createElement("p");o.innerHTML='<span id="heading">Category: </span>'+e.strCategory;let s=document.createElement("p");s.innerHTML='<span id="heading">Cuisine: </span>'+e.strArea;let i=document.createElement("p");i.innerHTML='<span id="heading">Tag: </span>'+e.strTags;let c=document.createElement("p");c.innerHTML='<span id="heading">Ingredients: </span>'+e.strIngredient1+", "+e.strIngredient2+", "+e.strIngredient3;let p=document.createElement("p");p.innerHTML='<span id="heading">Instructions: </span>'+e.strInstructions,n.append(t,a,s,o,i,c,p),document.getElementById(r).append(n)}))}))})();