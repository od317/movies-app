const searchq = document.querySelector('.searchq');
const container = document.querySelector('.contanier');


fetchapi(`https://imdb-api.com/API/AdvancedSearch/k_bb3vvmqp?title=${searchq.innerHTML}&count=250`);

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

    <button type="button" class="modalbut" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
    watch
  </button>
  
  <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${e.title}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="d-flex justify-content-center mb-2">
          <img src="${e.image}" alt="" class="modal-img">
        </div>
  
        <p>year: ${e.description}</p>
        <p>runtimeStr: ${e.runtimeStr}</p>
        <p>genres: ${e.genres}</p>
        <p>contentRating: ${e.contentRating}</p>
        <p>imDbRating: ${e.imDbRating}</p>
        <p>plot: ${e.plot}</p>
        <p>actors: ${e.stars}</p>
      </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>


  </div>`;
});}
else{
ht='nope'
}
container.innerHTML=ht;

}




















