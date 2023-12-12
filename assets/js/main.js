let signIn = document.querySelector(".signin");
let signUp = document.querySelector(".signup");
let popupContainer = document.querySelector(".popup__container");
let sideMessageContainer = document.querySelector(".side-message__container");
let actionContainer = document.querySelector(".action__container");
let mainContent = document.querySelector(".main-content");
let allProducts = document.querySelector(".all-products");
let allPurchases = document.querySelector(".my-purchases");
let productDetailes = document.querySelector(".prodcut-detailes");
let search = document.querySelector(".search");
let user = [];
let userInfo;
let ProductsData = [
  {
    id: 1,
    img: `assets/images/bag.png`,
    head: `BackBag`,
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Eius enim saepe ad? Dolorum veniam minus quaerat, culpa 
      rem corrupti itaque possimus cumque consectetur doloremque 
      quia nulla tempora laboriosam consequatur totam?`,
    size: `Large`,
    edit: false,
  },
  {
    id: 2,
    img: `assets/images/sandisk.png`,
    head: `Sandisk Memory`,
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Eius enim saepe ad? Dolorum veniam minus quaerat, culpa 
      rem corrupti itaque possimus cumque consectetur doloremque 
      quia nulla tempora laboriosam consequatur totam?`,
    size: `Small`,
    edit: false,
  },
  {
    id: 3,
    img: `assets/images/echo.png`,
    head: `Echo System`,
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Eius enim saepe ad? Dolorum veniam minus quaerat, culpa 
      rem corrupti itaque possimus cumque consectetur doloremque 
      quia nulla tempora laboriosam consequatur totam?`,
    size: `Medium`,
    edit: false,
  },
  {
    id: 4,
    img: `assets/images/kindle.png`,
    head: `Kindle Tablet`,
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Eius enim saepe ad? Dolorum veniam minus quaerat, culpa 
      rem corrupti itaque possimus cumque consectetur doloremque 
      quia nulla tempora laboriosam consequatur totam?`,
    size: `Medium`,
    edit: false,
  },
  {
    id: 5,
    img: `assets/images/perfeum.png`,
    head: `Beautiful Perfeum`,
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Eius enim saepe ad? Dolorum veniam minus quaerat, culpa 
      rem corrupti itaque possimus cumque consectetur doloremque 
      quia nulla tempora laboriosam consequatur totam?`,
    size: `Small`,
    edit: false,
  },
  {
    id: 6,
    img: `assets/images/phone.png`,
    head: `Cell Phone`,
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Eius enim saepe ad? Dolorum veniam minus quaerat, culpa 
      rem corrupti itaque possimus cumque consectetur doloremque 
      quia nulla tempora laboriosam consequatur totam?`,
    size: `Medium`,
    edit: false,
  },
  {
    id: 7,
    img: `assets/images/rope.png`,
    head: `Black Rope`,
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Eius enim saepe ad? Dolorum veniam minus quaerat, culpa 
      rem corrupti itaque possimus cumque consectetur doloremque 
      quia nulla tempora laboriosam consequatur totam?`,
    size: `Large`,
    edit: false,
  },
  {
    id: 8,
    img: `assets/images/tefal.png`,
    head: `Tefal`,
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Eius enim saepe ad? Dolorum veniam minus quaerat, culpa 
      rem corrupti itaque possimus cumque consectetur doloremque 
      quia nulla tempora laboriosam consequatur totam?`,
    size: `Large`,
    edit: false,
  },
  {
    id: 9,
    img: `assets/images/toy.png`,
    head: `Great Toy`,
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Eius enim saepe ad? Dolorum veniam minus quaerat, culpa 
      rem corrupti itaque possimus cumque consectetur doloremque 
      quia nulla tempora laboriosam consequatur totam?`,
    size: `Medium`,
    edit: false,
  },
  {
    id: 10,
    img: `assets/images/rose.png`,
    head: `Red Rose`,
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Eius enim saepe ad? Dolorum veniam minus quaerat, culpa 
      rem corrupti itaque possimus cumque consectetur doloremque 
      quia nulla tempora laboriosam consequatur totam?`,
    size: `Small`,
    edit: false,
  },
  {
    id: 11,
    img: `assets/images/sonbor.png`,
    head: `Metal Sonbor`,
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Eius enim saepe ad? Dolorum veniam minus quaerat, culpa 
      rem corrupti itaque possimus cumque consectetur doloremque 
      quia nulla tempora laboriosam consequatur totam?`,
    size: `Large`,
    edit: false,
  },
  {
    id: 12,
    img: `assets/images/watch.jpg`,
    head: `Metal Watch`,
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Eius enim saepe ad? Dolorum veniam minus quaerat, culpa 
      rem corrupti itaque possimus cumque consectetur doloremque 
      quia nulla tempora laboriosam consequatur totam?`,
    size: `Medium`,
    edit: false,
  },
];

// ! ------------------- HTML Tags Component

// Popup SignIn Tag Collection
let popupTagsSignIn = `
  <div class="popup__wrapper">
    <div class="popup">
      <i class="fa-solid fa-xmark close-btn"></i>
      <div class="popup__heading">Sign In User</div>
      <div class="popup__body">
        <input autocomplete="cc-number" class="popup__body--input username" type="text" placeholder="Username"/>
        <input autocomplete="cc-number" class="popup__body--input password" type="password" placeholder="Password"/>
        <button class="popup__body--submitsignin">Sign In</button>
      </div>
      <!-- // PopUp Body -->
    </div>
    <!-- // PopUp -->
  </div>
  <!-- // PopUp Wrapper -->
`;

// Popup SignUp Tag Collection
let popupTagsSignUp = `
  <div class="popup__wrapper">
    <div class="popup">
      <i class="fa-solid fa-xmark close-btn"></i>
      <div class="popup__heading">Sign Up User</div>
      <div class="popup__body">
        <input autocomplete="cc-number" class="popup__body--input username" type="text" placeholder="Enter Your Username"/>
        <input autocomplete="cc-number" class="popup__body--input email" type="email" placeholder="Enter Your Email"/>
        <input autocomplete="cc-number" class="popup__body--input password" type="password" placeholder="Enter Your Password"/>
        <button class="popup__body--submitsignup">Sign Up</button>
      </div>
      <!-- // PopUp Body -->
    </div>
    <!-- // PopUp -->
  </div>
  <!-- // PopUp Wrapper -->
`;

// Popup Add Product Tag Collection
let popupAddProduct = `
  <div class="popup__wrapper">
    <div class="popup">
      <i class="fa-solid fa-xmark close-btn"></i>
      <div class="popup__heading">Add Product</div>
      <div class="popup__body">
        <input class="popup__body--input image-file" type="file" placeholder="Upload Product Image"/>
        <input autocomplete="cc-number" class="popup__body--input title" type="text" placeholder="Product Title"/>
        <div class="select-container">
          <select>
            <option value="" hidden>Select Your Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            </select>
            <i class="fa-solid fa-caret-down"></i>
        </div>
        <textarea class="desc" placeholder="Product Description" rows="10" cols="50"></textarea>
        <button class="popup__body--create">Create</button>
      </div>
      <!-- // PopUp Body -->
    </div>
    <!-- // PopUp -->
  </div>
  <!-- // PopUp Wrapper -->
`;

// *** main -->  Beginning Of The Project 

if (!localStorage.user) localStorage.setItem("user", JSON.stringify(user));

setupUI();

showProducts();
// ! ------------------- Events 

// SignIn Event Function
function signinBtn() {
  popupContainer.innerHTML += popupTagsSignIn;
  setTimeout(() => {
    document.querySelector(".popup").style.cssText = `
      transform: translateY(0);
    `;
  }, 300);
}

// SignUp Event Function
function signupBtn() {
  popupContainer.innerHTML += popupTagsSignUp;
  setTimeout(() => {
    document.querySelector(".popup").style.cssText = `
      transform: translateY(0);
    `;
  }, 300);
}

// LogOut Event Function
function logoutBtn() {
  localStorage.removeItem("currentUser");
  window.location = "index.html";
  setupUI();
}

// (Close & Submit & Create & Update) Button Event
popupContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("close-btn")) {
    popupContainer.innerHTML = "";
  } else if (event.target.classList.contains("popup__body--submitsignin")) {
    let username = document.querySelector(".username");
    let password = document.querySelector(".password");
    if (username.value === "" || password.value == "") {
      sideMessage("red", "Fill Data To Sign In");
    } else {
      let user = JSON.parse(localStorage.user);
      let checkUser = user.findIndex((item) => {
        return (item.username  === username.value) && (item.password === password.value);
      });
      if (checkUser !== -1) { 
        sideMessage("green", "Your Sign In succeeded");
        popupContainer.innerHTML = "";
        let userInfo = {
          userId: checkUser,
          username: username.value,
        }
        addToLocalStorage(user, userInfo);
        setupUI();
        showProducts();
      }
      else {
        sideMessage("red", "Your UserName Or Password Is Wrong");
      }
    }
  } else if (event.target.classList.contains("popup__body--submitsignup")) {
    let username = document.querySelector(".username");
    let email = document.querySelector(".email");
    let password = document.querySelector(".password");
    if (username.value === "" || email.value === "" || password.value == "") {
      sideMessage("red", "Fill Data To Sign Up");
    } else {
      let user = JSON.parse(localStorage.user);
      let checkUser = user.findIndex((item) => {
        return (item.username  === username.value) && (item.email  === email.value);
      });
      if (checkUser === -1) { 
        let userObj = {
          username: username.value,
          email: email.value,
          password: password.value,
          purchases: [],
          favourites: [],
          addProducts: [],
        }
        user.push(userObj);
        let userInfo = {
          userId: user.length - 1,
          username: username.value,
        }
        addToLocalStorage(user, userInfo);
        popupContainer.innerHTML = "";
        sideMessage("green", "Your Sign Up succeeded");
        setupUI();
      }
      else {
        sideMessage("red", "This UserName Or Email Is Exist");
      }
    }
  } else if (event.target.classList.contains("popup__body--create")) {
    let title = document.querySelector(".title").value;
    let desc = document.querySelector(".desc").value;
    let size = document.querySelector("select").value;
    let image = document.querySelector(".image-file").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    let inputFile;
    reader.onload = function () {
      inputFile = reader.result;
      let id;
      if (event.target.getAttribute("datadetailes") === "true" || event.target.classList.contains("update")) {
        id = event.target.getAttribute("dataid");
      } else {
        id = ProductsData.length + 1
      }
      let newProdcut = {
        id: id,
        img: inputFile,
        head: title,
        body: desc,
        size: size,
        edit: true,
      };
      user = JSON.parse(localStorage.user);
      currentUserId = JSON.parse(localStorage.currentUser).userId;
      if (event.target.getAttribute("datadetailes") === "true" || event.target.classList.contains("update")) {
        // let index = +event.target.getAttribute("dataid");
        // index = index - 13;
        let index = id - 13;
        user[currentUserId].addProducts[index] = newProdcut;
      } else {
        user[currentUserId].addProducts.push(newProdcut);
      }
      localStorage.setItem("user", JSON.stringify(user));
      popupContainer.innerHTML = "";
      if (event.target.getAttribute("datadetailes") === "true") {
        showProductDetailes();
      } else {
        showProducts(); 
      }
    }
  } 
});

// Main Content Event
mainContent.addEventListener("click", function (event) {
  if (event.target.classList.contains("add-cart")) {
    if (localStorage.currentUser) {
      addToCart(event.target.parentElement.parentElement.parentElement);
    } else {
      sideMessage("red", "Please Sign In To Add To Cart");
    }
  } else if (event.target.classList.contains("icon-favourite")) {
    if (localStorage.currentUser) {
      addTofavourite(event.target.parentElement.parentElement);
    } else {
      sideMessage("red", "Please Sign In To Add To Your Favourite");
    }
  } else if (event.target.classList.contains("edit-product")) {
    let detailes = event.target.classList.contains("detailes");
    editProduct(event.target.parentElement.parentElement.parentElement, detailes);
  }
});

// Search Input Event
if (window.location.pathname === "/index.html") {
  search.addEventListener("keyup", function () {
    let itSolid;
    if (localStorage.currentUser) {
      let userId = JSON.parse(localStorage.currentUser).userId;
      itSolid = (user[userId].favourites).map(item => item.solid);
    }
    let productName = search.value;
    allProducts.innerHTML = "";
    for (let i = 0; i < ProductsData.length; ++i) {
      if (ProductsData[i].head.toLowerCase().includes(productName.toLowerCase())) {
        allProducts.innerHTML += `
          <div class="product" dataid=${ProductsData[i].id}>
            <div class="image">
              <img src="${ProductsData[i].img}" alt="IMAGE"/>
            </div>
            <!-- // Image -->
            <div class="product-body">
              <h3 class="product-body__head" onclick="detailes(${ProductsData[i].id})";>${ProductsData[i].head}</h3>
              <p class="product-body__desc">
                ${ProductsData[i].body}
              </p>
            </div>
            <!-- // Product Body -->
            <div class="product-bottom">
              <i class="fa-regular fa-heart icon-favourite ${localStorage.currentUser ? itSolid.includes(ProductsData[i].id) ? "fa-solid" : "" : ""}"></i>
              <button class="add-cart">Add To Cart</button>
            </div>
            <!-- // Product Bottom -->
          </div>
          <!-- // Product -->
        `;
      }
    }
    if (productName === "") {
      showProducts();
    }
  });
}

// ! ------------------- Helpful Functions

// Add To LocalStorage Function
function addToLocalStorage(user, userInfo) {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("currentUser", JSON.stringify(userInfo));
}

// Side Message Function
function sideMessage(color, message) {
  sideMessageContainer.innerHTML = `
    <div class="side-message" style="background-color: ${color};">
      ${message}
    </div>
  `;
  setTimeout(() => {
  document.querySelector(".side-message").style.cssText += `
    transform: translateX(0);
  `;
}, 100);
setTimeout(() => {
  document.querySelector(".side-message").style.cssText += `
    transform: translateX(300%);
  `;
}, 2000);
}

// Setup UI Function
function setupUI() {
  if (localStorage.currentUser) {
    user = JSON.parse(localStorage.user);
    userInfo = JSON.parse(localStorage.currentUser);
    let NumProducts = JSON.parse(localStorage.user)[userInfo.userId].purchases;
    let sum = 0;
    for (let i = 0; i < NumProducts.length; ++i) {
      sum += NumProducts[i].productNumber;
    }
    actionContainer.innerHTML = `
      <li class="navbar__list--item user" onclick="profile();"><a href="#">${userInfo.username}</a></li>
      <i class="fa-solid fa-heart icon">
      <div class="favourite-product" onclick="favourite();">${user[userInfo.userId].favourites.length}</div>
      </i>
      <i class="fa-solid fa-lightbulb icon lamp" onclick="myProducts();"></i>
      <i class="fa-solid fa-cart-shopping icon" onclick="cart();">
        <div class="cart-product">${sum}</div>
      </i>
      <li class="navbar__list--item logout" onclick="logoutBtn();">Log Out</li>
    `;
  } else {
    actionContainer.innerHTML = `
      <li class="navbar__list--item signin" onclick="signinBtn();"><a href="#">Sign In</a></li>
      <li class="navbar__list--item signup" onclick="signupBtn();"><a href="#">Sign Up</a></li>
    `;
  }
}

// Add To Cart Function
function addToCart(product) {
  let img = product.querySelector("img").src;
  let head = product.querySelector(".product-body__head").innerText;
  let body = product.querySelector(".product-body__desc").innerText;
  let userId = JSON.parse(localStorage.currentUser).userId;
  let user = JSON.parse(localStorage.user);
  let exist = user[userId].purchases.findIndex(function (item) {
    return item.img === img;
  });
  if (exist !== -1) {
    let NumberOfProduct = ++user[userId].purchases[exist].productNumber;
    user[userId].purchases[exist].productNumber = NumberOfProduct;
    localStorage.user = JSON.stringify(user);
    setupUI();
    sideMessage("green", "Product Has Been Added To Cart");
  } else {
    let id = product.getAttribute("dataid");
    let myPurchases = {
      productNumber: 1,
      solid: id,
      img: img,
      head: head,
      body: body
    }
    user[userId].purchases.push(myPurchases);
    localStorage.user = JSON.stringify(user);
    setupUI();
    sideMessage("green", "Product Has Been Added To Cart");
  }
}

// Add To Favourite Function
function addTofavourite(product) {
  // ADD Red Heart To Product
  product.querySelector("i").classList.toggle("fa-solid");
  // Product Detailes 
  let img = product.querySelector("img").src;
  let head = product.querySelector(".product-body__head").innerText;
  let body = product.querySelector(".product-body__desc").innerText;
  // User Detailes
  let userId = JSON.parse(localStorage.currentUser).userId;
  user = JSON.parse(localStorage.user);
  // Check Product Exist Or Not
  let exist = user[userId].favourites.findIndex(function (item) {
    return item.img === img;
  });
  // Update User Favourites LocalStorage
  if (exist !== -1) {
    user[userId].favourites.splice(exist, 1);
    addToLocalStorage(user, userInfo);
    user = JSON.parse(localStorage.user);
    setupUI();
    sideMessage("green", "The Product Removed From Favourites Page");
  } else {
    let id = product.getAttribute("dataid");
    let myFavourites = {
      solid: +id,
      img: img,
      head: head,
      body: body
    }
    user[userId].favourites.push(myFavourites);
    let userInfo = JSON.parse(localStorage.currentUser);
    addToLocalStorage(user, userInfo);
    user = JSON.parse(localStorage.user);
    setupUI();
    sideMessage("green", "The Product Has Been Added To Favourites Page");
  }
}

// Edit User Product 
function editProduct(product, detailes = false) {
  let myProduct = product;
  let size;
  let id;
  if (!detailes) {
    size = myProduct.querySelector(".size").innerText;
    id = +myProduct.getAttribute("dataid");
  } else {
    id = +myProduct.querySelector(".product").getAttribute("dataid");
  }
  let head = myProduct.querySelector(".product-body__head").innerText;
  let body = myProduct.querySelector(".product-body__desc").innerText;
  popupContainer.innerHTML = `
    <div class="popup__wrapper">
      <div class="popup">
        <i class="fa-solid fa-xmark close-btn"></i>
        <div class="popup__heading">Add Product</div>
        <div class="popup__body">
          <input class="popup__body--input image-file" type="file" placeholder="Upload Product Image"/>
          <input autocomplete="cc-number" class="popup__body--input title" type="text" placeholder="Product Title" value="${head}"/>
          <div class="select-container">
            <select>
              <option value="" hidden>Select Your Size</option>
              <option value="Small" ${"Small"  === size ? "selected" : ""}>Small</option>
              <option value="Medium"${"Medium" === size ? "selected" : ""}>Medium</option>
              <option value="Large" ${"Large"  === size ? "selected" : ""}>Large</option>
              </select>
              <i class="fa-solid fa-caret-down"></i>
          </div>
          <textarea class="desc" placeholder="Product Description" rows="10" cols="50">${body}</textarea>
          <button class="popup__body--create update" datadetailes="${detailes}" dataid="${id}">Update</button>
        </div>
        <!-- // PopUp Body -->
      </div>
      <!-- // PopUp -->
    </div>
    <!-- // PopUp Wrapper -->
  `;
  setTimeout(() => {
    document.querySelector(".popup").style.cssText = `
      transform: translateY(0);
    `;
  }, 300);
}

// Cart Function
function cart() {
  window.location = "cartproducts.html";
}

// favourite Function
function favourite() {
  window.location = "favourites.html";
}

// myProducts Function
function myProducts() {
  window.location = "myproducts.html";
}

// Profile Function
function profile() {
  window.location = "profile.html";
}


// Show Products Function
function showProducts(array = []) {
  user = JSON.parse(localStorage.user);
  if (!localStorage.getItem("productsData")) {
    localStorage.setItem("productsData", JSON.stringify(ProductsData));
  } 
  if (!array.length) {
    ProductsData = JSON.parse(localStorage.getItem("productsData"));
    if (localStorage.currentUser) {
      let currentuserId = JSON.parse(localStorage.currentUser).userId;
      let userProducts = user[currentuserId].addProducts;
      ProductsData = [...ProductsData, ...userProducts];
    }
  } else {
    ProductsData = array;
  }
  let products = ProductsData.map((item) => {
    let itSolid = "";
    if (localStorage.currentUser) {
      let userInfo = JSON.parse(localStorage.currentUser).userId;
      let fav = user[userInfo].favourites;
      for (let i = 0; i < fav.length; ++i) {
        if (fav[i].solid === item.id) {
          itSolid = "fa-solid";
          break;
        }
      }
    }
    return `
      <div class="product" dataid=${item.id}>
        <div class="image">
          <img src="${item.img ? item.img : "assets/images/amazon.png"}" alt="IMAGE"/>
        </div>
        <!-- // Image -->
        <div class="product-body">
          <h3 class="product-body__head" onclick="detailes(${item.id}, ${item.edit})";>${item.head}</h3>
          <p class="product-body__desc">
            ${item.body}
          </p>
        </div>
        <!-- // Product Body -->
        <div class="product-bottom">
          <i class="fa-regular fa-heart icon-favourite ${itSolid}"></i>
          <div>
            <button class="edit-product" ${item.edit ? "" : "hidden"}>Edit</button>
            <button class="add-cart">Add To Cart</button>
          </div>
        </div>
        <!-- // Product Bottom -->
        <span class="size ${item.size.toLowerCase()}">${item.size}<span>
      </div>
      <!-- // Product -->
    `;
  });
  allProducts.innerHTML = products.join("");
}
if (window.location.pathname === "/index.html") {
  showProducts();
}

// Show Function Using With Purchases & Favourites Page
function show(showArray, choosen) {
  if (showArray.length) {
    let showItArr = showArray.map((item, index) => {
      return `
        <div class="product" dataid="${item.solid}">
          <div class="image">
            <img src="${item.img}" alt="IMAGE"/>
          </div>
          <!-- // Image -->
          <div class="product-body">
            <h3 class="product-body__head">${item.head}</h3>
            <p class="product-body__desc">
              ${item.body}
            </p>
          </div>
          <!-- // Product Body -->
          <div class="product-bottom">
            <div class="proudct-num">${item.productNumber ? item.productNumber : ""}</div>
            <button class="remove" onclick="removeProduct(${index}, ${choosen});">Remove Item</button>
          </div>
          <!-- // Product Bottom -->
        </div>
        <!-- // Product -->
      `;
    });
    allPurchases.innerHTML = showItArr.join("");
  } else {
    allPurchases.style.cssText = `
      height: 75vh;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    allPurchases.innerHTML = `
      <div 
        class="no-products" 
        style="
          background-color: red;
          color: white;
          padding: 20px;
          font-size: 50px;
          font-weight: bold;
          width: 700px;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 
        ">
        No Products To Show
      </div>
    `;
  }
}

// Show All Purchases Function
function showPurchases() {
  let userInfo = JSON.parse(localStorage.currentUser);
  let purchases = user[userInfo.userId].purchases;
  allPurchases.innerHTML = "";
  show(purchases, 1);
}
if (window.location.pathname === "/cartproducts.html") {
  showPurchases();
}

// Show All Favourites Function
function showFavourites() {
  let userInfo = JSON.parse(localStorage.currentUser);
  let favourites = user[userInfo.userId].favourites;
  allPurchases.innerHTML = "";
  show(favourites, 2);
}
if (window.location.pathname === "/favourites.html") {
  showFavourites();
}

// Show All User Products Function
function showUserProducts() {
  let userInfo = JSON.parse(localStorage.currentUser);
  let userProducts = user[userInfo.userId].addProducts;
  allPurchases.innerHTML = "";
  show(userProducts, 3);
}
if (window.location.pathname === "/myproducts.html") {
  showUserProducts();
}

// Show Profile Detailes
function showProfileDetailes() {
  let userInfo = JSON.parse(localStorage.currentUser);
  let userDetailes = user[userInfo.userId];
  allPurchases.innerHTML += `
    <div class="user-detailes">
      <img src="assets/images/avatar.png"/>
      <div class="detailes-container">
        <h2 class="user-detailes__name"><div class="head">Username</div>${userDetailes.username}</h2>
        <h2 class="user-detailes__name"><div class="head">Email</div>${userDetailes.email}</h2>
        <h2 class="user-detailes__name"><div class="head">Password</div>${userDetailes.password}</h2>
      </div>
    </div>
  `;
}
if (window.location.pathname === "/profile.html") {
  showProfileDetailes();
}

// Remove Product Function
function removeProduct(productIndex, choosen) {
  let userInfo = JSON.parse(localStorage.currentUser);
  if (choosen === 1) {
    user[userInfo.userId].purchases.splice(+productIndex, 1);
    addToLocalStorage(user, userInfo);
    showPurchases();
  } else if (choosen === 2) {
    user[userInfo.userId].favourites.splice(+productIndex, 1);
    addToLocalStorage(user, userInfo);
    showFavourites();
  } else {
    user[userInfo.userId].addProducts.splice(+productIndex, 1);
    addToLocalStorage(user, userInfo);
    showUserProducts();
  }
  sideMessage("green", "Remove Product Succeeded");
  setupUI();
}

// Go To Product Detailes Page Function
function detailes(productIndex, productEdit) {
  window.location = `productdetailes.html?index=${productIndex}&edit=${productEdit}`;
}

// Show Product Detailes Function
function showProductDetailes() {
  // Gent Index & Edit Value From Website URL
  const urlParams = new URLSearchParams(window.location.search);
  let index = +urlParams.get("index");
  const edit = urlParams.get("edit");
  // If It User Product
  edit === "true" ? index -= 12 : index;
  let user = JSON.parse(localStorage.user);
  let currentUserId = JSON.parse(localStorage.currentUser).userId;
  // Product Detailes Insert HTML
  productDetailes.innerHTML = `
    <div class="product" dataid="${edit === "true" ? user[currentUserId].addProducts[index - 1].id : ProductsData[index - 1].id}">
      <div class="image">
        <img src="${edit === "true" ? user[currentUserId].addProducts[index - 1].img : ProductsData[index - 1].img}" alt="IMAGE"/>
      </div>
      <!-- // Image -->
      <div class="product-body">
        <h3 class="product-body__head">${edit === "true" ? user[currentUserId].addProducts[index - 1].head : ProductsData[index - 1].head}</h3>
        <p class="product-body__desc">
          ${edit === "true" ? user[currentUserId].addProducts[index - 1].body : ProductsData[index - 1].body}
        </p>
        <button class="edit-product detailes" ${edit === "true" ? "" : "hidden"}>Edit</button>
      </div>
      <!-- // Product Body -->
    </div>
    <!-- // Product -->
  `;
}
if (window.location.pathname === "/productdetailes.html") {
  showProductDetailes();
}

// https://youtu.be/E6B-ig8NHQE?si=l-TNyRKtgLXefFgu