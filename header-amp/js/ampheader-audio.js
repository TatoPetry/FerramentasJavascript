var player = document.getElementById('player');
var playerButton = document.getElementsByClassName('btn-onoff');
var playerButtonLiga = document.getElementById('on-off');
var playerButtonDesliga = document.getElementsByClassName('desliga');
var inputPlayer = document.getElementById('liga');
var playerOn = false;


function playerClick(){
    
    if(playerOn){
        desligaPlayer();
        playerOn = false;
        inputPlayer.removeAttribute('checked', 'checked');
        playerButtonLiga.classList.remove('ligadoo');
        
    } else {
        ligaPlayer();
        playerOn = true;
        inputPlayer.setAttribute('checked', 'checked');
        playerButtonLiga.classList.add('ligadoo');
        
    }
}

function ligaPlayer(){
   player.play();
}

function desligaPlayer(){
   player.pause();
}