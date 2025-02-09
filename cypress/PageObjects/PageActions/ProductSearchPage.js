const productLocators = require("../PageElements/ProductSearchElements.json")

class ProductSearchPage
{
    get searchInput() { return cy.get(productLocators.productElementLocators.searchPlaceholder)}


    searchHeaderProduct()
    {
        this.searchInput.type("MacBook")
        .type('{Enter}')
    }


} export default new ProductSearchPage



