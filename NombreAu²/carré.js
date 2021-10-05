function carre(nbr) {
    return nbr * nbr;
  }
  
  result = carre(Number(prompt(`écrire un nombre dont vous cherchez le carré : `)));
  alert(result);
  
  
  function exponentiel(nbrExpo , exposant) {
    return (Math.pow(nbrExpo,exposant));
  }
  
  nbrExpo = prompt("entre un nombre")
  exposant = prompt("entre un exposant")
  resultExpo = exponentiel(nbrExpo , exposant)
  
  alert (resultExpo);