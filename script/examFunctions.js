'use strict';


function addMainFunctionality() {
    document.querySelector("#spela").addEventListener("click", function(oEvent) {
         oEvent.preventDefault(); // Avbryta default-beteendet för formuläret
         oEvent.stopPropagation(); // Avbryta att händelsen propageras
         let nickName = document.querySelector("#nickname"); 
         let msg = document.querySelector("#msg");
         if(nickName.value.length < 2){
             msg.textContent = 'Nickname  skall vara minst 2 tecken långt!';
             nickName.focus();
         }else{
            msg.textContent ='';
            oGameData.init();
            oGameData.startTimeInMilliseconds();
            document.querySelector('div').setAttribute('style', 'display: none;'); // Dölja div-elementet som innehåller form-elementet.
            createImgElements();
            addMouseEnterEventListenerOnImg();
            addTimerEvent();
         }
    });
}

function createImgElements() {
    for(let i =0 ; i<10; i++){
        let img = document.createElement('img');
        document.querySelector('main').appendChild(img);
        img.setAttribute('alt', oGameData.ghost.getAttribute('alt'));
        img.setAttribute('src', oGameData.ghost.getAttribute('src'));
        img.setAttribute('style', 'position: absolute; left: '+ oGameData.left().toString() + 'px; top:' + oGameData.top().toString() + 'px;');
       
    }
}

function addMouseEnterEventListenerOnImg() {
    let imgRef = document.querySelectorAll('main img');
    
    for(let i=0; i< imgRef.length ; i++){
        // add Listener for each img
        imgRef[i].addEventListener('mouseenter', function(){
            let altRef = imgRef[i].getAttribute('alt'); // Referens till *alt till aktuell img 
            if(altRef === oGameData.ghost.getAttribute('alt')){ // ifall den är gost
                imgRef[i].setAttribute('alt', oGameData.net.getAttribute('alt'));
                imgRef[i].setAttribute('src', oGameData.net.getAttribute('src'));
                oGameData.nbrOfCaughtGhosts++;
            }else{// ifall den är net
                imgRef[i].setAttribute('alt', oGameData.ghost.getAttribute('alt'));
                imgRef[i].setAttribute('src', oGameData.ghost.getAttribute('src'));
                oGameData.nbrOfCaughtGhosts--;
            }
            // spelaren vunnit (10 ghosts är i nätet )
            if(oGameData.nbrOfCaughtGhosts === imgRef.length ){
                oGameData.endTimeInMilliseconds();
                let nickName = document.querySelector("#nickname");
                let msg = document.querySelector("#msg");
                msg.textContent = nickName.value + '! Du klarade spelet på '+ oGameData.nbrOfMilliseconds().toString() +' millisekunder!';
                let mainRef = document.querySelector('main');
                // Tabort samtliga img-element som finns i main-elementet
                for(let j=0 ; j< imgRef.length ; j++){
                    mainRef.removeChild(imgRef[j]);
                }
                // Visa Div elementet
                document.querySelector('div').setAttribute('style', 'display: initial;');
                oGameData.timerId = null; // Stop the timer 
            }

        });
    }
}

function addTimerEvent() {


}

window.addEventListener('load', addMainFunctionality);
 
