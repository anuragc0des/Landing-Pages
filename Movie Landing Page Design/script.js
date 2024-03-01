const openMovie = document.querySelector(".open");
const closeMovie = document.querySelector(".close");
const movieSection = document.querySelector(".movie-section");

closeMovie.addEventListener("click", function () {
  movieSection.classList.add("hidden");
});

openMovie.addEventListener("click", function () {
  movieSection.classList.remove("hidden");
});
