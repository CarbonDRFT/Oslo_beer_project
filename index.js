let popup = document.getElementById("button");

popup.addEventListener("click", () => {
  document.getElementById("payment_popup").style.display = "block";
});

let close = document.getElementById("close");

close.addEventListener("click", () => {
  document.getElementById("payment_popup").style.display = "none";
});
