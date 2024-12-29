const prenom = document.getElementById("firstName");
const nom = document.getElementById("lastName");
const email = document.getElementById("email");
const motdepasse = document.getElementById("password");
const confirmermotdeoasse = document.getElementById("confirmer password");
const genre = document.getElementById("gender");
const pays = document.getElementById("country");
let btn = document.getElementById("btn");

btn.addEventListener("click" , verif);

function verif() {
    clearErrors();
    let hasError = false ;
    // verification du prenom
    if (prenom.value.trim()==="")  {
        showError(prenom,"Error : prénom requis.");
        hasError = true;
    }


 // verification du nom
 if (nom.value.trim()===""){
    showError(nom , "Error : Nom requis. " ) ;
    hasError = true ;
 }
 
 //verification email
 const emailPattren = /^[^\s@ ]+ @[^\s@]+\.[^\s@]+$/;
 if (!emailPattren.test(email.value.trim())) {
    showError(email , "Error : Email invalide .") ;
    hasError = true ;
 }
 // verification du mot de passe 
 if (motdepasse.value.trim ()=== "") {
    showError(motdepasse, " Error : mote de passe requis. ");
    hasError = true
 }
 // verification de la confirmatio, du mot passe 
 if (confirmermotdeoasse.value.trim()=== ""){
    showError(confirmermotdeoasse , "Error : confirmation du mot de passe requis .");
    hasError = true ;
 } else if (motdepasse.value !== confirmermotdeoasse.value){
    showError (confirmermotdeoasse , " Error : les mot de passe ne correspand pas .");
    hasError = true
 }
 //affichage d un message de succes si aucune erreur n est trouvée
 if (!hasError){
    alert("inscription réussie !");
 }
}
// fonction pour affiche un message d erreur 
function showError( inputfiled, message ){
    const errorMessage = document.createElement ("p");
    errorMessage.style.color = "red"; //definir la couleur rouge
    errorMessage.textContent = message ; //affiche le message d erruer
    inputfiled.parentMode.inserbefor(errorMessage. inputfiled.nextSibling); //insérer le message
}

//fonction pour effacer les message d erreur precédents
function clearErrors() {
    const errorMessage = document.querySelectorAll("p");
    errorMessage.forEach ((msg) => msg.remove());
} 
