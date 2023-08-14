"use strict";

// 1.
$("article > img").toggleClass("image-center");

// 2.
const $paragraphs = $("article > p");
$paragraphs[$paragraphs.length - 1].remove();

// 3.
$("h1").css("fontSize", Math.floor((Math.random() * (100 - 0 + 1))));

// 4.
$("ol").append("<li> I don't know add something here. </li>");

// 5.
$("li").remove();
$("ol").append("<p> We're terribly sorry this list's existence. </p>");

// 6.
$(".row.mb-5").on("change", ".form-control", function () {
  const $formControlObject = $(".form-control");
  const $red = $formControlObject[0].value;
  const $green = $formControlObject[2].value;
  const $blue = $formControlObject[1].value;

  $("body").css("backgroundColor", `rgb(${$red}, ${$green}, ${$blue})`);
});

// 7.
$("article").on("click", "img", function (){
  $("article > img").remove();
});