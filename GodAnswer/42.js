function num(nombre){
    if (nombre===42){
        alert("Voici le nobmre de la vérité absolue")
    }
    else{
        nombre = Number(prompt(`ceci n'est pas le nombre de la vérité absolue`))
        num(nombre);
    }  
  }
  
  var nombre = Number(prompt(`Entrer le chiffre de la vérité absolue a toutes choses`))
  num(nombre) ;
  