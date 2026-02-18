document.getElementById("toggle-a").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".toggle-menu").classList.toggle("show-on-mobile");
  const hide = document.getElementsByClassName("burger-icon");
  for (let hidden of hide) {
    hidden.style.display = "none";
  }
  const show = document.getElementsByClassName("x-icon");
  for (let showing of show) {
    showing.style.display = "block";
  }
  for (let hidden of hide) {
    hidden.style.display = "none";
  }
});
