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
        $(`#navbarResponsive`).addClass(`custom_background_navbar`);
     }
     if ($(this).scrollTop() < 10 && windowSizeMoreThen) {
         $(`#navbarResponsive`).removeClass(`custom_background_navbar`);
     }
  });
});

$('.navbar-toggler').click(function() {
   $(`#navbarResponsive`).addClass(`custom_background_navbar`);
   // $(`#navbarResponsive`).toggleClass(`custom_background_navbar`);
 });