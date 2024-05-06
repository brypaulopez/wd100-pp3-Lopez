let itemContainer = document.querySelector("#item-container");
let cartContainer = document.querySelector("#cart-container");
let cartLogo = document.querySelector(".fa-cart-arrow-down");
let inputEmail = document.querySelector("#exampleInputEmail1");
let checkoutContainer = document.querySelector("#checkout-container");
let searchItem = document.querySelector("#searchForm");
let signupItem = document.querySelector("#signupForm");
let specificDesc = document.querySelector("#specificBrand");

const addToCart = (image, name, price, desc) => {
    alert("Item added to cart!");
    cartItems.push({cart_image: image, cart_name: name, cart_price: price, cart_desc: desc});
    localStorage.setItem("shopping_cart", JSON.stringify(cartItems));
    showCart();
    changeClass();
}

const removeItem = (close) => {
    alert("Item removed to cart.");
    cartItems.splice(close, 1);
    localStorage.setItem("shopping_cart", cartItems);
    showCart();
    changeClass();
}

const changeClass = () => {
    if (cartItems == 0) {
        cartLogo.classList.remove("cartLogoRed");
    }
    else {
        cartLogo.classList.add("cartLogoRed");
    }
}

const showCart = () => {
    let x = 0;
    if (cartItems == 0) {
        cartContainer.innerHTML = "";
    }
    else {
        cartContainer.innerHTML = `
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
        </tr>
        `
        cartItems.forEach((cart) => {
            cartContainer.innerHTML += `
                <tr>
                    <td>
                        <img src="${cart.cart_image}" alt="" width ="150">
                    </td>
                    <td>
                        ${cart.cart_name}
                    </td>
                    <td>
                    &#8369;${cart.cart_price}
                        <button class="btn" onclick="removeItem(${x++})">Remove</button>
                    </td>
                </tr>
            `;
     });
    }
}

const showCheckout = () => {
    let y = 0;
    let total = 0;
    cartItems.forEach(item => {
        total += Number(item.cart_price);
    })
console.log("Total: ", total);
    if (cartItems == 0) {
        checkoutContainer.innerHTML = `
        <h2>Cart is empty!</h2>`
    }
    else {
        checkoutContainer.innerHTML = `
        <h2>Your Cart</h2>
        <div class="col-6">
            <p>You are buying ${cartItems.length} item/s</p>
        </div>
        <div class="col-6">
            <p>Amount: &#8369;${total} </p>
        </div>
        `
        cartItems.forEach((cart) => {
            checkoutContainer.innerHTML += `
                <div class="row">
                    <div class="col-6">
                        <img src="${cart.cart_image}" alt="" width ="150">
                    </div>
                    <div class="col-6">
                        <h4>${cart.cart_name}</h4>
                        <h3>&#8369;${cart.cart_price}</h3>
                    </div>
                </div>
                <hr>
            `;
     });
     checkoutContainer.innerHTML += `
     <h5>Shipping address:</h5>
     <form action="" class="row d-flex form-col1 g-3 justify-content-center">
                         <div class="col-md-5">
                             <label for="first-name">Name</label>
                             <input type="text" class="form-control" required>
                         </div>
                         <div class="col-md-5">
                             <label for="last-name">Last Name</label>
                             <input type="text" class="form-control" required>
                         </div>
                         <div class="col-md-5">
                             <label for="address1">Address 1</label>
                             <input type="text" class="form-control" required>
                         </div>
                         <div class="col-md-5">
                             <label for="address2">Address 2 (optional)</label>
                             <input type="text" class="form-control">
                         </div>
                         <div class="col-md-5">
                             <label for="city">City</label>
                             <input type="text" class="form-control" id="city" required>
                             <div class="invalid-feedback">
                                 Please provide a valid city.
                             </div>
                         </div>
                         <div class="col-md-3">
                             <label for="state">State</label>
                             <input type="text" class="form-control" id="state" required>
                             <div class="invalid-feedback">
                                 Please select a valid state.
                             </div>
                         </div>
                         <div class="col-md-2">
                             <label for="zipcode">Zip code</label>
                             <input type="text" class="form-control">
                             <div class="invalid-feedback" id="zipcode" required>
                                 Please provide a valid zip.
                             </div>
                         </div>
                         <h5>Payment</h5>
                         <div class="col-md-5 mt-0">
                             <label for="card-number">Card Number</label>
                             <input type="number" class="form-control" placeholder="0000 0000 0000 0000" id="card-number" required>
                         </div>
                         <div class="col-md-3 mt-0">
                             <label for="card-expiry">Expiry Date</label>
                             <input type="date" class="form-control" placeholder="MM/YY" id="card-expiry" required>
                         </div>
                         <div class="col-md-2 mt-0">
                             <label for="card-cvv">CVV</label>
                             <input type="number" class="form-control" placeholder="CVV" id="card-cvv" required>
                         </div>
                         <div class="col-12">
                             <div class="form-check">
                               <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                               <label class="form-check-label" for="invalidCheck">
                                 Agree to terms and conditions
                               </label>
                               <div class="invalid-feedback">
                                 You must agree before submitting.
                               </div>
                             </div>
                         </div>
                         <div class="col-md-8">
                             <a href="index.html">
                                 <button type="submit" class="btn btn-dark">Submit</button>
                             </a>
                         </div>
                     </form>
     `;
    }
}

const showProducts = () => {
    items.forEach((item) => {

        itemContainer.innerHTML += `
        <div class="col-md-6 col-lg-4 col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <img src="${item.product_image}" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${item.product_name}</h5>
                        <h3>&#8369;${item.product_price}</h3>
                        <p class="card-text">
                            ${item.product_desc}
                        </p>
                        <button class="btn btn-dark" id="showBtn" onclick="addToCart('${item.product_image}', '${item.product_name}','${item.product_price}','${item.product_desc}');">Add to cart</button>
                    </div>
                </div>
            </div>
            
            `;
    })
}

const filterSearch = () => {
    // searchOutput.innerHTML = "";
    itemContainer.innerHTML = "";
    let searchString = document.querySelector("#searchBar").value.toLowerCase();
    console.log(searchString);
    const filterSearch = items.filter (value => {
        return value.product_name.toLowerCase().includes(searchString);
    });
    console.log(filterSearch.length)
    if (filterSearch.length > 0) {
        for (let index = 0; index < filterSearch.length; index++) {
            itemContainer.innerHTML += 
            `
            <div class="col-md-6 col-lg-4 col-xl-3 col-sm-6 col-12">
            <div class="card">
                <img src="${filterSearch[index].product_image}" alt="">
                <div class="card-body">
                    <h5 class="card-title">${filterSearch[index].product_name}</h5>
                    <h3>&#8369;${filterSearch[index].product_price}</h3>
                    <p class="card-text">
                        ${filterSearch[index].product_desc}
                    </p>
                    <button class="btn btn-dark" id="showBtn" onclick="addToCart('${filterSearch[index].product_image}', '${filterSearch[index].product_name}','${filterSearch[index].product_price}','${filterSearch[index].product_desc}');">Add to cart</button>
                </div>
            </div>
        </div>
            
            `;
        }
    }
    else {
        itemContainer.innerHTML = `<h1>ITEM NOT FOUND</h1>`;
    }

    if (searchString.length == 0) {
        itemContainer.innerHTML = `<h1>SEARCH BAR IS EMPTY</h1>`;
    }
}


const specificBrand = (num) => {
    switch (num) {
        case 1:
            num = "chanel";
            break;
        case 2:
            num = "gucci"
            break;
        case 3:
            num = "louis vuitton"
            break;
        case 4:
            num = "prada"
            break;
        case 5:
            num = "dior"
            break;
        case 6:
            num = "birkin"
            break;
        case 7:
            num = "fendi"
            break;
        case 8:
            num = "ysl"
            break;
        case 9:
            num = "hermes"
            break;
        case 10:
            num = "neverfull"
            break;
        case 11:
                num = "asdafsdfgasfa"
                break;
        default:
    }
    const filterSearch = items.filter (value => {
        return value.product_desc.toLowerCase().includes(num);
    });
    specificDesc.innerHTML = "";
    // console.log(filterSearch.length)
    if (filterSearch.length > 0) {
        for (let index = 0; index < filterSearch.length; index++) {
            specificDesc.innerHTML += 
            `
            <div class="col-md-4 col-lg-4 col-sm-12 col-12">
            <div class="card">
                <img src="${filterSearch[index].product_image}" alt="">
                <div class="card-body">
                    <h5 class="card-title">${filterSearch[index].product_name}</h5>
                    <h3>&#8369;${filterSearch[index].product_price}</h3>
                    <p class="card-text">
                        ${filterSearch[index].product_desc}
                    </p>
                    <button class="btn btn-dark" id="showBtn" onclick="addToCart('${filterSearch[index].product_image}', '${filterSearch[index].product_name}','${filterSearch[index].product_price}','${filterSearch[index].product_desc}');">Add to cart</button>
                </div>
            </div>
        </div>
            
            `;
        }
    }
    else {
        specificDesc.innerHTML += "<h2>Bags with this brand are currently sold out. Sorry for the inconvenience!</h2>";
    }
}

searchItem.addEventListener("submit", (e) => {
    e.preventDefault();
    filterSearch();
  });

changeClass();
showCart();