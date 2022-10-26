const searchq = document.querySelector('.searchq');
const searchq2 = document.querySelector('.searchq2');
const container = document.querySelector('.contanier');


const form = document.querySelector('.form');
  if(searchq!=null)
  fetchapi(`https://imdb-api.com/API/AdvancedSearch/k_unodv9vg?title=${searchq.innerHTML}&count=100`);
  if(searchq2!=null)
  fetchapi(`https://imdb-api.com/API/AdvancedSearch/k_unodv9vg/?genres=${searchq2.innerHTML}&sort=boxoffice_gross_us,desc&count=100`);
  
  

async function fetchapi(url){
console.log(url);
const response = await fetch(url);
const data = await response.json();

const res = data.results;
console.log(res);
let ht='';
if(res!=null){
  let i = 0;
res.forEach(e => {
    i++;
    ht+=`<div class="search-card">
    <img src="${e.image}" class="cont-card">
    <div class="hid-card">
    <label class="card-title">${e.title}</label>
    <label class="rating">Rating: ${e.imDbRating}</label>
    </div>

    <a href="/view?title=${e.title}&img=${e.image}&rate=${e.imDbRating}&year=${e.description}&id=${e.id}&runtimeStr=${e.runtimeStr}&genres=${e.genres}&contentRating=${e.contentRating}&imDbRating=${e.imDbRating}&plot=${e.plot}&actors=${e.stars}" type="button" class="viewbut">
    watch
  </a>

  </div>`;
});}
else{
ht='nope'
}

container.innerHTML=ht;

}

const tbut= document.querySelector('.tbut');
if(tbut!=null){
  tbut.addEventListener('click',()=>{
    
    fetchvid();
})
}


async function fetchvid(){
  
   const response = await fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_unodv9vg/${document.querySelector('.view-id').innerText}`);
   const data = await response.json();
   console.log('')
   const vidid = data.videoId;
  document.querySelector('.tbutf').innerHTML='';
  const videoflex =document.querySelector('.video-flex'); 
    videoflex.style.height='30vh';
  videoflex.innerHTML=`<iframe 
  src="https://www.youtube.com/embed/${vidid}">
  </iframe>`;
  console.log(`https://www.youtube.com/embed/${vidid}`);
}































