
import { items } from "./items";
import { buildProdCard } from "./productCard";

let cat = document.getElementById('cat');
for (let i = 0; i < items.length; i++) {
    buildProdCard(i);
}




