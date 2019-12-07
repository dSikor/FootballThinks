$(function() {

   var indexMidlleShow = 1;
   var width = $(window).width(); 

   function plusSlides(n) {

      if((width <= 991.98))
      {
         showSliderResponsive(indexMidlleShow += n);
      }else{
         showSlider(indexMidlleShow += n);
      }  
   }

function hideAllArticles(articles)
{
   for (i = 0; i < articles.length; i++) {
   articles[i].style.display = "none";
   }
}

function showSlider(n)
{
   var i;
   var slides = document.getElementsByClassName("articles__articleBox");
   if (n > slides.length-2) {indexMidlleShow = slides.length-2}
   if (n < 1) {indexMidlleShow = 1}
   hideAllArticles(slides);
   slides[indexMidlleShow-1].style.display = "block";
   slides[indexMidlleShow].style.display = "block";
   slides[indexMidlleShow+1].style.display = "block";
}


function showSliderResponsive(n)
{
   var i;
   var slides = document.getElementsByClassName("articles__articleBox");
   if (n > slides.length) {indexMidlleShow = slides.length}
   if (n < 1) {indexMidlleShow = 1}
   hideAllArticles(slides);
   slides[indexMidlleShow-1].style.display = "block";
  
}

  

   if ((width <= 991.98 )) {
      showSliderResponsive(indexMidlleShow);
     }else {
      showSlider(indexMidlleShow);
     }
   
     $(".next").click(function() {
      plusSlides(1);
    });
    $(".prev").click(function() {
      plusSlides(-1);
    });


   var windowSizeMoreThen =true;
  
   if($(window).resize(function(){

      if($(window).width()>991.98)
      {
         windowSizeMoreThen=true;
         showSlider(indexMidlleShow);
         
      }else
      {
         windowSizeMoreThen = false;
         showSliderResponsive(indexMidlleShow);
      }
   }));
  
$('.navbar-toggler').click(function() {
   $(`#navbarResponsive`).addClass(`navbar--background`);
 });

  $(window).scroll(function () {
     if ($(this).scrollTop() > 5) {
        $(`#navbarResponsive`).addClass(`navbar--background`);
     }
     if ($(this).scrollTop() < 10 && windowSizeMoreThen) {
         $(`#navbarResponsive`).removeClass(`navbar--background`);
     }
  });
});

   
