const loginLocators=require("../PageElements/LoginPageElements.json")

class LoginPage
{

    get emailInput()   { return cy.get(loginLocators.loginElementLocators.loginEmail)}
    get passwordInput() {return cy.get(loginLocators.loginElementLocators.loginPassword)}
    get loginBtn() { return cy.get(loginLocators.loginElementLocators.submitOnLogin)}

    get verifySuccessText() {return cy.get(loginLocators.loginElementLocators.successText)};
    get verifyFailureText() {return cy.get(loginLocators.loginElementLocators.failureText)};



    loginWithCredentials(email,password)
    {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.loginBtn.click()
    }

} export default new LoginPage