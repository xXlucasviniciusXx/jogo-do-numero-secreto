

let tentativas = 1
let listaDeNumerosSorteados = [];
let numerolimite = 10
let numeroSecreto = gerarNumeroAleatorio();
exibirMensagemInicial();
console.log(`Número secreto:${numeroSecreto}`);



function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2}); 
   
}

function exibirMensagemInicial() {

    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numerolimite}`);
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(`Chute:${chute}`);
    // acerto o chute
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns você acertou');
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com  ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        // errou o chute  
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();        
    }

}

function gerarNumeroAleatorio() {
    let numeroEscolhido  = parseInt(Math.random() * numerolimite + 1);
    let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosDaLista == numerolimite ){
        listaDeNumerosSorteados = [];
    }
        

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}



function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    limparCampo();
    exibirMensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(`Número secreto:${numeroSecreto}`);
    console.log(listaDeNumerosSorteados);
}