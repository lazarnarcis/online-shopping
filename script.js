let products = document.querySelector("#productsOfProducts");
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
let cartElements = localStorage.getItem("cartElements") || [];
if (cartElements != 0) cartElements = JSON.parse(cartElements);

for (let i = 0; i < productsArray.length; i++) {
    let product = document.createElement("div");
    let productName = document.createElement("p");
    let productPrice = document.createElement("p");
    productName.innerHTML = productsArray[i].name;
    productPrice.innerHTML = productsArray[i].price + " lei";
    let addToCart = document.createElement("button");
    addToCart.innerText = "Add to Cart";
    addToCart.addEventListener("click", function() {
        cartElements = [...cartElements, productsArray[i]];
        console.log(cartElements);
        cartBtn.innerHTML = "Cart (" + Number(cartElements.length) + ")";
        localStorage.setItem("cartElements", JSON.stringify(cartElements));
    });
    product.appendChild(productName);
    product.appendChild(productPrice);
    product.appendChild(addToCart);
    products.appendChild(product);
}

cartBtn.innerHTML = "Cart (" + Number(cartElements.length) + ")";