# Cap Bon Explorer - Mini-projet Web 2026-2027 (HTML5 + CSS3 + JavaScript + Bootstrap 5)

## Lancer le site
Ouvrir `index.html` dans un navigateur. Une connexion Internet est nécessaire pour Bootstrap (CDN).

## Arborescence
- index.html, activites.html, agenda.html, reservation.html, contact.html
- css/style.css (CSS principal), css/ajout.css (styles des pages activités, réservation, contact)
- js/donnees.js (tableau des 8 activités), app.js (année du pied de page),
  activites.js (catalogue, recherche, filtre, fiche détaillée),
  reservation.js (prix, remise, validation du formulaire),
  contact.js (FAQ / formulaire de contact)
- images/ (logo, bannière, images des 8 activités)
- docs/rapport.pdf

## Fonctionnalités
- Catalogue de 8 activités avec recherche par titre/lieu et filtre par catégorie (mise à jour pendant la saisie)
- Fiche détaillée d'une activité (modal Bootstrap)
- Simulation de réservation : prix = prix unitaire x participants (1 à 6), remise de 10 % à partir de 4 participants
- Validation du formulaire : nom, prénom, e-mail, téléphone, activité, date non passée, participants, case de consentement
- Page Contact avec FAQ (accordéon Bootstrap) et formulaire de contact

## Remarques
- JavaScript du cours uniquement (DOM, événements, Date, Math, tableaux, chaînes), sans `$` ni bibliothèque.
- Hors cours : la propriété `.checked` (cases à cocher), utilisée dans reservation.js.
- Données et tarifs fictifs : aucun paiement, aucune donnée envoyée.

## Sources des images
Indiquer ici la source et la licence de chaque photo (a01 à a05, a07, a08,carte, banniere, logo).

