"use strict"; 
// Tableau d'objets représentant les étudiants (vu en cours, slide 18)
const students = [
    { id: 1000, firstName: "JOHN", lastName: "DOE", grade: 14, absence: 5 },
    { id: 2000, firstName: "BOB", lastName: "CARLTON", grade: 7, absence: 1 },
    { id: 3000, firstName: "RAYANE", lastName: "SMITH", grade: 13, absence: 3 }
];
// Fonction principale de délibération (vu en cours, slide 28)
function deliberation() {
    // Parcours du tableau avec une boucle for...of (vu en cours, slide 33)
    for (const student of students) {
        const passed = verifierNote(student.grade); // Appel de la fonction pour vérifier la note

        // Affiche si l’étudiant est admis ou ajourné selon sa note (vu en cours, slide 40)
        if (passed) {
            console.log(`Étudiant ${student.firstName} ${student.lastName} (ID: ${student.id}) : Admis`);
        } else {
            console.log(`Étudiant ${student.firstName} ${student.lastName} (ID: ${student.id}) : Ajourné`);
        }
    }
}
// Fonction qui vérifie si la note est suffisante (vu en cours, slide 31)
// Retourne true si la note est >= 10 (vu en cours, slide 37)
function verifierNote(note) {
    return note >= 10;
}
