import LoginPage from "../../PageObjects/PageActions/LoginPage";
import ProductSearchPage from "../../PageObjects/PageActions/ProductSearchPage";

describe("Search the product",()=>{

    beforeEach(()=>{
        cy.visit(Cypress.env("productSearch_url"))
        
    })




    it("test",()=>{

        ProductSearchPage.searchHeaderProduct()


    })
})