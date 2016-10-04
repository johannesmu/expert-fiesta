$(document).ready(function(){
  $("#nav-button").on("click",function(){
    $("this").toggleClass("open");
    $(".main-navigation").toggleClass("open");
  });
});
