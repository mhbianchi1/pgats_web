import { faker } from '@faker-js/faker' 

class Home {
    navigateToSubscription(){
        cy.get('input#susbscribe_email').scrollIntoView()
    }

    fillSubscriptionForm(){
        cy.get('input#susbscribe_email').type(faker.internet.email())
        cy.get('button#subscribe').click()
    }

    verifySubscriptionCompleted(){
        cy.contains('You have been successfully subscribed!').should('be.visible')
    }

    addItemToCart(){
        cy.contains("Add to cart").click()
    }

    viewCart(){
        cy.contains("View Cart").click()
    }

    verifyAccountDeletion(){
        cy.get('b').should('contain', 'Account Deleted!')
        cy.get('[data-qa="continue-button"]').click()
    }
}

export default new Home()