
let loginElementsLocators= require ("../PageElements/LoginPageElements.json")


// export before class
class loginPageElements
{
   

    username(username_value)
    {
        cy.get(loginElementsLocators.loginPageLocators.username_text)
        .type(username_value)
        .should('be.visible')
        return
    }

    password(password_value)
    {
        cy.get(loginElementsLocators.loginPageLocators.password_text)
        .type(password_value)
        .should('be.visible')
        return
    }

    loginButton()
    {
        cy.get(loginElementsLocators.loginPageLocators.loginButton_text)
        .click()
        .should('be.enabled')
        return
    }

    
    verifydashboard()
    {
        let expText="Dashboard"
        cy.get(loginElementsLocators.loginPageLocators.verificationText).then((verify_text)=>{
            let actText=verify_text.text();
            expect(actText).to.equal(expText);
        })
    }



} export default loginPageElements