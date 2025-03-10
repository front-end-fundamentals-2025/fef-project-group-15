const buttonElement = document.getElementById("button-style");

let rivaChair = {
  name: "Riva Chair",
  price: "SEK 2300",
};

//if you click "add to cart" button: store data and open shopping-cart.html
document.getElementById("button-style").addEventListener("click", function () {
  localStorage.rivaChair = JSON.stringify(rivaChair);
  window.location.href = "shopping-cart.html";
});
