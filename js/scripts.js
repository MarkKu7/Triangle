$(document).ready(function () {
  $("form#triangle").submit(function (event) {
    const side1 = parseInt($("#side1").val());
    const side2 = parseInt($("#side2").val());
    const side3 = parseInt($("#side3").val());

    event.preventDefault();

    if (!side1 || !side2 || !side3) {
      $("#alert").show();
      $("#info").hide();
    } else if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
      $("#whichTriangle").text("not an triangle");
      $("#info").show();
      $("#alert").hide();
    } else if (side1 === side2 && side2 === side3) {
      $("#whichTriangle").text("an equilateral triangle");
      $("#info").show();
      $("#alert").hide();
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      $("#whichTriangle").text("an isosceles triangle");
      $("#info").show();
      $("#alert").hide();
    } else {
      $("#whichTriangle").text("an scalene triangle");
    }
  });
});