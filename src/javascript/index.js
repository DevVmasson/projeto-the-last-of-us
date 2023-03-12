    // passo 1 pegar o elemento Html 
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
    // passo 2 identificar o clique no botao
botoesCarrossel.forEach((botao ,indice) => {
    botao.addEventListener('click', () => {
        // descmarcar botao
        const botaoselecionado = document.querySelector('.selecionado')
        botaoselecionado.classList.remove('selecionado');
        // marcar o botao
        botao.classList.add('selecionado');
        // esconder imagem 
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        // aparecer imagem 
        imagens[indice].classList.add('ativa');
    })
})