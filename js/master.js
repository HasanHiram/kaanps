$(document).ready(function(){
  $("span").click(function(event){
    event.stopPropagation();
    document.getElementById('scroll_butonu').stylesheet.color="red";
    location.href = "file:///C:/Users/Asus/Desktop/kaan%20playstation/fgames.html";
  });
});
