const buttonElement = document.getElementById("button-style");

document.getElementById("button-style").addEventListener("click", function () {
  let product = {
    image: "pictures-home/8.png",
    name: "Riva Chair",
    price: "2300 SEK",
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.href = "shopping-cart.html";
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartDiv = document.getElementById("cart");
if (cart.length === 0) {
  cartDiv.innerHTML = "<p>Your cart is empty.</p>";
} else {
  cart.forEach((product) => {
    cartDiv.innerHTML += ` 
             <div>
              <img src="${product.image}" width="100">
               <p><strong>${product.name}</strong></p>
                <p>Price: ${product.price}</p>
                 </div> 
                 `;
  });
}
