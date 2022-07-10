var active = document.getElementById("burger");
var menu = document.getElementById("menu");
var ouvert = true;
active.addEventListener("click", function(){
  if(ouvert === true){
  menu.style.opacity = "1";
  ouvert = false;
  }
  else{
    menu.style.opacity = "0";
    ouvert = true;
  }
});