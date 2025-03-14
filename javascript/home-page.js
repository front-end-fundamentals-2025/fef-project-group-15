document.addEventListener("DOMContentLoaded", updateCartBadge);
window.addEventListener("storage", updateCartBadge);

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
