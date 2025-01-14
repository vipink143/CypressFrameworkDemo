import loginPageElements from "../../PageObjects/PageActions/LoginPageActions";

// let login_elements= new loginPageElements();
describe("login feature to automate",()=>{

    it("Login feature by using username and password",()=>{
       // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") ;

        // set environment variables
       cy.visit(Cypress.env('orangeHrm_url'));
       cy.url().should('contain','https://opensource-demo.orangehrmlive');

        let userData;
        // using fixture file for data driven testing
        cy.fixture("LoginPageData").then((login_data)=>{
            userData=login_data;

            let login_elements= new loginPageElements();

            login_elements.username(userData.username);
            login_elements.password(userData.password);
            login_elements.loginButton();
            login_elements.verifydashboard();


        })




        
       

    })
})