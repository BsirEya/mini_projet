let search=document.getElementById("search");
let buttons=document.querySelectorAll("[data-filter]");
let cards=document.querySelectorAll(".card");
let resultCount=document.getElementById("resultCount");
let noResults=document.getElementById("noResults");
let activeFilter="all";
function filterActivities(){
    let searchText=search.value.toLowerCase();
    let count=0;
    for (let i=0;i<cards.length;i++){
        let title=cards[i].querySelector(".cardtitle").innerText.toLowerCase();
        let paragraphs=cards[i].getElementsByTagName("p");
        let place=paragraphs[1].innerText.toLowerCase();
        let category=cards[i].getAttribute("data-category");
        let searchMatch=title.includes(searchText) || place.includes(searchText);
        let categoryMatch=activeFilter==="all" || category===activeFilter;
        if (searchMatch && categoryMatch){
            cards[i].parentElement.style.display="";
            count++;
        } else {
            cards[i].parentElement.style.display="none";
        }
    }
    resultCount.innerText=count + " activités trouvées";
    if (count===0){
        noResults.style.display="block";
    } else{
        noResults.style.display="none";

    }
}
search.addEventListener("input", filterActivities);
for (let i=0;i<buttons.length;i++) {
    buttons[i].addEventListener("click",function(){
        activeFilter=buttons[i].getAttribute("data-filter");
        filterActivities();
    });

}
filterActivities();
let activities=[
    { id: "A01",
    title: "Découverte de la médina",
    place: "Nabeul",
    category: "Culture",
    duration: "2h",
    price: 20,
    description: "Découvrez la médina de Nabeul et ses ruelles traditionnelles. Explorez les boutiques locales et admirez l'architecture de la ville. Apprenez davantage sur l'histoire et les traditions de cette région."
    },
    {
        id: "A02",
        title: "Atelier d’initiation à la poterie",
        place: "Nabeul",
        category: "Artisanat",
        duration: "1h30",
        price: 35,
        description: "Participez à un atelier d'initiation à la poterie à Nabeul. Découvrez les techniques traditionnelles et réalisez votre propre création. Profitez d'une expérience créative avec les artisans locaux."
    },
    {
        id: "A03",
        title: "Parcours découverte de Kerkouane",
        place: "Kerkouane",
        category: "Culture",
        duration: "2h30",
        price: 30,
        description: "Visitez le site archéologique de Kerkouane. Découvrez les vestiges d'une ancienne cité punique et son histoire. Explorez ce lieu historique et apprenez davantage sur la civilisation punique."
    },
    {
        id: "A04",
        title: "Randonnée découverte",
        place: "Djebel Abderrahmane",
        category: "Nature",
        duration: "3h",
        price: 25,
        description: "Partez à la découverte du Djebel Abderrahmane. Profitez des paysages naturels et de l'air frais. Observez la beauté de la nature pendant cette randonnée."
    },
    {
        id: "A05",
        title: "Circuit du littoral",
        place: "Kélibia",
        category: "Nature",
        duration: "3h",
        price: 40,
        description: "Découvrez les magnifiques paysages du littoral de Kélibia. Profitez d'une promenade pour admirer la mer et les plages. Découvrez les beaux endroits de cette région côtière."
    },
    {
        id: "A06",
        title: "Peinture sur céramique",
        place: "Nabeul",
        category: "Artisanat",
        duration: "2h",
        price: 25,
        description: "Découvrez l'art de la peinture sur céramique à Nabeul. Apprenez à décorer des objets et exprimez votre créativité. Réalisez une décoration personnelle avec différentes couleurs."
    },
    {
        id: "A07",
        title: "Découverte d’un marché local",
        place: "Nabeul",
        category: "Découverte",
        duration: "1h30",
        price: 15,
        description: "Explorez un marché local de Nabeul. Découvrez les produits traditionnels et l'ambiance des commerçants. Découvrez les habitudes et les spécialités de la vie locale."
    },
    {
        id: "A08",
        title: "Promenade photographique",
        place: "Hammamet",
        category: "Découverte",
        duration: "2h",
        price: 30,
        description: "Profitez d'une promenade photographique à Hammamet. Découvrez les beaux paysages et prenez de belles photos. Gardez des souvenirs des endroits visités."
    }
];
let detailButtons=document.querySelectorAll(".card .btn");
let modalTitle=document.getElementById("modalTitle");
let modalDescription=document.getElementById("modalDescription");
let activityModal=new bootstrap.Modal(
    document.getElementById("activityModal")
);
for (let i=0;i<detailButtons.length; i++){
    detailButtons[i].addEventListener("click",function(){
       modalTitle.innerText=activities[i].title;
    modalDescription.innerText=activities[i].description;
        activityModal.show();

});
} 
const decouverteSlider=document.getElementById("decouverteSlider");
const decouverteNextBtn=document.getElementById("nextBtn");
const decouvertePrevBtn=document.getElementById("prevBtn");
if (decouverteSlider && decouverteNextBtn && decouvertePrevBtn){
    decouverteNextBtn.addEventListener("click",function(){
        decouverteSlider.scrollBy({
            left: 325,
            behavior: "smooth"
        });
    });
    decouvertePrevBtn.addEventListener("click",function(){
        decouverteSlider.scrollBy({
            left: -325,
            behavior: "smooth"
        });
    });
}

