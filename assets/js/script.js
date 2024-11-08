// BANNER CAROUSEL

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

//   CACHER LES IMAGES NON-ACTIF

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

//   COULEUR DU POINT ACTIF

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

//   CHANGEMENT D'AFFICHAGE DE L'IMAGE ET DU POINT

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

//   DEFILEMENT DU CAROUSEL

  // slideIndex++;
  // // if (slideIndex > slides.length) {slideIndex = 1}
  // // slides[slideIndex-1].style.display = "block";
  // setTimeout(showSlides, 10000); 
}

// SIGNALEMENT

const title = document.getElementById("signalement-title");
 function blinkTitle() {       
                    title.style.visibility = (title.style.visibility === 'hidden') ? 'visible' : 'hidden';
                }
    setInterval(blinkTitle, 500);
    