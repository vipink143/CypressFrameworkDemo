const registerPageLocator= require("../PageElements/RegisterPageElement.json")

class RegisterPage
{

    get registerPageLink() { return cy.get(registerPageLocator.registerPageElementLocators.newRegistrationEntryPointLocator)}
    get firstNameInput() { return cy.get(registerPageLocator.registerPageElementLocators.firtsNameLocator)}
    get lastNameInput() { return cy.get(registerPageLocator.registerPageElementLocators.lastNameLocator)}
    get emailInput() { return cy.get(registerPageLocator.registerPageElementLocators.emailLocator)}
    get telephoneInput() { return cy.get(registerPageLocator.registerPageElementLocators.telephoneLocator)}
    get passwordInput() { return cy.get(registerPageLocator.registerPageElementLocators.passwordLocator)}
    get confirmPasswordInput() { return cy.get(registerPageLocator.registerPageElementLocators.confirmPassLocator)}
    get checkboxPolicy() { return cy.get(registerPageLocator.registerPageElementLocators.policyCheckboxLocator)}
    get submitBtn() { return cy.get(registerPageLocator.registerPageElementLocators.submitRegisterPageLocator)}
    get successTextVerify() { return cy.get (registerPageLocator.registerPageElementLocators.successTextLocator)}


    clickRegisterPageLink()
    {
        this.registerPageLink.click()
    }


    enterFirstName(firstName)
    {
        this.firstNameInput.type(firstName)
        return this
    }

    enterLastName(lastName)
    {
        this.lastNameInput.type(lastName)
        return this
    }
    enterEmail(email)
    {
        this.emailInput.type(email)
        return this
    }

    enterTelephone(telephone)
    {
        this.telephoneInput.type(telephone)
        return this
    }

    enterPassword(password)
    {
        this.passwordInput.type(password)
        return this

    }
    enterConfirmPassword(confirmPassword)
    {
        this.confirmPasswordInput.type(confirmPassword)
        return this
    }

    privacyPolicy(checkbox)
    {
        if(checkbox)
        {
            this.checkboxPolicy.eq(0).check();
            
        }
        else{
            this.checkboxPolicy.eq(0).uncheck()
            
        }
        return this

    }

    clickOnSubmitBtn()
    {
        this.submitBtn.click()
    }


    getSuccessText()
    {
        this.successTextVerify.should('contains.text','Your Account Has Been Created!')
    }





} export default new RegisterPage