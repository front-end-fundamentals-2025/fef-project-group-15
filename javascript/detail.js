const buttonElement = document.getElementById("button-style");

let rivaChair = {
  name: "Riva Chair",
  price: "2300",
  image: "pictures-home/8.png",
};

//if you click "add to cart" button: store data and open shopping-cart.html
document.getElementById("button-style").addEventListener("click", function () {
  localStorage.rivaChair = JSON.stringify(rivaChair);
  window.location.href = "shopping-cart.html";
});

window.onload = function () {
  let newRivaChair = JSON.parse(localStorage.getItem("rivaChair"));
  const cartIcon = document.getElementById("cart-icon");

  if (newRivaChair) {
    // Add the cart badge
    if (!document.getElementById("cart-badge")) {
      let cartBadge = document.createElement("span");
      cartBadge.id = "cart-badge";
      cartBadge.textContent = "1";
      cartBadge.style.cssText =
        "position: absolute; top: 8px; left: 18px; background: #e9ebb9; color: #6e440a; border-radius: 50%; width: 18px; height: 15px; display: flex; align-items: center; justify-content: center; font-size: 15px;";
      cartIcon.appendChild(cartBadge);
    }
  }
};
