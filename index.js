// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)
// const mouse = document.querySelector(".mouse")
// const mousemove1 = document.querySelector(".mouse1");
// const mousemove2 = document.querySelector(".mouse2");

const mouses = document.querySelectorAll(".mouse")
// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

window.addEventListener('mousemove', (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.y + "px";
    mouse.style.left = e.x + "px";
  });
});

// window.addEventListener('mousemove', (e) => {
//   mouse.style.left = e.pageX + "px";
//   mouse.style.top = e.pageY + "px";

//   mouse1.style.left = e.pageX + "px";
//   mouse1.style.top = e.pageY + "px";

//   mouse2.style.left = e.pageX + "px";
//   mouse2.style.top = e.pageY + "px";
// });



// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
