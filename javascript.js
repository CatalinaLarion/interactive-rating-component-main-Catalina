var container1 = document.querySelector(".container1");
var container2 = document.querySelector(".container2");
var rating = document.querySelector(".rating");
var btnS = document.querySelector(".btnS");
var btn = document.querySelector(".btn");

btnS.addEventListener("click", function () {
  container1.classList.add("displayn");
  container2.classList.add("displayb");
});
