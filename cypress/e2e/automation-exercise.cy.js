/// <reference types="cypress"/>
import register from '../pages/register'
import login from '../pages/login'
import menu, { MENUS } from '../pages/menu'
import contact from '../pages/contact'
import products from '../pages/products'
import home from '../pages/home'
import cart from '../pages/cart'
import checkout from '../pages/checkout'
import payment from '../pages/payment'

describe('Automation Exercise', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Test Case 1: Register a new user', () => {
    menu.navigateTo(MENUS.SIGNUP_LOGIN)
    register.fillRegistrationForm()
    register.verifyRegistrationCompleted()
  })

  it('Test Case 2: Login User with correct email and password', () => {
    cy.fixture('user').then((user) => {
      menu.navigateTo(MENUS.SIGNUP_LOGIN)
      login.fillLoginForm(user.email, user.password)
      login.verifySuccessfulLogin(user.name)
    })
  })

  it('Test Case 3: Login User with incorrect email and password', () => {
    cy.fixture('user_invalid').then((user_invalid) => {
      menu.navigateTo(MENUS.SIGNUP_LOGIN)
      login.fillLoginForm(user_invalid.email, user_invalid.password )
      login.verifyInvalidLoginErrorMessage()
    })
  })

  it('Test Case 4: Logout after login', () => {
    cy.fixture('user').then((user) => {
      menu.navigateTo(MENUS.SIGNUP_LOGIN)
      login.fillLoginForm(user.email, user.password)
      login.verifySuccessfulLogin(user.name)
      menu.navigateTo(MENUS.LOGOUT)
      login.verifySuccessfulLogout()
    })
  })

  it('Test Case 5: Register User with existing email', () => {
    cy.fixture('user').then((user) => {
      menu.navigateTo(MENUS.SIGNUP_LOGIN)
      register.startRegistration(user.name, user.email)
      register.verifyExistingUserMessage()
    })
  })

  it('Test Case 6: Contact Us Form', () => {
    menu.navigateTo(MENUS.CONTACT)
    contact.fillContactForm()
    contact.verifyContactFormSubmission()
  })

  it('Test Case 8: Verify All Products and product detail page', () => {
    menu.navigateTo(MENUS.PRODUCTS)
    products.verifyProductPageAccess()
    products.selectFirstProductInList()
    products.verifyProductDetailsDisplayed()
  })

  it('Test Case 9: Search Product', () => {
    menu.navigateTo(MENUS.PRODUCTS)
    products.verifyProductPageAccess()
    products.searchForProduct('Shirt')
    products.verifyProductFound()
  })

  it('Test Case 10: Verify Subscription in home page', () => {
    home.navigateToSubscription()
    home.fillSubscriptionForm()
    home.verifySubscriptionCompleted()
  })

  it('Test Case 15: Place Order: Register before Checkout', () => {
    menu.navigateTo(MENUS.SIGNUP_LOGIN)
    register.fillRegistrationForm()
    register.verifyRegistrationCompleted()
    home.addItemToCart()
    home.viewCart()
    cart.proceedToCheckout()
    checkout.verifyCheckoutPageAccess()
    checkout.verifyAddressDetails()
    checkout.addOrderComment()
    payment.fillPaymentForm()
    payment.verifyPaymentAndOrderCompleted()
    menu.navigateTo(MENUS.DELETE_ACCOUNT)
    home.verifyAccountDeletion()
  })
})