document.getElementById("toggle-a").addEventListener("click", function () {
  document.querySelector(".toggle-menu").classList.toggle("show-on-mobile");

  // Changing burger icon to X icon
  const hide = document.getElementsByClassName("burger-icon");
  for (let hidden of hide) {
    hidden.style.display = "none";
  }
  const show = document.getElementsByClassName("x-icon");
  for (let showing of show) {
    showing.style.display = "block";
  }
});
// After clicking X btn remove class show-on mobile and  change buttons again
document.getElementById("close-a").addEventListener("click", function () {
  document.querySelector(".toggle-menu").classList.remove("show-on-mobile");
  const hideX = document.getElementsByClassName("x-icon");
  for (let hiding of hideX) {
    hiding.style.display = "none";
  }
  const ShowB = document.getElementsByClassName("burger-icon");
  for (let showing of ShowB) {
    showing.style.display = "block";
  }
});
