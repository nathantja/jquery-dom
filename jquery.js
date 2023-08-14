"use strict";

// 1.
$("article > img").toggleClass("image-center");

// 2.
// old method - this is using vanilla JavaScript
const $paragraphs = $("article > p");
$paragraphs[$paragraphs.length - 1].remove();

//css method to select last one: lastChild
//https://api.jquery.com/last-child-selector/
$("article p:last-child").remove();

// jquerymethod
const $paragraphs = $("article > p");
$paragraphs.eq(5).remove();

// 3.
$("h1").css("fontSize", Math.floor((Math.random() * (100 - 0 + 1))));

// 4.
$("ol").append("<li> I don't know add something here. </li>");

//instead of removing li indivdually, could .empty() contents
// 5.
$("ol").empty().append("<p> We're terribly sorry this list's existence. </p>");

// jquery eq method can use .val()
// 6.
$(".row.mb-5").on("change", ".form-control", function () {
  const $formControlObject = $(".form-control");
  const $red = $formControlObject.eq(0).val();
  const $green = $formControlObject.eq(2).val();
  const $blue = $formControlObject.eq(1).val();

  $("body").css("backgroundColor", `rgb(${$red}, ${$green}, ${$blue})`);
});

//instead of hard coding the click, use event target
// 7.
$("article").on("click", "img", function (evt) {
  $(evt.target).remove();
});