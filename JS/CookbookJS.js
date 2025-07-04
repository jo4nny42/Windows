var Index = 0;
foodSlide();

function foodSlide() {
  var i;
  var x = document.getElementsByClassName("recipesBorder");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  Index++;
  if (Index > x.length) {Index = 1}
  x[Index-1].style.display = "block";
  setTimeout(foodSlide, 8000); // Change image every 8 seconds
}

var textIndex = 0;
textSlide();

function textSlide() {
  var i;
  var x = document.getElementsByClassName("detailContainer");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  textIndex++;
  if (textIndex > x.length) {textIndex = 1}
  x[textIndex-1].style.display = "block";
  setTimeout(textSlide, 8000); // Change image every 8 seconds
}