
import { items } from "./items"

function initialize() {
    let cat = document.getElementById('cat');
    for (let i = 0; i < items.length; i++) {
        let div = document.createElement('div');
        div.setAttribute('style', 'border: 0.2em solid black;margin:1em;font-family:Times New Roman-serif;height: 15em;width: 8em;border-radius: 15px; text-align: center;background-color: lightgreen;');
        div.classList.add('catalog-item');
        let img = document.createElement('img');
        img.setAttribute('style', 'width:3em', 'height:3em');
        img.src = items[i].image;
        img.setAttribute('style', 'width:3em;height:3em');

        let title = document.createElement('p');
        title.innerHTML = items[i].name;
        title.setAttribute('style', 'size:0.5em')

        let price = document.createElement('p');
        price.innerHTML = "price:" + items[i].price + " shmekels";

        let productCountInput = document.createElement('input');
        productCountInput.placeholder = 'Ammount';
        productCountInput.setAttribute('style', 'width:4.5em;margin-top: 1em;');

        let orderButton = document.createElement('button');
        orderButton.innerHTML = "add to cart";
        orderButton.setAttribute('style', 'margin-top: 2em;');

        orderButton.addEventListener('click', () => {
            let cart = document.getElementById('cart');
            let cartDiv = document.createElement('div');
            cartDiv.setAttribute('style', 'border: 0.2em solid black;margin:1em;font-family:Times New Roman-serif;height: 15em;width: 8em;border-radius: 15px; text-align: center;background-color: lightgreen;');
            let img = document.createElement('img');
            img.setAttribute('style', 'width:3em', 'height:3em');
            img.src = items[i].image;
            img.setAttribute('style', 'width:3em;height:3em');

            let title = document.createElement('p');
            title.innerHTML = items[i].name;
            title.setAttribute('style', 'size:0.5em')

            let price = document.createElement('p');
            price.innerHTML = "price:" + items[i].price + " shmekels";
            cartDiv.appendChild(img);
            cartDiv.appendChild(title);
            cartDiv.appendChild(price);
            cartDiv.appendChild(productCountInput);
            cart.appendChild(cartDiv);
        });


        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(productCountInput);
        div.appendChild(orderButton);
        cat.appendChild(div);
    }
}


export { initialize };

