class Login {
    fillLoginForm(user, password){
        cy.get('[data-qa="login-email"]').type(user);
        cy.get('[data-qa="login-password"]').type(password, { log: false });
        cy.get('[data-qa="login-button"]').click();
    }

    verifySuccessfulLogin(user){
        cy.get('i.fa-user').parent().should('contain', user)
    }

    verifySuccessfulLogout(){
        cy.url().should('contain', 'login')
        cy.contains("Login to your account").should("be.visible")
    }

    verifyInvalidLoginErrorMessage(){
        cy.get('.login-form form p').parent().should('contain', 'Your email or password is incorrect!')
    }
}

export default new Login()