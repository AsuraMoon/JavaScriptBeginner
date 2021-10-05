
var nbrRandom , nbrJoueur ;
const max = 500 ;

nbrRandom = Math.floor(Math.random() * Math.floor(max+1));
nbrJoueur = prompt(`Quel est votre chiffre? (compris entre 0 et ${max})`);


while(nbrJoueur != nbrRandom)
{
    if(nbrRandom>nbrJoueur)
    {
        nbrJoueur = prompt("Trop petit, le chiffre est plus grand");
    }
    else
    {
        nbrJoueur = prompt("Trop grand, le chiffre est plus petit");
    }
 }

alert ("GG");

