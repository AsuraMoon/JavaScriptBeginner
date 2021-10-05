var compteur = 0
var nbr = Number(prompt(`Entrer la variable dans la conjecture de Syracuse`))

function Pair(nbr){
  return nbr % 2 === 0;
}

function Syracuse(n){
  while(n!=1){
    if (Pair(n)){
      n = n/2;
    }
    else{
      n = n*3+1;
    }
    compteur++;
  }
  return compteur;
}

let result = Syracuse(nbr)

alert (`La conjecture de syracuse est atteinte en ${compteur} opération`)