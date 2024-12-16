//let titulo = document.querySelector('h1');
//titulo.innerHTML = ('Jogo do número secreto');

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = ('Escolha um número entre 1 a 10');

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function  exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value; 
    //console.log(chute == numeroSecreto);

    if (chute == numeroSecreto){
      exibirTextoNaTela('h1', 'Acertou!!!');
      let palavraTentativas = tentativas >1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
      exibirTextoNaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'o número secreto é menor.');
        }else{
            exibirTextoNaTela('p', 'o número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}

function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt (Math.random () * numeroLimite + 1);
  let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;
    if (listaDeNumerosSorteados.length == numeroLimite){
        listaDeNumerosSorteados = [];
    }


  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
      return gerarNumeroAleatorio();
  }else {
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(listaDeNumerosSorteados)
      return numeroEscolhido;
  }
}

function reiniciarJogo(){
  numeroSecreto= gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true);
}



