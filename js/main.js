$(document).ready(function(){
  $("#nav-button").on("click",function(event){
    $(this).toggleClass("open");
    $(".main-navigation").toggleClass("open");
  });
});
