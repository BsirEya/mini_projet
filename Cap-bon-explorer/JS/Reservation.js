let form=document.getElementById("réservation");
let nom=document.querySelector('[name="nom"]');
let prenom=document.querySelector('[name="prenom"]');
let email=document.getElementById("email");
let telephone=document.getElementById("telephone");
let activite=document.getElementById("activite");
let date=document.getElementById("date");
let participants=document.getElementById("participants");
let consentement=document.getElementById("consentement");
let prixUnitaire=document.getElementById("prixUnitaire");
let sousTotal=document.getElementById("sousTotal");
let reduction=document.getElementById("reduction");
let total=document.getElementById("total");
let calculateBtn=document.getElementById("calculateBtn");
let resetBtn=document.getElementById("resetBtn");
let errorMessage=document.getElementById("errorMessage");
let reservationResult=document.getElementById("reservationResult");
let resultText=document.getElementById("resultText");
let today=new Date();
let year=today.getFullYear();
let month=String(today.getMonth()+1).padStart(2,"0");
let day=String(today.getDate()).padStart(2,"0");
date.min=year + "-" + month + "-" + day;
function calculatePrice(){
    let price=Number(activite.value);
    let numberParticipants=Number(participants.value);
    let subtotal=price*numberParticipants;
    let discount=0;
    if(numberParticipants>=4){
        discount=subtotal*0.10;
    }
    let finalTotal=subtotal-discount;
    prixUnitaire.textContent=price + " TND";
    sousTotal.textContent=subtotal + " TND";
    reduction.textContent=discount + " TND";
    total.textContent=finalTotal + " TND";
    return finalTotal;
}
activite.addEventListener("change", calculatePrice);
participants.addEventListener("change", calculatePrice);
function validateForm(){
    if(nom.value.trim() === ""){
        return "Veuillez saisir votre nom.";
    }
    if(prenom.value.trim() === ""){
        return "Veuillez saisir votre prénom.";
    }
    if(email.value.trim() === ""){
        return "Veuillez saisir votre adresse e-mail.";
    }
    if(!email.checkValidity()){
        return "Veuillez saisir une adresse e-mail valide.";
    }
    if(telephone.value.trim() === ""){
        return "Veuillez saisir votre numéro de téléphone.";
    }
    let phone = telephone.value.replace(/[\s-]/g, "");
    if(!/^(\+216)?[0-9]{8}$/.test(phone)){
        return "Veuillez saisir un numéro de téléphone valide.";
    }
    if(activite.value === ""){
        return "Veuillez choisir une activité.";
    }
    if(date.value === ""){
        return "Veuillez choisir une date.";
    }
    if(date.value<date.min){
        return "La date ne peut pas être dans le passé.";
    }
    if(participants.value===""){
        return "Veuillez choisir le nombre de participants.";
    }
    let typeReservation=document.querySelector(
        'input[name="typeReservation"]:checked'
    );
    if(typeReservation === null) {
        return "Veuillez choisir le type de réservation.";
    }
    if(!consentement.checked) {
        return "Veuillez accepter les conditions de réservation.";
    }
    return "";
}
calculateBtn.addEventListener("click", function(){
    errorMessage.classList.add("d-none");
    reservationResult.classList.add("d-none");
    let error=validateForm();
    if (error !== "") {
        errorMessage.textContent=error;
        errorMessage.classList.remove("d-none");
        return;
    }
    let finalTotal=calculatePrice();
    let selectedActivity=activite.options[activite.selectedIndex];
    let activityName=selectedActivity.getAttribute("data-name");
    let typeReservation=document.querySelector(
        'input[name="typeReservation"]:checked'
    );
    resultText.textContent =
        "Nom : " + nom.value +
        " | Prénom : " + prenom.value +
        " | Activité : " + activityName +
        " | Date : " + date.value +
        " | Participants : " + participants.value +
        " | Type : " + typeReservation.value +
        " | Total : " + finalTotal + " TND";
    reservationResult.classList.remove("d-none");
});
resetBtn.addEventListener("click",function(){
    errorMessage.classList.add("d-none");
    reservationResult.classList.add("d-none");
    prixUnitaire.textContent="0 TND";
    sousTotal.textContent="0 TND";
    reduction.textContent="0 TND";
    total.textContent="0 TND";
});
