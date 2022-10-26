const searchq = document.querySelector('.searchq');
const searchq2 = document.querySelector('.searchq2');
const container = document.querySelector('.contanier');

const apikey = "k_bb3vvmqp";

const form = document.querySelector('.form');
  if(searchq!=null)
  fetchapi(`https://imdb-api.com/API/AdvancedSearch/${apikey}?title=${searchq.innerHTML}&count=100`);
  if(searchq2!=null)
 fetchapi(`https://imdb-api.com/API/AdvancedSearch/${apikey}/?genres=${searchq2.innerHTML}&sort=boxoffice_gross_us,desc&count=100`);
  
  

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
document.querySelector('.spin').style.display='none';
container.innerHTML=ht;

}

const tbut= document.querySelector('.tbut');
if(tbut!=null){
  tbut.addEventListener('click',()=>{
    
    fetchvid(document.querySelector('.view-id').innerText);
})
}


async function fetchvid(id){
  
   const response = await fetch(`https://imdb-api.com/en/API/YouTubeTrailer/${apikey}/${id}`);
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




const view_id = document.querySelector('.view-id');
const view_body = document.querySelector('.view-body');

if(view_id!=null&&view_body!=null){
  fetchview();
}

async function fetchview(){
 const response = await fetch(`https://imdb-api.com/API/AdvancedSearch/${apikey}?title=${view_id.innerText}&count=1`);
 console.log(`https://imdb-api.com/API/AdvancedSearch/${apikey}?title=${view_id.innerText}&count=1`);
 const data = await response.json();
 const res = data.results[0];  
 console.log(data);
 document.querySelector('.spin').innerHTML='';
 view_body.innerHTML = `<label class="sec-label view-id" for="">${res.id}</label>

 <div class="view-header d-flex justify-content-center flex-column">
     <label class="view-title mb-3">${res.title}</label>
     <img src="${res.image} " alt="">
 </div>  
  
 
 <div class="d-flex justify-content-center mb-2 tbutf">
         
     <div class="tbutc d-flex justify-content-center mb-2">
     <button class="tbut t1"><ion-icon name="arrow-dropright" class="arrow"></ion-icon></button>  
   </div>
 
   </div>
 
   <div class="d-flex justify-content-center mb-3 video-flex">
    
 </div>
 
 
 <div class=" view-sec d-flex justify-content-center flex-column">
 <label class="sec-label" for="">imdRatring: ${res.imDbRating}</label>
 <label class="sec-label" for="">contentRating: ${res.contentRating}</label>
 <label class="sec-label" for="">year: ${res.description}</label>
 <label class="sec-label" for="">genres: ${res.genres}</label>
 <label class="sec-label" for="">time: ${res.runtimeStr}</label>
 <label class="sec-label" for="">plot: ${res.plot}</label>
 <label class="sec-label" for="">actorss: ${res.stars}</label>
 </div>
 
 `;
 const tbut= document.querySelector('.tbut');
if(tbut!=null){
  tbut.addEventListener('click',()=>{
    
    fetchvid(res.id);
   
})
}

}

























