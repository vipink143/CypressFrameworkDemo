import { faker } from '@faker-js/faker';
import RegisterPage from '../../PageObjects/PageActions/RegisterPage';

describe("Account Registration",{ tags: ['@Register', '@regression']},()=>{

    beforeEach(()=>{

        cy.visit(Cypress.env('base_url'))
        RegisterPage.clickRegisterPageLink()

    })


    it("should register the new user",()=>{

        let password= faker.internet.password();

        RegisterPage.enterFirstName(faker.person.firstName())
        RegisterPage.enterLastName(faker.person.lastName())
        RegisterPage.enterEmail(faker.internet.email())
        RegisterPage.enterTelephone(faker.phone.number())
        RegisterPage.enterPassword(password)
        RegisterPage.enterConfirmPassword(password)
        RegisterPage.privacyPolicy(true)
        RegisterPage.clickOnSubmitBtn()



        RegisterPage.getSuccessText()
        





    })
})