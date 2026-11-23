/*Affiche l'année courante dans le pied de page*/
let spanAnnee = document.getElementById("annee");
if (spanAnnee !== null) {
  spanAnnee.innerText = new Date().getFullYear();
}
