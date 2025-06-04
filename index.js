import{a as p,S as y,i as l}from"./assets/vendor-g8RIeo89.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const b="50582422-1579f90b4d4d4016b97d9d478",L="https://pixabay.com/api/",w=15;async function v(e,o=1){return(await p.get(L,{params:{key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:w,page:o}})).data}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),A=new y(".gallery a",{captionsData:"alt",captionDelay:250});function P(e){const o=e.map(r=>`
         <li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}">
            <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes</b> ${r.likes}</p>
            <p><b>Views</b> ${r.views}</p>
            <p><b>Comments</b> ${r.comments}</p>
            <p><b>Downloads</b> ${r.downloads}</p>
          </div>
        </li>
      `).join("");u.insertAdjacentHTML("beforeend",o),A.refresh()}function S(){u.innerHTML=""}function m(){f.style.display="block"}function q(){f.style.display="none"}function M(e){e.classList.remove("hidden")}function d(e){e.classList.add("hidden")}const B="data:image/svg+xml;utf8,"+encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path fill="#FAFAFB" d="M6.81.219A.75.75 0 0 1 7.34 0h9.32a.75.75 0 0 1 .53.219l6.591 6.591a.75.75 0 0 1 .219.53v9.32a.75.75 0 0 1-.219.53l-6.591 6.591a.75.75 0 0 1-.53.219H7.34a.75.75 0 0 1-.53-.219L.219 17.19A.75.75 0 0 1 0 16.66V7.34a.75.75 0 0 1 .219-.53L6.81.219ZM7.65 1.5 1.5 7.65v8.7l6.15 6.15h8.7l6.15-6.15v-8.7L16.35 1.5h-8.7Z"/>
      <path fill="#FAFAFB" d="M6.969 6.969a.75.75 0 0 1 1.062 0L12 10.939l3.969-3.97a.75.75 0 1 1 1.062 1.062L13.061 12l3.97 3.969a.752.752 0 0 1-1.062 1.062L12 13.061l-3.969 3.97a.752.752 0 0 1-1.282-.531.751.751 0 0 1 .22-.531L10.939 12 6.97 8.031a.75.75 0 0 1 0-1.062Z"/>
    </svg>
    `),R=document.querySelector(".form"),n=document.querySelector(".load-more-btn");let g="",s=1;const E=15;R.addEventListener("submit",async e=>{e.preventDefault();const o=e.target.elements["search-text"].value.trim();if(!o){l.warning({message:"Enter a search query!"});return}S(),m(),d(n),g=o,s=1,await h()});n.addEventListener("click",async()=>{s+=1,await h()});async function h(){m(),n.disabled=!0;try{const e=await v(g,s);if(e.hits.length===0&&s===1){l.error({theme:"dark",message:"Sorry, there are no images matching<br>your search query. Please try again!",backgroundColor:"#ef4040",color:"#fafafb",iconUrl:B,timeout:5e3,position:"topRight"}),d(n);return}if(P(e.hits),s>1){const r=document.querySelector(".gallery-item");if(r){const{height:i}=r.getBoundingClientRect();window.scrollBy({top:i*2,behavior:"smooth"})}}const o=Math.ceil(e.totalHits/E);s>=o?(d(n),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:4e3,color:"#fafafb",backgroundColor:"#4e75ff"})):M(n)}catch(e){l.error({message:"An error occurred while loading images."}),console.error(e)}finally{q(),n.disabled=!1}}
//# sourceMappingURL=index.js.map
