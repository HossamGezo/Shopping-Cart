// HTML Add Product Button 
search.insertAdjacentHTML(`afterend`, `<button class="add-product"> Add Product </button>`);

// Add Product Button Variable
addProduct = document.querySelector(".add-product");

// Add Product Button Event
addProduct.addEventListener("click", function () {
  if (localStorage.currentUser) {
    popupContainer.innerHTML = popupAddProduct;
    setTimeout(() => {
      document.querySelector(".popup").style.cssText = `
        transform: translateY(0);
      `;
    }, 300);
  } else {
    sideMessage("red", "Please Sign in to be able to add a product");
  }
});