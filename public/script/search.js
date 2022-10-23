const searchq = document.querySelector('.searchq');
const container = document.querySelector('.contanier');


fetchapi(`https://imdb-api.com/API/AdvancedSearch/k_bb3vvmqp?title=${searchq.innerHTML}`);

async function fetchapi(url){
console.log(url);
const response = await fetch(url);
const data = await response.json();

const res = data.results;
console.log(res);
let ht='';
if(res!=null){
res.forEach(e => {
    ht+=`<div class="search-card">
    <img src="${e.image}" class="cont-card">
    <div class="hid-card">
    <label class="card-title">${e.title}</label>
    <label class="rating">Rating: ${e.imDbRating}</label>
    </div>
    <button class="card-button">watch</button>
  </div>`;
});}
else{
ht='nope'
}
container.innerHTML=ht;

}
