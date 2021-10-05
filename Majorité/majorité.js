
var Prénom , Age , Majorité ;

Prénom = String(prompt("Quel est votre prénom ?")) ;
Age = Number(prompt("Quel est votre age ?")) ;

if (Age > 18) {
  alert (`Bonjour ${Prénom} Vous avez ${Age} Ans donc vous êtes Majeur`)
} else {
  alert (`Bonjour ${Prénom} Vous avez ${Age} Ans donc vous êtes Mineur`)
}