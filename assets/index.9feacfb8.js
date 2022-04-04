import{j as p,r as m,I as h,a as u,b as g,S as f,c as b,d as w,e as v,f as N,g as y,h as k,i as S,k as I,l as j,R as z,m as L}from"./vendor.bd878976.js";const P=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(t){if(t.ep)return;t.ep=!0;const l=i(t);fetch(t.href,l)}};P();const e=p.exports.jsx,a=p.exports.jsxs,c=({image:r,title:o,about:i})=>a("div",{className:"group flex flex-col bg-white shadow-md p-2 lg:p-4 md:p-4 flex-1 \r items-center justify-center rounded-md min-w-[60%] lg:min-w-[30%] md:min-w-[40%]",children:[e("img",{src:r,className:"min-w-0 cursor-pointer group-hover:scale-110",onClick:()=>{window.open(r)}}),e("h3",{className:"capitalize mt:5\r font-bold  text-base lg:text-lg text-center group-hover:mt-8",children:o}),e("p",{className:"text-center p-2 text-base hidden md:hidden lg:block",children:i})]}),s=({title:r,children:o})=>a("div",{className:"group flex flex-col bg-white shadow-md p-2 lg:p-4 md:p-4 flex-1 min-w-[30%]\r lg:min-w-[22%] items-center justify-center rounded-md max-w-[30%] lg:max-w-[25%]",children:[e("div",{className:"max-w-[80%] lg:max-w-[60%] md:max-w-[60%] group-hover:scale-125",children:o}),e("h3",{className:"capitalize lg:mt-5 md:mt-5 hidden lg:block md:block\r font-bold font-mono text-[0.7rem] lg:text-lg md:text-lg text-center\r group-hover:block group-hover:mt-5\r ",children:r})]});var M="/assets/juber.174df616.png",C="/assets/sipdeh.88c68efe.png",E="/assets/pavel.7964ecc6.png",R="/assets/fuxionSpark.9a8b39c2.png";const x=["rgb(103 232 249)","rgb(190 242 100)","rgb(253 224 71)","rgb(239 68 68)","rgb(216 180 254)"];function A(){const[r,o]=m.exports.useState(0),[i,n]=m.exports.useState(!1),t=()=>{const l=x.length-1===r?0:r+1;o(l)};return m.exports.useEffect(()=>{if(i){const l=setInterval(t,500);return()=>clearInterval(l)}},[t]),a("body",{className:"flex flex-col scroll-smooth",children:[e("div",{className:"lg:px-32 px-10 md:px-24",children:a("div",{className:"flex flex-row flex-wrap min-h-screen justify-between items-center py-10",children:[a("div",{className:"flex-2",children:[e("p",{className:"text-white text-2xl lg:text-3xl md:text-3xl font-bold",children:"Hey, I am"}),e("h1",{className:"text-white font-bold md:text-6xl lg:text-7xl mt-4 max-w-[16ch] leading-20 lg:leading-tight md:leading-tight text-5xl",children:"Ilyas Abdurahman Yusuf"}),e("p",{className:"text-white mt-5 text-1xl lg:text-2xl md:text-2xl max-w-[60ch]",children:"Software Engineer from Indonesia, I make Mobile Apps, Backend and other Magic Stuffs \u2728"}),a("div",{className:"flex flex-wrap gap-2 mt-10",children:[a("button",{onClick:()=>window.location.assign("https://github.com/hikaaam"),className:"group bg-white shadow-md text-black px-5 py-2 rounded-md font-bold text-lg cursor-pointer hover:shadow-cyan-300",children:["GitHub"," ",e(h,{className:"inline-block ml-2 mb-1 group-hover:animate-bounce",size:"2rem"})]}),a("button",{onClick:()=>window.location.assign("https://linkedin.com/in/ilyas-a-97b03a162"),className:"group bg-white shadow-md text-black px-5 py-2 rounded-md font-bold text-lg cursor-pointer hover:shadow-cyan-300",children:["LinkedIn"," ",e(u,{className:"text-blue-700 inline-block ml-2 mb-1 group-hover:animate-bounce",size:"2rem"})]})]})]}),a("div",{onMouseEnter:()=>n(()=>(t(),!0)),onMouseLeave:()=>n(!1),className:"flex flex-col flex-1 items-center justify-center",children:[e("div",{className:"w-40 lg:w-64 md:w-64 cursor-pointer",children:e(g,{size:"100%",color:x[r],onClick:t})}),a("h1",{className:"text-white font-mono text-2xl text-center",children:[">","Programming Is My Passion"," ",e("span",{style:{color:x[r]},children:"\u2764"})]})]})]})}),a("div",{className:"flex flex-col flex-1 bg-white lg:px-32 p-10 md:px-24 min-h-screen",children:[e("h1",{className:"text-black font-bold md:text-4xl lg:text-4xl text-3xl text-center",children:"My Technology Stack"}),e("p",{className:"text-black  text-lg ls:text-2xl md:text-2xl text-center mt-5 max-w-[60ch] self-center",children:"I like learning new technology, because technology keeps getting more advance everyday, so my tech stack may add in the future."}),a("blockquote",{className:"relative p-5  mt-10 text-base italic border-l-[3px] bg-neutral-100 rounded-md shadow-md text-neutral-600 border-neutral-500 quote self-center min-w-[60%] text-center",children:['"I could either watch it happen or be a part of it."',e("span",{className:"font-bold",children:" - Elon Musk"})]}),a("div",{className:"flex flex-row justify-center px-10 lg:px-32 items-center gap-2 lg:gap-6 md:gap-4 mt-10 flex-wrap",children:[e(s,{title:"TypeScript",children:e(f,{className:"text-blue-900",size:"100%"})}),e(s,{title:"React Native",children:e(b,{className:"text-cyan-500",size:"100%"})}),e(s,{title:"Redux",children:e(w,{className:"text-purple-600",size:"100%"})}),e(s,{title:"PHP",children:e(v,{className:"text-blue-900",size:"100%"})}),e(s,{title:"Express JS",children:e(N,{className:"text-green-600",size:"100%"})}),e(s,{title:"Laravel",children:e(y,{className:"text-red-400",size:"100%"})}),e(s,{title:"SQL",children:e(k,{className:"text-blue-500",size:"100%"})}),e(s,{title:"Graphql",children:e(S,{className:"text-pink-600",size:"100%"})}),e(s,{title:"Tailwind",children:e(I,{className:"text-cyan-500",size:"100%"})}),e(s,{title:"Javascript",children:e(j,{className:"text-yellow-200",size:"100%"})})]}),a("div",{className:"flex flex-col flex-1 bg-white mt-2  lg:px-32 p-10 md:px-24",children:[e("h1",{className:"text-black font-bold md:text-4xl lg:text-4xl text-3xl text-center",children:"Portofolio"}),e("p",{className:"text-black  text-lg ls:text-2xl md:text-2xl text-center mt-5 max-w-[60ch] self-center",children:"Some of the apps that I've worked on."}),a("div",{className:"flex flex-row justify-center px-10 lg:px-32 items-center gap-2 lg:gap-6 md:gap-4 mt-10 flex-wrap",children:[e(c,{title:"Juber SuperApp",image:M,about:"Juber SuperApp is an E-Commerce app that have a lots of feature like payment, order food, order taxis, or buy tickets."}),e(c,{title:"Sipdeh",image:C,about:"Sistem informasi produk hukum daerah (SIPDEH) is an app to look up on local Indonesian's law."}),e(c,{title:"Pavel ID",image:E,about:"an app to order shoe cleaning services from pavel ID."}),e(c,{title:"Fuxion Spark",image:R,about:"Fuxion Spark is a gigs provider apps for talent to bid a job, or for searching talent that fit your job."})]})]})]})]})}z.render(e(L.StrictMode,{children:e(A,{})}),document.getElementById("root"));
