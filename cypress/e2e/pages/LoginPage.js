

export class LoginPage {
    enteredEmail(email) {
        if(email == undefined) {
            alert('email is required')
            return
        }
        cy.get('#email').type(email)
    }

    enteredPassword(password) {
        if(password == undefined) {
            alert('password is required')
            return
        }
        cy.get('#password').type(password)
    }

    clickAnyElement(textButton) {
        if(textButton == undefined) {
            alert('textButton is required')
            return
        }
        cy.contains(textButton).click()
    }

    validateProcess(validateTextElement) {
        if(validateTextElement == undefined) {
            alert('validateTextElement is required')
            return
        }
        cy.get('[routerlink="/profile"] > .collapsed > .description').should('have.text', validateTextElement).and('be.visible')
    }
}

/*

*/ 