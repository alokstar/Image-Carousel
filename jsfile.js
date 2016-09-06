/**
 * Created by Alok on 6/3/2016.
 */
var slideIndex = 1;   //initializing the slide index
showSlides(slideIndex);  //calling the function

function plusSlides(n) {     //function for next/previous slide
    showSlides(slideIndex += n);
}

function currentSlide(n) {  // when clicking on the dot
    showSlides(slideIndex = n);
}

function showSlides(n) {    //event handler function
    var i;
    var slides = document.getElementsByClassName("slidesFade");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length} ;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
