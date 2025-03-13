window.onload = function () {
  let newRivaChair = JSON.parse(localStorage.getItem("rivaChair"));
  const cartIcon = document.getElementById("cart-icon");

  if (newRivaChair) {
    //create a new element in shopping-cart.html under id:try
    const tryList = document.getElementById("try");

    const listItem = document.createElement("ul");

    //the text in the newly created li element - put into variables
    //variables are inspired from youtube: https://www.youtube.com/watch?v=u_iQn0hvrac accessed: 10.03.25
    listItem.innerHTML = `

        <figure id="first-cart-image">
        <img id="item-image" src="${newRivaChair.image}" />
        <ul>
          <li class="footer-header">${newRivaChair.name}</li>
        </ul>

        <ul>
          <li class="footer-header">Price</li>
          <li>${newRivaChair.price}</li>
        </ul>

          <img
            id="delete-icon"
            src="icon/delete-icon.png"
            alt="delete button"
          />
      </figure>
      `;

   // Add the cart badge
   if (!document.getElementById("cart-badge")) {
    let cartBadge = document.createElement("span");
    cartBadge.id = "cart-badge";
    cartBadge.textContent = "1";
    cartBadge.style.cssText =
      "position: absolute; top: 8px; left: 18px; background: #e9ebb9; color: #6e440a; border-radius: 50%; width: 18px; height: 15px; display: flex; align-items: center; justify-content: center; font-size: 15px;";
    cartIcon.appendChild(cartBadge);
  }

    tryList.appendChild(listItem);

    const costElement = document.getElementById("cost");

    let priceInNumber = parseInt(newRivaChair.price);

    let totalPrice = 0; // Loop through each item in the shopping cart
    let finalPrice = totalPrice + priceInNumber;

    // Update the cost in the HTML
    costElement.textContent = `${finalPrice} SEK`;
    localStorage.finalPrice = finalPrice;

    //if shoppingcart is empty:
  } else {
    const tryList = document.getElementById("try");
    tryList.innerHTML = "<li>No products in the cart.</li>";
  }

  //if the delete icon is pressed the item will be deleted
  const deleteElement = document.getElementById("delete-icon");
  const listItem = document.getElementsByTagName("ul");

  deleteElement.addEventListener("click", function () {
    localStorage.removeItem("rivaChair");
    location.reload();
  });
};