// document.getElementById("CLICK").addEventListener("click",function(){

//     if(document.getElementsByClassName("sliderItem")[0].classList.contains("active")){
//         document.getElementsByClassName("sliderItem")[1].classList.add("active")
//         document.getElementsByClassName("sliderItem")[0].classList.remove("active")
//     }
    
//     else if(document.getElementsByClassName("sliderItem")[1].classList.contains("active")){
//         document.getElementsByClassName("sliderItem")[2].classList.add("active")
//         document.getElementsByClassName("sliderItem")[1].classList.remove("active")
//     }
    
//     else if(document.getElementsByClassName("sliderItem")[2].classList.contains("active")){
//         document.getElementsByClassName("sliderItem")[3].classList.add("active")
//         document.getElementsByClassName("sliderItem")[2].classList.remove("active")
//     }
    
//     else if(document.getElementsByClassName("sliderItem")[3].classList.contains("active")){
//         document.getElementsByClassName("sliderItem")[0].classList.add("active")
//         document.getElementsByClassName("sliderItem")[3].classList.remove("active")
//     }

// });



// function changeSlider(){
    
//     if(document.getElementsByClassName("sliderItem")[0].classList.contains("active")){
//         document.getElementsByClassName("sliderItem")[1].classList.add("active")
//         document.getElementsByClassName("sliderItem")[0].classList.remove("active")
//     }
    
//     else if(document.getElementsByClassName("sliderItem")[1].classList.contains("active")){
//         document.getElementsByClassName("sliderItem")[2].classList.add("active")
//         document.getElementsByClassName("sliderItem")[1].classList.remove("active")
//     }
    
//     else if(document.getElementsByClassName("sliderItem")[2].classList.contains("active")){
//         document.getElementsByClassName("sliderItem")[3].classList.add("active")
//         document.getElementsByClassName("sliderItem")[2].classList.remove("active")
//     }
    
//     else if(document.getElementsByClassName("sliderItem")[3].classList.contains("active")){
//         document.getElementsByClassName("sliderItem")[0].classList.add("active")
//         document.getElementsByClassName("sliderItem")[3].classList.remove("active")
//     }
// }

// setInterval(changeSlider,3000);


var slideIndex = 0;

showSlides();
var slides,dots;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 7000); // Change image every 7 seconds
}

function plusSlides(position) {
    slideIndex +=position;
    if (slideIndex> slides.length){
        slideIndex = 1
    }else if(slideIndex<1){
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function currentSlide(index) {
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";  
    dots[index-1].className += " active";
}










var slideIndex = 0;

show_Slides();
var slides,dots;

function show_Slides() {
    var i;
    slides = document.getElementsByClassName("my-Slides");
    dots = document.getElementsByClassName("dot");
    for (i =0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(show_Slides, 5000); // Change image every 4 seconds
}


function PlusSlides(position) {
    slideIndex +=position;
    if (slideIndex> slides.length){
        slideIndex = 1;
    }else if(slideIndex<1){
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}


function currentSlide(index) {
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";  
    dots[index-1].className += " active";
}
