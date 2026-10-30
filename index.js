import{a as f,S as p,i as a}from"./assets/vendor-CqoLp5UU.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="58301038-85ce269383a58cb77f22b25a0",h="https://pixabay.com/api/";function g(o){const r={key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(h,{params:r}).then(s=>s.data)}const c=document.querySelector(".gallery"),l=document.getElementById("loader"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:n,comments:u,downloads:m})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${s}" alt="${e}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b><span>${t}</span></p>
        <p class="info-item"><b>Views</b><span>${n}</span></p>
        <p class="info-item"><b>Comments</b><span>${u}</span></p>
        <p class="info-item"><b>Downloads</b><span>${m}</span></p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){c.innerHTML=""}function E(){l.classList.remove("is-hidden")}function P(){l.classList.add("is-hidden")}const S=document.getElementById("search-form");S.addEventListener("submit",v);function v(o){o.preventDefault();const r=o.currentTarget,s=r.elements["search-text"].value.trim();if(L(),s===""){a.warning({title:"Caution",message:"Please fill out the search field!",position:"topRight"});return}E(),g(s).then(i=>{if(i.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(i.hits)}).catch(()=>{a.error({title:"Error",message:"Failed to fetch images. Please check your internet connection or try again later.",position:"topRight"})}).finally(()=>{P(),r.reset()})}
//# sourceMappingURL=index.js.map
