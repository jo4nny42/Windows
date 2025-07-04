let index,index2,index3,index4,index5,index6,index7,poke1, lisIndex = 1;
showSlides(index);
showSlides2(index2);
showSlides3(index3);
showSlides4(index4);
showSlides5(index5);
showSlides6(index6);
showSlides7(index7);
showPokemon(poke1);
showLis(lisIndex);

function currentSlide(n){
    showSlides(index=n);
}

function currentSlide2(n){
  showSlides2(index2=n);
}

function currentSlide3(n){
  showSlides3(index3=n);
}

function currentSlide4(n){
  showSlides4(index4=n);
}

function currentSlide5(n){
  showSlides5(index5=n);
}

function currentSlide6(n){
  showSlides6(index6=n);
}

function currentSlide7(n){
  showSlides7(index7=n);
}

function currentSlide8(n){
  showPokemon(poke1 = n);
}

function currentSlide9(n){
  showLis(lisIndex = n);
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("contentBorder");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display = " block";
  dots[index-1].className += " active";
  captionText.innerHTML = dots[index-1].alt;
}

function showSlides2(n){
  let i;
  let slides = document.getElementsByClassName("contentBorder2");
  let dots = document.getElementsByClassName("Demo");
  let captionText = document.getElementById("caption2");
  if (n > slides.length) {index2 = 1}
  if (n < 1) {index2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index2-1].style.display = " block";
  dots[index2-1].className += " active";
  captionText.innerHTML = dots[index2-1].alt;
}

function showSlides3(n){
  let i;
  let slides = document.getElementsByClassName("contentBorder3");
  let dots = document.getElementsByClassName("time3");
  let captionText = document.getElementById("caption3");
  if (n > slides.length) {index3 = 1}
  if (n < 1) {index3 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index3-1].style.display = " block";
  dots[index3-1].className += " active";
  captionText.innerHTML = dots[index3-1].alt;
}

function showSlides4(n){
  let i;
  let slides = document.getElementsByClassName("contentBorder4");
  let dots = document.getElementsByClassName("time4");
  let captionText = document.getElementById("caption4");
  if (n > slides.length) {index4 = 1}
  if (n < 1) {index4 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index4-1].style.display = " block";
  dots[index4-1].className += " active";
  captionText.innerHTML = dots[index4-1].alt;
}

function showSlides5(n){
  let i;
  let slides = document.getElementsByClassName("contentBorder5");
  let dots = document.getElementsByClassName("time5");
  let captionText = document.getElementById("caption5");
  if (n > slides.length) {index5 = 1}
  if (n < 1) {index5 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index5-1].style.display = " block";
  dots[index5-1].className += " active";
  captionText.innerHTML = dots[index5-1].alt;
}

function showSlides6(n){
  let i;
  let slides = document.getElementsByClassName("contentBorder6");
  let dots = document.getElementsByClassName("time6");
  let captionText = document.getElementById("caption6");
  if (n > slides.length) {index6 = 1}
  if (n < 1) {index6 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index6-1].style.display = " block";
  dots[index6-1].className += " active";
  captionText.innerHTML = dots[index6-1].alt;
}
function showSlides7(n){
  let i;
  let slides = document.getElementsByClassName("contentBorder7");
  let dots = document.getElementsByClassName("time7");
  let captionText = document.getElementById("caption7");
  if (n > slides.length) {index7 = 1}
  if (n < 1) {index7 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index7-1].style.display = " block";
  dots[index7-1].className += " active";
  captionText.innerHTML = dots[index7-1].alt;
}

function showPokemon(n){
  let i;
  let slides = document.getElementsByClassName("pokemonBorder");
  let dots = document.getElementsByClassName("p1");
  let captionText = document.getElementById("pokeCaption");
  if (n > slides.length) {poke1 = 1}
  if (n < 1) {poke1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[poke1-1].style.display = " block";
  dots[poke1-1].className += " active";
  captionText.innerHTML = dots[poke1-1].alt;
}

function showLis(n){
  let i;
  let slides = document.getElementsByClassName("lisBorder");
  let dots = document.getElementsByClassName("lisGame");
  let captionText = document.getElementById("lisCaption");
  if (n > slides.length) {lisIndex = 1}
  if (n < 1) {lisIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[lisIndex-1].style.display = " block";
  dots[lisIndex-1].className += " active";
  captionText.innerHTML = dots[lisIndex-1].alt;
}

function firstTimeline(){
  let timeline1 = document.getElementById("t1");
  if (timeline1.style.display === "none"){
    timeline1.style.display = "block";
  }else{
    timeline1.style.display  = "none";
  }
}

function secondTimeline(){
  let timeline2 = document.getElementById("t2");
  if (timeline2.style.display === "none"){
    timeline2.style.display = "block";
  }else{
    timeline2.style.display  = "none";
  }
}

function thirdTimeline(){
  let timeline3 = document.getElementById("t3");
  if (timeline3.style.display === "none"){
    timeline3.style.display = "block";
  }else{
    timeline3.style.display  = "none";
  }
}

function fourthTimeline(){
  let timeline4 = document.getElementById("t4");
  if (timeline4.style.display === "none"){
    timeline4.style.display = "block";
  }else{
    timeline4.style.display  = "none";
  }
}

function fifthTimeline(){
  let timeline5 = document.getElementById("t5");
  if (timeline5.style.display === "none"){
    timeline5.style.display = "block";
  }else{
    timeline5.style.display  = "none";
  }
}

function sixthTimeline(){
  let timeline6 = document.getElementById("t6");
  if (timeline6.style.display === "none"){
    timeline6.style.display = "block";
  }else{
    timeline6.style.display  = "none";
  }
}

function seventhTimeline(){
  let timeline7 = document.getElementById("t7");
  if (timeline7.style.display === "none"){
    timeline7.style.display = "block";
  }else{
    timeline7.style.display  = "none";
  }
}

function loz(){
  let showtimeline = document.getElementById("timelineOptions");
  let timelines = document.getElementById("zeldaTimelines");
  if (showtimeline.style.display === "none"){
    showtimeline.style.display = "block";
    timelines.style.display = "block";
  }else{
    showtimeline.style.display  = "none";
    timelines.style.display = "none";
  }
}

function pokemonDisplay(){
  let pokemonShow = document.getElementById("pkDiv");
  if (pokemonShow.style.display === "none"){
    pokemonShow.style.display = "block";
  }else{
    pokemonShow.style.display = "none";
  }
}

function lisDisplay(){
  let lisShow = document.getElementById("lis");
  if (lisShow.style.display === "none"){
    lisShow.style.display = "block";
  }else{
    lisShow.style.display = "none";
  }
}