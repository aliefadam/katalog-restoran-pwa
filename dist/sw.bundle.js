if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const f=e=>n(e,s),d={module:{uri:s},exports:o,require:f};i[s]=Promise.all(c.map((e=>d[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.bundle.js",revision:"0c73cd2943f02ee478caa83ff9231fec"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"fd3272b313269744306b9e40838496d7"},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"favicon.png",revision:"47d75b16d908405d2c3b39f4124572c0"},{url:"icons/icon-128x128.png",revision:"65bd3c80df2f77e22bcfa7f5cbd02111"},{url:"icons/icon-144x144.png",revision:"781e84afcf2c66cb851d568ac17dc6d6"},{url:"icons/icon-152x152.png",revision:"204eafb7e34f7bbdafe69baa89fd11f2"},{url:"icons/icon-192x192.png",revision:"28ccd63ee0c198345e41cfcbb5c10e53"},{url:"icons/icon-384x384.png",revision:"ae343eeed2dd1cbc350de373954b9b9a"},{url:"icons/icon-512x512.png",revision:"2b01511e4bafe1bd662f6c77fc5d3926"},{url:"icons/icon-72x72.png",revision:"9c0180b399175b295e0adc982be3ea1b"},{url:"icons/icon-96x96.png",revision:"b8ff6d7b0349699953856d539523908b"},{url:"images/heros/hero-image_1.jpg",revision:"a2f444d9e2e43a5d0373b1a0d8cb2236"},{url:"images/heros/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/heros/hero-image_3.jpg",revision:"d232e05589056e05f52cf2689f315c6c"},{url:"images/heros/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"images/no-results.png",revision:"19d4109b8beb0ddfb2fa026f3fb01f82"},{url:"images/sad-heart.png",revision:"807f84b8edd79067f8e441340f157c29"},{url:"index.html",revision:"7c813ac194e8b11e74b1b4c0d84a7a73"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev")),new e.StaleWhileRevalidate({cacheName:"restaurant-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
