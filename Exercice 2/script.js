"use strict";

// Données des étudiants
const Etudiants = ["Etudiant 1","Etudiant 2","Etudiant 3"];//declaration d'un tableau (slide 38)

// Fonction F1 - Tableau Etudiants 
function f1() {
 for(let i=0;i<=2;i++){ //On utilise une boucle (slide 44)
    console.log(Etudiants[i])
 }
    
}
//declaration d'un objet (slide 39)
const Studentsobj = [
    "nom1-prenom1-21",
    "nom2-prenom2-22", 
    "nom3-prenom3-23"
];
// Fonction F2 - Objet Etudiant 
function f2() {
    
    // Création d'objets étudiant
    const studentObjects = Studentsobj.map(student => {
        const [nom, prenom, age] = student.split('-');
        return {
            nom: nom,
            prenom: prenom,
            age: parseInt(age)
             
        };
    });
    
    console.log("👥 Objets étudiants créés:");
    studentObjects.forEach((etudiant, index) => {
        console.log(`Étudiant ${index + 1}:`, etudiant);
;
    });
}

// Fonction F3 - Tableau d'objets Etudiants (manipulation avancée)
function f3() {
    
    // Création du tableau d'objets
    const etudiants = Studentsobj.map((student, index) => {
        const [nom, prenom, age] = student.split('-');
        return {
            nom: nom.toUpperCase(),
            prenom: prenom.charAt(0).toUpperCase() + prenom.slice(1),
            age: parseInt(age)
           
        };
    });
    for(let i=0;i<=2;i++){
    console.log(etudiants[i]);
}

}
// Association des fonctions aux boutons
document.getElementById('btn1').addEventListener('click', f1);
document.getElementById('btn2').addEventListener('click', f2);
document.getElementById('btn3').addEventListener('click', f3);

