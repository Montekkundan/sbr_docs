(()=>{"use strict";var e,a,t,r,f,c={},d={};function o(e){var a=d[e];if(void 0!==a)return a.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}o.m=c,o.c=d,e=[],o.O=(a,t,r,f)=>{if(!t){var c=1/0;for(i=0;i<e.length;i++){t=e[i][0],r=e[i][1],f=e[i][2];for(var d=!0,b=0;b<t.length;b++)(!1&f||c>=f)&&Object.keys(o.O).every((e=>o.O[e](t[b])))?t.splice(b--,1):(d=!1,f<c&&(c=f));if(d){e.splice(i--,1);var n=r();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[t,r,f]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var f=Object.create(null);o.r(f);var c={};a=a||[null,t({}),t([]),t(t)];for(var d=2&r&&e;"object"==typeof d&&!~a.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,o.d(f,c),f},o.d=(e,a)=>{for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,t)=>(o.f[t](e,a),a)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",110:"66406991",453:"30a24c52",533:"b2b675dd",948:"8717b14a",1477:"b2f554cd",1633:"031793e1",1713:"a7023ddc",1914:"d9f32620",2267:"59362658",2362:"e273c56f",2535:"814f3328",2859:"18c41134",3085:"1f391b9e",3089:"a6aa9e1f",3205:"a80da1cf",3237:"1df93b7f",3412:"3fa941aa",3514:"73664a40",3608:"9e4087bc",3792:"dff1c289",4013:"01a85c17",4193:"f55d3e7a",4607:"533a09ca",5589:"5c868d36",6103:"ccc49370",6504:"822bd8ab",6525:"ea88f2a1",6670:"adea3773",6755:"e44a2883",6938:"608ae6a4",7178:"096bfee4",7286:"4b4a4d14",7414:"393be207",7918:"17896441",7920:"1a4e3797",8610:"6875c492",8636:"f4f34a3a",8818:"1e4232ab",9003:"925b3f96",9035:"4c9e35b1",9326:"c844b82d",9412:"eff1bbe4",9514:"1be78505",9642:"7661071f",9671:"0e384e19",9700:"e16015ca",9817:"14eb3368"}[e]||e)+"."+{53:"c89df409",110:"00634dd1",453:"835a5696",533:"6954e475",864:"13a97a63",948:"51049acb",1426:"9a02e020",1477:"1169a4e7",1633:"baf1e530",1713:"f165efe4",1914:"cb381c42",2267:"ac5cd8bc",2362:"8c8627be",2529:"76d1cab0",2535:"8f467d07",2859:"1074a42b",3085:"335a1fdb",3089:"656012b7",3205:"4439e3bc",3237:"6713d391",3412:"afde23f8",3514:"6c9c96ab",3608:"030aca3b",3792:"6ff3e063",4013:"15cf3bee",4193:"2ae75486",4607:"b3ac3d35",4972:"f8240c65",5589:"e8f2ee04",6103:"50da632d",6504:"6689d1a1",6525:"38312dbf",6670:"562f892f",6755:"9b37600c",6938:"3bdcf90e",6945:"6ab4657b",7178:"0f116015",7286:"b3fb6aba",7414:"a0bb8116",7918:"5e67909d",7920:"f02298b8",8610:"13895068",8636:"56edaf34",8818:"f82181c7",8894:"859b6c98",9003:"756c471b",9035:"e80e1272",9172:"a186ec5c",9326:"ecb7debb",9412:"d0379d5d",9514:"0740e67e",9642:"3bcba33d",9671:"fdf4863b",9700:"d273b25a",9817:"b09daa2f"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},f="sbr-docs:",o.l=(e,a,t,c)=>{if(r[e])r[e].push(a);else{var d,b;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+t){d=u;break}}d||(b=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",f+t),d.src=e),r[e]=[a];var l=(a,t)=>{d.onerror=d.onload=null,clearTimeout(s);var f=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),f&&f.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),b&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/",o.gca=function(e){return e={17896441:"7918",59362658:"2267",66406991:"110","935f2afb":"53","30a24c52":"453",b2b675dd:"533","8717b14a":"948",b2f554cd:"1477","031793e1":"1633",a7023ddc:"1713",d9f32620:"1914",e273c56f:"2362","814f3328":"2535","18c41134":"2859","1f391b9e":"3085",a6aa9e1f:"3089",a80da1cf:"3205","1df93b7f":"3237","3fa941aa":"3412","73664a40":"3514","9e4087bc":"3608",dff1c289:"3792","01a85c17":"4013",f55d3e7a:"4193","533a09ca":"4607","5c868d36":"5589",ccc49370:"6103","822bd8ab":"6504",ea88f2a1:"6525",adea3773:"6670",e44a2883:"6755","608ae6a4":"6938","096bfee4":"7178","4b4a4d14":"7286","393be207":"7414","1a4e3797":"7920","6875c492":"8610",f4f34a3a:"8636","1e4232ab":"8818","925b3f96":"9003","4c9e35b1":"9035",c844b82d:"9326",eff1bbe4:"9412","1be78505":"9514","7661071f":"9642","0e384e19":"9671",e16015ca:"9700","14eb3368":"9817"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,t)=>{var r=o.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((t,f)=>r=e[a]=[t,f]));t.push(r[2]=f);var c=o.p+o.u(a),d=new Error;o.l(c,(t=>{if(o.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var f=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+a+" failed.\n("+f+": "+c+")",d.name="ChunkLoadError",d.type=f,d.request=c,r[1](d)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,t)=>{var r,f,c=t[0],d=t[1],b=t[2],n=0;if(c.some((a=>0!==e[a]))){for(r in d)o.o(d,r)&&(o.m[r]=d[r]);if(b)var i=b(o)}for(a&&a(t);n<c.length;n++)f=c[n],o.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return o.O(i)},t=self.webpackChunksbr_docs=self.webpackChunksbr_docs||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();