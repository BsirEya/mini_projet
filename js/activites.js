let champRecherche = document.getElementById("recherche");
let listeCategorie = document.getElementById("categorie");
let zoneCartes = document.getElementById("liste-cartes");
let compteur = document.getElementById("compteur");
let messageVide = document.getElementById("message-vide");
function afficherDetail(a) {
  document.getElementById("detail-titre").innerText = a.titre;
  let img = document.getElementById("detail-image");
  img.setAttribute("src", a.image);
  img.setAttribute("alt", a.alt);
  document.getElementById("detail-infos").innerText =
    a.categorie + " | " + a.lieu + " | " + a.duree + " | " + a.prix + " TND par personne";
  document.getElementById("detail-description").innerText = a.description;
}
function creerCarte(a) {
  let colonne = document.createElement("div");
  colonne.setAttribute("class", "col-12 col-md-6 col-lg-3");
  let carte = document.createElement("article");
  carte.setAttribute("class", "carte carte-catalogue h-100");
  let classeEtiquette = "s1";
  if (a.categorie === "Culture") {
    classeEtiquette = "s2";
  }
  if (a.categorie === "Nature") {
    classeEtiquette = "s3";
  }
  if (a.categorie === "Découverte") {
    classeEtiquette = "s4";
  }
  carte.innerHTML =
    '<div class="image"><img src="' + a.image + '" alt="' + a.alt + '"><span class="' + classeEtiquette + '">' + a.categorie + "</span></div>" +
    "<h3>" + a.titre + "</h3>" +
    "<p>" + a.lieu + " | " + a.duree + "</p>" +
    "<p>" + a.accroche + "</p>" +
    '<p class="prix">' + a.prix + " TND / personne</p>";
  let bouton = document.createElement("button");
  bouton.setAttribute("type", "button");
  bouton.setAttribute("data-bs-toggle", "modal");
  bouton.setAttribute("data-bs-target", "#modalDetail");
  bouton.innerText = "Voir les détails";
  bouton.onclick = function () {
    afficherDetail(a);
  };
  carte.appendChild(bouton);
  colonne.appendChild(carte);
  zoneCartes.appendChild(colonne);
}
function afficherActivites() {
  let texte = champRecherche.value.toLowerCase();
  let categorie = listeCategorie.value;
  let nombre = 0;
  zoneCartes.innerHTML = "";
  for (let i = 0; i < activites.length; i++) {
    let a = activites[i];
    let bonneCategorie = (categorie === "Toutes" || a.categorie === categorie);
    let bonTexte = (texte === "" ||
      a.titre.toLowerCase().includes(texte) ||
      a.lieu.toLowerCase().includes(texte));
    if (bonneCategorie && bonTexte) {
      creerCarte(a);
      nombre = nombre + 1;
    }
  }
  compteur.innerText = nombre;
  if (nombre === 0) {
    messageVide.style.display = "block";
  } else {
    messageVide.style.display = "none";
  }
}
champRecherche.oninput = afficherActivites;
listeCategorie.onchange = afficherActivites;
// Affichage des activités
afficherActivites();
