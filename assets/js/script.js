/* Seleciona os elementos com a tag "i" e os
armazena em uma NodeList de nome "stars" */
const stars = document.querySelectorAll(".stars i");

//
stars.forEach((star, index1) => {
  //
  star.addEventListener("click", () => {
    //
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});
