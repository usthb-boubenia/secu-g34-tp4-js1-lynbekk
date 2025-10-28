"use strict";
// Déclaration d'un tableau simple contenant des noms d'étudiants (vu en cours, slide 38)
const TabEtu = ["Etudiant1", "Etudiant2", "Etudiant3"];
// Déclaration d'un objet représentant un étudiant avec ses propriétés (vu en cours, slide 39)
const EtuOb = {
    nom: "John",
    prenom: "Doe",
    age: 30,
};
// Déclaration d'un tableau d'objets, chaque objet représentant un étudiant (vu en cours, slide 40)
const Tabobj = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];
// Fonctions pour afficher les données dans la console
function f1() {
    console.log(TabEtu); // Affiche le tableau d'étudiants
}
function f2() {
    console.log(EtuOb); // Affiche l'objet d'un étudiant
}
function f3() {
    console.log(Tabobj); // Affiche le tableau d'objets étudiants
}
