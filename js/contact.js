// verification du Formulaire
let formContact = document.getElementById("form-contact");
let confirmation = document.getElementById("confirmation-contact");
formContact.onsubmit = function (event) {
  event.preventDefault();
  let nom = document.getElementById("c-nom").value;
  confirmation.innerHTML = "<b>Merci " + nom + " !</b> Votre message a été simulé à l'écran : aucun message réel n'a été envoyé.";
  confirmation.style.display = "block";
  document.getElementById("c-nom").value = "";
  document.getElementById("c-email").value = "";
  document.getElementById("c-sujet").value = "";
  document.getElementById("c-message").value = "";
};
document.getElementById("btn-effacer").onclick = function () {
  confirmation.style.display = "none";
};
