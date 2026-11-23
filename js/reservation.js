/* reservation.js : simulateur de prix et contrôle du formulaire (page reservation.html) */
let selectActivite = document.getElementById("activite");
let champParticipants = document.getElementById("participants");
let champDate = document.getElementById("date-souhaitee");
let zoneMessages = document.getElementById("messages");
let zoneRecap = document.getElementById("recapitulatif");
// Remplit la liste déroulante avec les 8 activités
for (let i = 0; i < activites.length; i++) {
  let option = document.createElement("option");
  option.value = activites[i].id;
  option.innerText = activites[i].titre + " - " + activites[i].lieu + " (" + activites[i].prix + " TND)";
  selectActivite.appendChild(option);
}
// Retourne l'activité dont l'identifiant est donné
function trouverActivite(id) {
  for (let i = 0; i < activites.length; i++) {
    if (activites[i].id === id) {
      return activites[i];
    }
  }
  return null;
}
// Arrondit à 2 décimales
function arrondir(x) {
  return Math.round(x * 100) / 100;
}
// Date du jour au format AAAA-MM-JJ
function dateDuJour() {
  let d = new Date();
  let mois = d.getMonth() + 1;
  let jour = d.getDate();
  let texte = d.getFullYear() + "-";
  if (mois < 10) {
    texte = texte + "0";
  }
  texte = texte + mois + "-";
  if (jour < 10) {
    texte = texte + "0";
  }
  texte = texte + jour;
  return texte;
}
// Affiche les montants dans le tableau "Prix estimé"
function afficherPrix(unitaire, sousTotal, remise, total) {
  document.getElementById("prix-unitaire").innerText = unitaire;
  document.getElementById("sous-total").innerText = sousTotal;
  document.getElementById("remise").innerText = remise;
  document.getElementById("total").innerText = total;
}
// Calcule le prix : sous-total = prix x participants ; remise 10 % pour 4 personnes
function calculer() {
  let activite = trouverActivite(selectActivite.value);
  let n = Number(champParticipants.value);
  if (activite === null) {
    afficherPrix(0, 0, 0, 0);
    return;
  }
  if (champParticipants.value === "" || Number.isNaN(n) || n < 1 || n > 6) {
    afficherPrix(activite.prix, 0, 0, 0);
    return;
  }
  let sousTotal = activite.prix * n;
  let remise = 0;
  if (n >= 4) {
    remise = sousTotal * 0.1;
  }
  let total = sousTotal - remise;
  afficherPrix(activite.prix, arrondir(sousTotal), arrondir(remise), arrondir(total));
}
// Vérifie le formulaire et affiche les erreurs
function valider() {
  let erreurs = [];
  let nom = document.getElementById("nom").value;
  let prenom = document.getElementById("prenom").value;
  let email = document.getElementById("email").value;
  let telephone = document.getElementById("telephone").value;
  let idActivite = selectActivite.value;
  let date = champDate.value;
  let n = Number(champParticipants.value);
  if (nom === "") {
    erreurs.push("Le nom est obligatoire.");
  }
  if (prenom === "") {
    erreurs.push("Le prénom est obligatoire.");
  }
  // e-mail : un "@" qui n'est pas au début, puis un "." au milieu du domaine
  let arobase = email.indexOf("@");
  let domaine = email.slice(arobase + 1);
  let emailValide = (arobase > 0 && !email.includes(" ") && !domaine.includes("@") &&
    domaine.indexOf(".") > 0 && domaine.indexOf(".") < domaine.length - 1 &&
    domaine.slice(domaine.length - 1) !== ".");
  if (!emailValide) {
    erreurs.push("L'adresse e-mail n'est pas valide (exemple : nom@exemple.com).");
  }
  if (telephone === "") {
    erreurs.push("Le numéro de téléphone est obligatoire.");
  }
  if (idActivite === "") {
    erreurs.push("Veuillez choisir une activité.");
  }
  if (date === "") {
    erreurs.push("Veuillez choisir une date.");
  } else if (date < dateDuJour()) {
    erreurs.push("La date souhaitée est déjà passée : choisissez une date à partir d'aujourd'hui.");
  }
  if (champParticipants.value === "" || Number.isNaN(n) || n < 1 || n > 6 || n !== Math.round(n)) {
    erreurs.push("Le nombre de participants doit être un entier entre 1 et 6.");
  }
  if (!document.getElementById("accepte").checked) {
    erreurs.push("Vous devez cocher la case des conditions de simulation.");
  }
  // Cas des erreurs : on bloque et on explique
  if (erreurs.length > 0) {
    let html = "<b>Merci de corriger les points suivants :</b><ul>";
    for (let i = 0; i < erreurs.length; i++) {
      html = html + "<li>" + erreurs[i] + "</li>";
    }
    html = html + "</ul>";
    zoneMessages.innerHTML = html;
    zoneMessages.style.display = "block";
    zoneRecap.style.display = "none";
    return;
  }
  // Cas valide
  calculer();
  let activite = trouverActivite(idActivite);
  let type = "individuel";
  if (document.getElementById("type-famille").checked) {
    type = "famille";
  }
  if (document.getElementById("type-groupe").checked) {
    type = "groupe";
  }
  let dateFr = date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
  zoneRecap.innerHTML ="<b>Récapitulatif de la simulation</b><ul>" +
  "<li>Activité : " + activite.titre + " (" + activite.lieu + ")</li>" +
  "<li>Date : " + dateFr + "</li>" +
  "<li>Participants : " + n + " (" + type + ")</li>" +
  "<li>Total : " + document.getElementById("total").innerText + " TND</li>" +
  "</ul><p>Simulation enregistrée localement à l'écran : aucune réservation réelle n'a été effectuée.</p>";
  zoneRecap.style.display = "block";
  zoneMessages.style.display = "none";
}
// Réinitialiser : le bouton type="reset" vide les champs, on nettoie le reste
function reinitialiser() {
  zoneMessages.style.display = "none";
  zoneMessages.innerHTML = "";
  zoneRecap.style.display = "none";
  zoneRecap.innerHTML = "";
  afficherPrix(0, 0, 0, 0);
}
selectActivite.onchange = calculer;
champParticipants.oninput = calculer;
champParticipants.onchange = calculer;
document.getElementById("btn-calculer").onclick = calculer;
document.getElementById("btn-valider").onclick = valider;
document.getElementById("btn-reset").onclick = reinitialiser;
// La date minimale proposée est aujourd'hui
champDate.setAttribute("min", dateDuJour());
