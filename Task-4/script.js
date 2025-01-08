let btn = document.querySelector("#mybtn");
btn.addEventListener("click", function colorChange() {
  document.body.style.backgroundColor = "green";
  document.body.innerHTML = "<p>Background Color Changed!</p>";
});