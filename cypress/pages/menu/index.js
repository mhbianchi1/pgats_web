const MENUS = {
    PRODUCTS: 'Products',
    SIGNUP_LOGIN: 'Signup',
    CONTACT: 'Contact us',
    LOGOUT: 'Logout',
    DELETE_ACCOUNT: 'Delete Account'
}

class Menu {
    navigateTo(menu){
        cy.contains(menu).click()
    }
}

export default new Menu()
export { MENUS }