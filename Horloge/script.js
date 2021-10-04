var hourDiv = document.querySelector('.hour');
var dateDiv = document.querySelector('.date');

var affichageHeure = function(){
    // Déclaration des variables qui seront utilisées : 
    var today, year, listMonth, month, listDays, dayNumber, dayName, hour, minutes, seconds, twoNumbers;

    // Récupérer la date actuelle : 
    today = new Date();

    // Récupérer l'année : 
    year = today.getFullYear();

    //Récupérer le mois : 
    listMonth = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Aoû", "Sep", "Oct", "Nov", "Déc"];
    month = listMonth[today.getMonth()]; //getMonth() donne l'index 1 comme on est en Février, ce qui donne la valeur "Février" depuis notre liste

    // Récupérer le numéro du jour du month : 
    dayNumber = today.getDate(); //donne 29

    // Récupérer le jour. Attention la semaine commence un dimanche en Javascript : 
    listDays = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
    dayName = listDays[today.getDay()]; // getDay() donne index 6, donc samedi


    //Afficher les nums avec deux chiffres : 
    twoNumbers = function(element){
        if(element < 10){
            return element = "0" + element;
        } else {
            return element;
        }
    }

    // Récupérer les heures : 
    hour = twoNumbers(today.getHours());

    // Récupérer les minutes : 
    minutes = twoNumbers(today.getMinutes());

    // Récupérer les secondes : 
    seconds = twoNumbers(today.getSeconds());

    //Affichage dans nos DIV du HTML : 
    hourDiv.textContent = hour + ":" + minutes + ":" + seconds;
    dateDiv.textContent = dayName + ", " + dayNumber + " " + month + " " + year;

    // Lancer la fonction affichage heure toutes les 1000 ms, soit toute les secondes : 
    setTimeout(affichageHeure, 1000);
}

//Lancer la fonction une fois au début : 
affichageHeure();
