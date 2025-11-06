"use strict";

// Données des étudiants
const students = [
    { id: 1000, prenom: "JOHN", nom: "DOE", note: 14, groupe: 5 },
    { id: 2000, prenom: "BOB", nom: "CARLTON", note: 7, groupe: 1 },
    { id: 3000, prenom: "RAYANE", nom: "SMITH", note: 13, groupe: 3 }
];

// Fonction B - Prend un paramètre float et retourne un booléen
function fonctionB(moyenne) {
    return moyenne >= 10.0;
}

// Fonction A - Appelle la fonction B
function fonctionA() {
    
    students.forEach(etudiant => {
        const estAdmis = fonctionB(etudiant.note);
        let resultat

        if(estAdmis) {//on utilise le bloc if (slide 42)
             resultat = "ADMIS"
        } else {
            resultat = "AJOURNE"
        }
        
        console.log(`${etudiant.prenom} ${etudiant.nom}  - ${resultat}`);
    });
    
}

// Association de la fonction au bouton
document.getElementById('deliberationBtn').addEventListener('click', fonctionA);

// Message d'initialisation
console.log("✅ Script Exercice 3 chargé avec succès");
console.log("🎯 Cliquez sur le bouton 'Délibération' pour lancer le processus");
console.log("📊 Données des étudiants disponibles:");
console.table(students);
console.log("===================================");