const nomeReference = document.querySelector("#nome");
const universoReference = document.querySelector("#universo");
const descricaoReference = document.querySelector("#descricao");
const imagemReference = document.querySelector("#urlImagem");
const buttonReference = document.querySelector("#btnSubmit");
const heroiListReference = document.querySelector("#heroiList");
const areaPersonagensReference = document.querySelector("#areaPersonagens");

buttonReference.addEventListener("click", cadastrarHeroi);

function cadastrarHeroi(event) {
  event.preventDefault();
  console.log("teste");

  let nomePost = nomeReference.value;
  let universoPost = universoReference.value;
  let descricaoPost = descricaoReference.value;
  let imagemPost = imagemReference.value;

  // Capturar os itens dos inputs, ex: nomeReference.value
  // Inserir os valores capturados dentro do HTML

  areaPersonagensReference.innerHTML += `
      <div class="card text-white bg-secondary mb-3">
      <img src="${imagemPost}" class="rounded-sm">
        <h2 class="card-title">${nomePost}</h2>
        <h3>${universoPost}</h3>
        <p>${descricaoPost}</p>
      </div>
    `;
}


/* let postagens = [
  { 
    urlImagem: 'imagemReference'
    nomePost:'nomeReference',
    universo:'universoReference',
    descricao: 'descricaoReference',
    }
] */

/* for(let postagem of postagens){
  cardReference.innerHTML += `
      <div class = "item">
          <img src="${cards.urlImagem}">
          <h2>${cards.nome}</h2>
          <h3>${cards.universo}</h3>
          <p>${cards.descricao}</p>
      </div>
  `
} */
