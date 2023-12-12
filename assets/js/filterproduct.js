// HTML Add Filter Button 
search.insertAdjacentHTML(`afterend`, `<i class="filter fa-solid fa-sliders"></i>`);

// Add Product Button Variable
filterProducts = document.querySelector(".filter");

// HTML Add Fiter Buttons Options
filterProducts.insertAdjacentHTML(`afterend`, `
  <div class="filter-buttons">
    <div class="filter-size">
      <span class="filter-size__select small">Small</span>
    </div>
    <div class="filter-size">
      <span class="filter-size__select medium">Medium</span>
    </div>
    <div class="filter-size">
      <span class="filter-size__select large">Large</span>
    </div>
    <div class="filter-size">
      <span class="filter-size__select all">All</span>
    </div>
  </div>
`);

// Filter Button Variable
let filterButtons = document.querySelector(".filter-buttons");

// Filter Products Event (Horizontal Accordion)
filterProducts.addEventListener("click", function () {
  filterButtons.classList.toggle("open");
  if (filterButtons.classList.contains("open")) {
    filterButtons.style.cssText = `width: 320px; margin-right: 20px;`;
  } else {
    filterButtons.style.cssText = `width: 0; margin-right: 0`;
  }
});

// Filter Buttons Event (Small, Medium, Large);
filterButtons.addEventListener("click", function (e) {
  if (e.target.classList.contains("small")) {
    filter("Small");
  } else if (e.target.classList.contains("medium")) {
    filter("Medium");
  } else if (e.target.classList.contains("large")) {
    filter("Large");
  } else {
    showProducts();
  }
});

// Filter Function Based On Size
function filter(typeOfFilter) {
  let products = JSON.parse(localStorage.getItem("productsData"));
  if (localStorage.currentUser) {
    let currentuserId = JSON.parse(localStorage.currentUser).userId;
    let userProducts = user[currentuserId].addProducts;
    products = [...products, ...userProducts];
  }
  let array = products.filter( item => item.size === typeOfFilter);
  showProducts(array);
}