import presentDrinks from "./src/presentDrinks.js";
import "./src/searchForm.js";
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

//Al momento del caricamento pagina mostro i cocktail
window.addEventListener("DOMContentLOaded", () => presentDrinks(URL));
