window.onload = function () {
  let newRivaChair = JSON.parse(localStorage.getItem("rivaChair"));

  if (newRivaChair) {
    //create a new element in shopping-cart.html under id:try
    const tryList = document.getElementById("try");

    const listItem = document.createElement("li");

    //the text in the newly created li element - put into variables
    //variables are inspired from youtube: https://www.youtube.com/watch?v=u_iQn0hvrac accessed: 10.03.25
    listItem.innerHTML = `
        <h3>${newRivaChair.name}</h3>
        <p>Price: ${newRivaChair.price}</p>
        <img src="pictures-home/8.png" alt="${newRivaChair.name}" />
      `;

    tryList.appendChild(listItem);

    //if shoppingcart is empty:
  } else {
    const tryList = document.getElementById("try");
    tryList.innerHTML = "<li>No products in the cart.</li>";
  }
};
