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
    products.appendChild(button);

    let link = document.createElement("a");
    link.href = "index.html";
    link.innerText = "Go back to main page!";
    products.appendChild(link);
} else {
    products.innerText = "No products in your cart!";
}