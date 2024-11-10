class Products {
    verifyProductPageAccess(){
        cy.url().should('contain', 'products')
        cy.get('.title').should('be.visible').and('contain', 'All Products')
    }

    selectFirstProductInList(){
        cy.get('.single-products')
            .should('be.visible')
            .and('have.length.at.least', 1)
            .first()
            .parent()
            .contains('View Product')
            .click()
    }

    searchForProduct(product){
        cy.get('input#search_product').type(product)
        cy.get('button#submit_search').click()
    }

    verifyProductDetailsDisplayed(){
        cy.get('.product-information > h2').should('be.visible')
        cy.get('.product-information p').should('be.visible').and('have.length', 4)
        cy.get('.product-information span span').should('be.visible')
    }

    verifyProductFound(){
        cy.get('.title').should('be.visible').and('contain', 'Searched Products')
        cy.get('.single-products')
            .should('be.visible')
            .and('have.length.at.least', 1)
    }
}

export default new Products()