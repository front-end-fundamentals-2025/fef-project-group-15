const buttonElement = document.getElementById("button-style");

document.getElementById("button-style").addEventListener("click", function () {
  localStorage.setItem("fruit", "apple");
  window.location.href = "shopping-cart.html";

  /*  const cartElement = document.getElementById("try");
  const pElement = document.createElement("li");
  pElement.innerText = "Hey";
  cartElement.appendChild(pElement); */
});

// This code should run once the shopping-cart.html page is fully loaded
window.addEventListener("load", function () {
  // Retrieve the item stored in localStorage
  const fruit = localStorage.getItem("fruit");

  if (fruit) {
    // Create a new list item based on the data from localStorage
    const cartElement = document.getElementById("try");
    const pElement = document.createElement("li");
    pElement.innerText = fruit; // "apple" will be displayed
    cartElement.appendChild(pElement);
  }
});
