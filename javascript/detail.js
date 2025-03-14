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

document.addEventListener("DOMContentLoaded", updateCartBadge);
window.addEventListener("storage", updateCartBadge);

//The function updateCartBadge is inspired by ChatGPT https://chatgpt.com/share/67d40675-23c8-8001-ac2f-fffb66d4fff3 accessed: 13/03/2025

function updateCartBadge() {
  let cartItem = localStorage.getItem("rivaChair");
  let cartIcon = document.getElementById("cart-icon");
  let cartBadge = document.getElementById("cart-badge");

  if (cartItem) {
    if (!cartBadge) {
      cartBadge = document.createElement("span");
      cartBadge.id = "cart-badge";
      cartBadge.style.cssText =
        "position: absolute; top: 8px; left: 18px; background: #e9ebb9; color: #6e440a; border-radius: 50%; width: 18px; height: 15px; display: flex; align-items: center; justify-content: center; font-size: 15px;";
      cartIcon.appendChild(cartBadge);
    }
    cartBadge.textContent = "1";
  } else if (cartBadge) {
    cartBadge.remove();
  }
}
