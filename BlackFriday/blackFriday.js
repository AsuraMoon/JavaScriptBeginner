var prix;
prix = prompt("Bonjour, Quel est le Prix de base ? ");
var taux;
taux = prompt("Et de combien est la reduction ? ");
var reduc;
reduc = prix*taux/100;
var prixFin;
prixFin = prix-reduc;
alert(`Réduction : ${reduc} $ Voici le prix final : ${prixFin} $`)
