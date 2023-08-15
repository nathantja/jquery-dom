"use strict";

$(".movie-form").on("submit", (evt) => {
  evt.preventDefault();

  const $movieName = $("#movie-name").val();
  const $movieRating = $("#movie-rating").val();

  $(".movie-list")
  .append(`<li class="movies"> ${$movieName} ${$movieRating} <button class="delete-btn">Delete</button></li>`);

  $(".movie-form").trigger("reset");

})


/** to delete the movies from the movie list when clicking the delete btn */

$(".movie-list-container").on("click", ".delete-btn", function (evt) {
  $(evt.target).parent().remove();
});