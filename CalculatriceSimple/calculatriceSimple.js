
function add(nbr1 , nbr2){
    return nbr1 + nbr2;
  };
  
  function substraction(nbr1 , nbr2){
    return nbr1 - nbr2;
  };
  
  function multiply(nbr1 , nbr2){
    return nbr1 * nbr2;
  };
  
  function diviser(nbr1 , nbr2){
    return nbr1 / nbr2;
  };
  
  nbr1 = Number(prompt(`Quel est le premier nombre de l'opération`));
  nbr2 = Number(prompt(`Quel est le deuxième nombre de l'opération`));
  
  resultadd = add(nbr1 , nbr2)
  resultsub = substraction(nbr1 , nbr2)
  resultmult = multiply(nbr1 , nbr2)
  resultdiv = diviser(nbr1 , nbr2)
  
  console.log (resultadd)
  console.log (resultsub)
  console.log (resultmult)
  console.log (resultdiv)
  
  opérateur = prompt(`Choisissez votre type opération (+ , - , * , /)`)
  
  switch (opérateur) {
    case `/`:
      // Instructions à exécuter lorsque le résultat
      // de l'expression correspond à div
      alert (`Vous avez demandé une division donc le resultat est ${resultdiv}`);
      break;
    case `-`:
      // Instructions à exécuter lorsque le résultat
      // de l'expression correspond à sous
      alert (`Vous avez demandé une soustraction donc le resultat est ${resultsub}`);
      break;
    case `*`:
      // Instructions à exécuter lorsque le résultat
      // de l'expression à mult
      alert (`Vous avez demandé une multiplication donc le resultat est ${resultmult}`);
      break;
      default:
      // Instructions à exécuter lorsqu'aucune des valeurs
      // ne correspond donc addition
      alert (`Vous avez demandé une addition donc le resultat est ${resultadd}`);
      break;
  }
  