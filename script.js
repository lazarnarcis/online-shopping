let products = document.querySelector("#productsOfProducts");
let cartElements = localStorage.getItem("cartElements") || 0;
let cartBtn = document.querySelector("#cartBtn");
let productsArray = [
    {
        price: 50,
        name: "Rubik's Cube"
    },
    {
        price: 25,
        name: "Kendama"
    },
    {
        price: 100,
        name: "Japanese Abacus"
    }
];
let cartEls = localStorage.getItem("cartEls") || [];

for (let i = 0; i < productsArray.length; i++) {
    let product = document.createElement("div");
    let productName = document.createElement("p");
    let productPrice = document.createElement("p");
    productName.innerHTML = productsArray[i].name;
    productPrice.innerHTML = productsArray[i].price + " lei";
    let addToCart = document.createElement("button");
    addToCart.innerText = "Add to Cart";
    addToCart.addEventListener("click", function() {
        cartElements++;
        cartEls = [...cartEls, productsArray[i]];
        console.log(cartEls);
        cartBtn.innerHTML = "Cart (" + cartElements + ")";
        localStorage.setItem("cartElements", cartElements);
        localStorage.setItem("cartEls", cartEls);
    });
    product.appendChild(productName);
    product.appendChild(productPrice);
    product.appendChild(addToCart);
    products.appendChild(product);
}

cartBtn.innerHTML = "Cart (" + cartElements + ")";