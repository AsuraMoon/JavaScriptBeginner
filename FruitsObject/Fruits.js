let tablefruits=[];

let Orange = {
    name : "Orange",
    color : "Orange",
    size : "Moyen +"
};
let Pêche = {
    name : "Pêche",
    color : "Rose Pale",
    size : "Petit +"
};
let Fraise = {
    name : "Fraise",
    color : "Rouge",
    size : "Petit"
};
let Framboise = {
    name : "Framboise",
    color : "Violet",
    size : "Petit -"
};

tablefruits = [
    Fraise,
    Framboise,
    Orange,
    Pêche
]

const affichage = document.getElementById('affichage');


tablefruits.forEach(element => {
    
    let balise_ul = document.createElement('ul');
    let balise_li_name = document.createElement('li');
    let balise_li_color = document.createElement('li');
    let balise_li_size = document.createElement('li');
    affichage.appendChild(balise_ul);
    balise_ul.appendChild(balise_li_name);
    balise_ul.appendChild(balise_li_color);
    balise_ul.appendChild(balise_li_size);

     balise_li_name.textContent = element.name;
     balise_li_color.textContent = element.color;
     balise_li_size.textContent = element.size;



})


console.log(tablefruits);
console.log(Orange,Fraise,Framboise,Pêche)

