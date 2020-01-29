$(function() {

   var indexMidlleShow = 1;
   var width = $(window).width(); 

   $("#art1").click(function() {
      $("#art_11").toggle();
    });

    $("#art2").click(function() {
      $("#art_21").toggle();
    });

    $("#art3").click(function() {
      $("#art_31").toggle();
    });

    $("#kont_img1").click(function() {
      $("#kont1").toggle();
    });

    $("#kont_img2").click(function() {
      $("#kont2").toggle();
    });

    $("#but").click(function () {
      $(".articles-others").toggle("slow");
    });

   var windowSizeMoreThen =true;
  
   if($(window).resize(function(){

      if($(window).width()>991.98)
      {
         windowSizeMoreThen=true;
         
      }else
      {
         windowSizeMoreThen = false;
      }}));
  
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

   
