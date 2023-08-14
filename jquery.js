"use strict";

// 1.
$("article > img").toggleClass("image-center");

// 2.
const $paragraphs = $("article > p");
$paragraphs[$paragraphs.length - 1].remove();
console.log($paragraphs)

// 3.
$("h1").css("fontSize", Math.floor((Math.random() * (100 - 0 + 1))));

// 4.
$("ol").append("<li> I don't know add something here. </li>");

// 5.
$("li").remove();
$("ol").append("<p> We're terribly sorry this list's existence. </p>");

// 6.
let $formControlObject = $(".form-control");
console.log($formControlObject)

$(".row.mb-5").on("change", ".form-control", function () {
  $("body").css({ backgroundColor: $(".form-control").val() });
});