import { faker } from '@faker-js/faker' 

class Checkout {
    verifyCheckoutPageAccess(){
        cy.url().should('contain', 'checkout')
    }

    verifyAddressDetails(){
        cy.get('.heading').first().should('have.text', 'Address Details')
        cy.get('.heading').last().should('have.text', 'Review Your Order')
    }

    addOrderComment(){
        cy.get('.form-control').type(faker.commerce.productDescription())
        cy.get('.btn-default.check_out').click()
    }
}

export default new Checkout()