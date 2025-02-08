//import { ENDPOINT_PREFIX } from "../../config/CONSTANTS"
//const routes= require('../config/routes')

import LoginPage from "../../PageObjects/PageActions/LoginPage"


describe("Login with valid and invalid credentials",()=>{

    beforeEach(()=>{
        cy.visit(Cypress.env('base_url'));

        cy.fixture('LoginUserData.json').as('users')


    })



    it("Login with valid credentials",()=>{

       // LoginPage.loginWithCredentials(this.users.validUser.email,this.users.validUser.password);


        cy.fixture('LoginUserdata.json').then((users)=>{
            LoginPage.loginWithCredentials(users.validUser.email,users.validUser.password);
           
        })
        
         LoginPage.verifySuccessText.eq(2).should('contains.text','My Account')


    })

    it("Login with Invalid credentials",()=>{

       // LoginPage.loginWithCredentials(this.users.invalidUser.email,this.users.invalidUser.password);

        cy.fixture('LoginUserdata.json').then((users)=>{
            LoginPage.loginWithCredentials(users.invalidUser.email,users.invalidUser.password);

        })
        LoginPage.verifyFailureText.should('contains.text','Warning')
        
    })
})