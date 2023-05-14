// Meu código

function alterarTema () {
    var imgModoEscuro = document.querySelector('.imagem-botao');
    var botaoAlterarTema = document.querySelector('#botao-alterar-tema');

    if (imgModoEscuro.classList.contains('sol')) {
        botaoAlterarTema.innerHTML = `<img src="./src/imagens/moon.png" alt="imagem da lua" class="imagem-botao lua"/>`;
        document.body.classList =  'modo-escuro';
    } else if (imgModoEscuro.classList.contains('lua')) {
        botaoAlterarTema.innerHTML = `<img src="./src/imagens/sun.png" alt="imagem do sol" class="imagem-botao sol"/>`;
        document.body.classList = '';
    }
}


//Código dos gêmeos

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});