window.onload = function () {
  let newRivaChair = JSON.parse(localStorage.getItem("rivaChair"));

  if (newRivaChair) {
    //create a new element in shopping-cart.html under id:try
    const tryList = document.getElementById("try");

    const listItem = document.createElement("ul");

    //the text in the newly created li element - put into variables
    //variables are inspired from youtube: https://www.youtube.com/watch?v=u_iQn0hvrac accessed: 10.03.25
    listItem.innerHTML = `

        <figure id="first-cart-image">
        <img class="first-article" src="pictures-home/1.png" alt="" />

        <ul>
          <li class="footer-header">${newRivaChair.name}</li>
          <li>Brown wood chair with armrest</li>
        </ul>

        <ul>
          <li class="footer-header">Price</li>
          <li>${newRivaChair.price}</li>
        </ul>

        <a href="#">
          <img
            class="delete-icon"
            src="icon/delete-icon.png"
            alt="delete button"
          />
        </a>
      </figure>
      `;

    tryList.appendChild(listItem);

    //if shoppingcart is empty:
  } else {
    const tryList = document.getElementById("try");
    tryList.innerHTML = "<li>No products in the cart.</li>";
  }
};

const deleteElement = document.getElementsByClassName("delete-icon");

document.getElementById("delete-icon").addEventListener("click", function () {

});
