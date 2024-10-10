// NAVIGATION MENU
document.addEventListener("DOMContentLoaded", function(){
  const burger = document.getElementById("burger-icon");
  const menu = document.getElementById("menu");

  burger.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
  
});

