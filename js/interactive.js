$(function() {

   var windowSizeMoreThen =true;

   if($(window).resize(function(){

      if($(window).width()>991.98)
      {
         windowSizeMoreThen=true;
         
      }else
      {
         windowSizeMoreThen =false;
      }
   }));

  $(window).scroll(function () {
     if ($(this).scrollTop() > 5) {
        $(`#navbarResponsive`).addClass(`navbar--background`);
     }
     if ($(this).scrollTop() < 10 && windowSizeMoreThen) {
         $(`#navbarResponsive`).removeClass(`navbar--background`);
     }
  });
});

$('.navbar-toggler').click(function() {
   $(`#navbarResponsive`).addClass(`navbar--background`);
 });


 var slideIndex = 0;
//  showSlides(slideIndex);


 function plusSlides(n) {
   showSlides(slideIndex += n);
 }

 function minusSlides(n) {
   showSlides(slideIndex -= n);
 }




 function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("articles__articleBox");
  
   slides[slideIndex-1].className += " element_hide"; 
   slides[slideIndex+2].style.display = "block"; 

 }