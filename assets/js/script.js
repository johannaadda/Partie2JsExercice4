

//addEventListener écoute l'évènement load de notre page (window)
// Au chargement de ma page tu exécutes la fonction loadPage
window.addEventListener('load', loadPage);
// La fonction loadPage permet de rendre invisible la section 'travels' au chargement de la page
function loadPage(){
  // rendre invisible ma section travels
  document.getElementById('travels').style.visibility = 'hidden';
}

// Au scroll de ma page j'active la fonction visibilityElementTravels
window.addEventListener('scroll', visibilityElementTravels);
// La fonction visibilityElementTravels permet de rendre visible la section 'travels' au scroll de la page
function visibilityElementTravels(){
  // Je stock dans scrollValue la valeur (en pixel) du scroll vertical (scrollY) de ma page (window)
  var scrollValue = window.scrollY;
  // J'affiche dans ma console le résultat de window.scrollY stocké dans ma variable scrollValue
  console.log(scrollValue);
  // Si la valeur de scrollValue est supérieur à 290px alors
  if(scrollValue > 290){
    // je rend visible ma section travels
    document.getElementById('travels').style.visibility = 'visible';
  }
}
