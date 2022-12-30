import { items } from "./items";
import { buildProdCard } from "./productCard";


const categorySelection = document.getElementById("category");
categorySelection.addEventListener("change", () => getItemsByCat(items));

let relevantProd = [];
function getItemsByCat(items) {
    document.getElementById("cat").replaceChildren();
    relevantProd.splice(0, relevantProd.length);
    const category = document.getElementById('category').value;

    items.map((item) => {
        if (item.category === category) {
            relevantProd.push(item);
        }
    });
    console.log(relevantProd);
    let cat = document.getElementById('cat');
    for (let i = 0; i < items.length; i++) {
        buildProdCard(i, relevantProd);
    }
}
