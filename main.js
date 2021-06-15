let myBar = document.getElementById('bar');
let myLogin = document.getElementById('login');
let myLink = document.querySelectorAll(".link");
let myGlob = document.getElementById('global');
let i;

window.onscroll = function () {
	if (window.pageYOffset < 100) {
		myBar.style.position = 'absolute';
		myBar.style.backgroundColor = 'transparent';
		myLogin.style.borderColor = '#fff';
		myGlob.src = 'images/globe.png';
		for (i = 0; i < myLink.length; i++) {
			myLink[i].style.color = '#fff';
		}
	} else {
			myBar.style.position = 'fixed';
			myBar.style.backgroundColor = '#fff';
			myLogin.style.borderColor = '#000';
			myGlob.src = 'images/globe-grey.png';
			for (i = 0; i < myLink.length; i++) {
				myLink[i].style.color = '#000';
			}
		}
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("img-slider");
  var dots = document.getElementsByClassName("image-button");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}