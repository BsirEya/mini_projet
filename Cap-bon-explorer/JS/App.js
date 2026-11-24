let contactForm = document.getElementById("contactForm");
let contactNom=document.getElementById("contactNom");
let contactEmail=document.getElementById("contactEmail");
let contactSujet=document.getElementById("contactSujet");
let contactMessage=document.getElementById("contactMessage");
let contactError=document.getElementById("contactError");
let contactSuccess=document.getElementById("contactSuccess");
contactForm.addEventListener("submit",function(event){
    event.preventDefault();
    contactError.classList.add("d-none");
    contactSuccess.classList.add("d-none");
    if(!contactForm.checkValidity()){
        contactForm.reportValidity();
        return;
    }
    contactSuccess.classList.remove("d-none");
});
contactForm.addEventListener("reset",function(){
    contactError.classList.add("d-none");
    contactSuccess.classList.add("d-none");
});
