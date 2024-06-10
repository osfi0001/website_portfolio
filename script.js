window.addEventListener("load", sidenVises);

function sidenVises() {
  document.querySelector("#portrait_image").addEventListener("click", pop_animation);
}

function pop_animation() {
  console.log("image will enlarge and shrink again");

  document.querySelector("#portrait_image").classList.add("pop_animation");
}
