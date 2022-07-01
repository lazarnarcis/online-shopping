let products = document.querySelector("#products");
let cartElements = localStorage.getItem("cartElements") || [];
if (cartElements != 0) cartElements = JSON.parse(cartElements);

if (cartElements.length) {
    for (let i = 0; i < cartElements.length; i++) {
        let product = document.createElement('div');
        let productName = document.createElement("p");
        let productPrice = document.createElement("p");
        productName.innerText = cartElements[i].name;
        productPrice.innerText = cartElements[i].price + " lei";
        product.appendChild(productName);
        product.appendChild(productPrice);
        products.appendChild(product);
    }
    let button = document.createElement("button");
    button.innerText = "Buy!";
    button.addEventListener("click", () => {
        alert("This function is not yet available!");
    });
    products.appendChild(button);

    let emptyCart = document.createElement("button");
    emptyCart.innerText = "Empty Cart";
    emptyCart.addEventListener("click", function() {
        cartElements = [];
        localStorage.setItem("cartElements", JSON.stringify(cartElements));
        window.location.href = "cart.html";
    });
    products.appendChild(emptyCart);
} else {
    products.innerText = "No products in your cart!";
}

let link = document.createElement("a");
link.href = "index.html";
link.innerText = "Go back to main page!";
products.appendChild(link);