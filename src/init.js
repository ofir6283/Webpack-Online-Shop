
import { items } from "./items";
import { buildProdCard } from "./productCard";

let relavntArray = []
const categorySelect = document.getElementById("categories");
categorySelect.addEventListener("change", () => getRelevantProducts(items));
function getRelevantProducts(products) {

    document.getElementById("cat").value;
    let cat = document.getElementById('cat');
    for (let i = 0; i < items.length; i++) {
        buildProdCard(i, relevantProd);
    }
}





