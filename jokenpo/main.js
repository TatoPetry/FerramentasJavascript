//papel 1
//pedra 2
//tesoura 3
var pontosJogador = 0;
var pontosComputador = 0;


function jogada(escolha){
    
    var escolhaJogador = escolha;
    var escolhaComputador = -1;
    var elemento = document.querySelector(".jogador"+escolhaJogador);
    trocarClasseJogadaFinalizada();
    trocarClasseJogadaAtiva(elemento);
    var escolhaComputador = jogadaComputador();
    var elementoComputador = document.querySelector(".computador"+escolhaComputador);
    trocarClasseJogadaAtiva(elementoComputador);
    var vencedor = testarVencedor(escolhaJogador, escolhaComputador);
    mensagemVencedor(vencedor);
    contadorPontos(vencedor);
    
    
    
   
}
//Função destaca opção jogador
function trocarClasseJogadaAtiva(elemento){
    var elemento = elemento;
    elemento.classList.remove("imagem");
    elemento.classList.add("jogada-ativa");
}
//Função limpa destaque
function trocarClasseJogadaFinalizada(){
    var elementos = document.querySelectorAll(".imgref");
    elementos.forEach(elemento =>{
        elemento.classList.remove("jogada-ativa");
        elemento.classList.add("imagem");
       
     });
}
//Função jogada computador
function jogadaComputador(){
    var escolha = (Math.random()*(3-1) +1).toFixed(0);
    return escolha;

}
//função testar vencedor
function testarVencedor(jogador, computador){
   
    if(jogador == computador){
      return 0;
   } else if(jogador == 1 && computador == 2 || jogador == 2 && computador == 3 || jogador == 3 && computador == 1){
      return 1;
   } else{
       return 2;
   }
}
//Função para contar os pontos
function contadorPontos(vencedor){
    if(vencedor == 1){
        pontosJogador++;
        document.querySelector("#contador-jogador").textContent = pontosJogador;
    } else {
        pontosComputador++;
        document.querySelector("#contador-computador").textContent = pontosComputador;
    }

}
//Função para informar mensagem vencedor
function mensagemVencedor(vencedor){
    
    document.querySelector(".jogador-area").classList.remove("area-perdedor");
    document.querySelector(".computador-area").classList.remove("area-vencedor");
    document.querySelector(".jogador-area").classList.remove("area-vencedor");
    document.querySelector(".computador-area").classList.remove("area-perdedor");

    if(vencedor == 1){
        document.querySelector("#resultado").textContent = "Jogador Venceu!!";
        document.querySelector(".jogador-area").classList.add("area-vencedor");
        document.querySelector(".computador-area").classList.add("area-perdedor");
    } else if(vencedor == 2){
        document.querySelector("#resultado").textContent = "Computador Venceu!!";
        document.querySelector(".jogador-area").classList.add("area-perdedor");
        document.querySelector(".computador-area").classList.add("area-vencedor");
    } else {
        document.querySelector("#resultado").textContent = "Empate!!";
        
    }

}