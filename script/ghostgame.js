'use strict';

let oGameData = {
   
    //----------
    //Attribut som du skall använda för att lösa uppgiften.
    //----------

    //Referens till img-elementet med attributet alt = Ghost.
    ghost : document.querySelector('img[alt=Ghost]'),

    //Referens till img-elementet med attributet alt = Net.
    net : document.querySelector('img[alt=Net]'),

    //Referens till title-elementet i head-elementet.
    titleRef: document.querySelector('head title'),

    //Attribut som skall innehålla antalet fångade spöken.
    nbrOfCaughtGhosts : 0,

    //Attribut som skall innehålla tidsstämpel (antalet millisekunder sedan 1 januari 1970) för när spelet påbörjades.
    beginning : 0,

    //Attribut som skall innehålla tidsstämpel (antalet millisekunder sedan 1 januari 1970) för när spelet avslutades (då 10 spöken fångats).
    ending : 0,

    //Attribut som skall innehålla id:et för aktuell timer.
    timerId : null,
    
    //Attribut som skall innehålla antalet sekunder spelet pågått sedan spelstart.
    nbrOfSeconds : 0,
    
    //----------
    //Metoder som skall användas för att lösa uppgiften.
    //----------

    //Metod som initierar objektets attribut.
    init : function() {
        
        this.nbrOfCaughtGhosts = 0;
        this.beginning = 0;
        this.ending = 0;

        this.nbrOfSeconds = 0;
        this.timerId = null;
    },

    //Metod som räknar fram och returnerar ett numeriskt värde som skall utgöra left-koordinaten (CSS) för ett img-element.
    left : function() {

        let left = 0;
        if(this.ghost.width > this.net.width) {
            left = this.ghost.width;
        } else {
            left = this.net.width;
        }
        
        return Math.round(Math.random() * ( window.innerWidth - left )) + 1;
    },

    //Metod som räknar fram och returnerar ett numeriskt värde som skall utgöra top-koordinaten (CSS) för ett img-element.
    top : function() {

        let top = 0;
        if(this.ghost.height > this.net.height) {
            top = this.ghost.height;
        } else {
            top = this.net.height;
        }

        return Math.round(Math.random() * ( window.innerHeight - top )) + 1;
    },

    //Metod som hämtar antalet millisekunder sedan 1 januari 1970 och placerar värdet i beginning attributet.
    startTimeInMilliseconds : function() {
        this.beginning =  Date.now();
    },

    //Metod som hämtar antalet millisekunder sedan 1 januari 1970 och placerar värdet i ending attributet.
    endTimeInMilliseconds : function() {
        this.ending = Date.now();
    },

    //Metod som räknar ut och returnerar antalet millisekunder det tog att fånga tio spöken.
    nbrOfMilliseconds: function () {
        return this.ending - this.beginning;
    }

};
