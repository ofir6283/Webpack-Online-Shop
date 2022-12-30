import { items } from "./items";

function buildProdCard(i, relevantProd) {
    let div = document.createElement('div');
    div.setAttribute('style', 'border: 0.2em solid black;margin:1em;font-family:Times New Roman-serif;height: 15em;width: 8em;border-radius: 15px; text-align: center;background-color: lightgreen;');
    // div.classList.add('catalog-item');
    let img = document.createElement('img');
    img.setAttribute('style', 'width:3em', 'height:3em');
    img.src = relevantProd[i].image;
    img.setAttribute('style', 'width:3em;height:3em');

    let title = document.createElement('p');
    title.innerHTML = relevantProd[i].name;
    title.setAttribute('style', 'size:0.5em;font-weight: bold;')

    let price = document.createElement('p');
    price.innerHTML = "price:" + relevantProd[i].price + " shmekels";
    price.setAttribute('style', 'text-decoration: underline;');

    let productCountInput = document.createElement('input');
    productCountInput.placeholder = 'Ammount';
    productCountInput.setAttribute('style', 'width:4.5em;margin-top: 1em;');

    let orderButton = document.createElement('button');
    orderButton.innerHTML = "add to cart";
    orderButton.setAttribute('style', 'margin-top: 2em;text-align:center;border:none;border-radius: 5px;cursor: pointer;display: inline-block;text-align: center;color:#A9A9A9;border-color: #f8f8ff;');

    // Order Button logic
    orderButton.addEventListener('click', () => {

        let cart = document.getElementById('cart');
        let cartDiv = document.createElement('div');
        cartDiv.setAttribute('style', 'border: 0.2em solid black;margin:1em;font-family:Times New Roman-serif;height: 15em;width: 8em;border-radius: 15px; text-align: center;background-color: lightgreen;');
        let img = document.createElement('img');
        img.setAttribute('style', 'width:3em', 'height:3em');
        img.src = relevantProd[i].image;
        img.setAttribute('style', 'width:3em;height:3em');

        let title = document.createElement('p');
        title.innerHTML = relevantProd[i].name + " X " + Number(productCountInput.value);
        title.setAttribute('style', 'size:0.5em')

        let price = document.createElement('p');
        price.setAttribute('style', 'text-decoration: underline');
        price.innerHTML = "price:" + relevantProd[i].price + " shmekels";




        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = "Remove";
        removeBtn.setAttribute('style', 'margin-top: 2em;width:4.3em;height:2em;text-align:center;border:none;border-radius: 5px;cursor: pointer;display: inline-block;text-align: center;color:#A9A9A9;border-color: #f8f8ff;');


        removeBtn.addEventListener('click', () => {
            removeFromCart(cartDiv);
        });

        let totalProd = document.createElement('p');
        if (productCountInput.value != NaN) {
            totalProd.innerHTML = "total: " + Number(calcItemPrice(i, Number(productCountInput.value), items[i].price));
            cartDiv.appendChild(img);
            cartDiv.appendChild(title);
            cartDiv.appendChild(price);
            cartDiv.appendChild(totalProd);
            cartDiv.appendChild(removeBtn);
            cart.appendChild(cartDiv);
        }

    });

    if (productCountInput.value != NaN) {
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(productCountInput);
        div.appendChild(orderButton);
        cat.appendChild(div);
    }
}

function calcItemPrice(i, prodAmmount, prodPrice) {

    console.log(typeof (prodAmmount * prodPrice));
    console.log("P*P: " + prodAmmount * prodPrice);
    return (prodAmmount * prodPrice).toFixed(2);
}
function removeFromCart(cartDiv) {
    cartDiv.remove();
}


function totalCartPrice() {

}

export { buildProdCard };
