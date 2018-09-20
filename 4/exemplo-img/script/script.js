const links = document.querySelector(".gallery__nav");
const imagem = document.querySelector(".gallery__image");
const titulo = document.querySelector(".gallery__caption");

for(let i = 0; i < links.children.length; i++){
    const filhos = links.children[i];
    filhos.addEventListener("click", function(){
        //pega o caminho da img no atributo data-image
        const img = this.dataset.image;

        imagem.src = img;
        const title = this.dataset.title;
        titulo.innerHTML = title;
        console.log(title)
    })
}