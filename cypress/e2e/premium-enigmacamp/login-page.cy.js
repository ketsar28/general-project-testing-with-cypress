/// <reference types="cypress"/>

import { LoginPage } from "../pages/LoginPage"

const loginPage = new LoginPage()

describe("test various scenario in login page", () => {
    before(() => {
        cy.visit('https://dev.premium.enigmacamp.com/auth/login')
    })

    it('user input valid credential', () => {
        loginPage.enteredEmail("jagoo.it@gmail.com")
        loginPage.enteredPassword('Userxyz*123!')
        loginPage.clickAnyElement('Login')
        loginPage.validateProcess('Profile')
    })

    it.skip('user input invalid credential', () => {
        loginPage.enteredEmail("jagoo.it@")
        loginPage.enteredPassword('userxyz*123!')
        loginPage.clickAnyElement('Login')
        loginPage.validateProcess('Profile')
    })

    it.skip('user input unregistered credential', () => {
        loginPage.enteredEmail("tidakjagoo.it@gmail.com")
        loginPage.enteredPassword('Userabc*123!')
        loginPage.clickAnyElement('Login')
        loginPage.validateProcess('Profile')
    })
    it('user click forgot password hyperlink', () => {
        loginPage.clickAnyElement('Forgot Password')
    })
})