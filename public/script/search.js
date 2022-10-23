const searchq = document.querySelector('.searchq');
const container = document.querySelector('.contanier');


fetchapi(`https://imdb-api.com/en/API/Search/k_unodv9vg/${searchq.innerHTML}`);

async function fetchapi(url){
console.log(url);
const response = await fetch(url);
const data = await response.json();

const res = data.results;
let ht='';
if(data!=null){
res.forEach(e => {
    ht+=`<div class="search-card">
    <img src="${e.image}" class="cont-card">
    <div class="hid-card"></div>
  </div>`;
});}
else{
ht='nope'
}
container.innerHTML=ht;

}
