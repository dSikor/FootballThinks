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