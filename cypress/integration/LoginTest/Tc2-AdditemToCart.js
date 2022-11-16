it('swag lab login test',function(){
  const Addcart="(//button[@type='button'])[1]"
  cy.visit('https://demo.nopcommerce.com/')
  cy.get('#small-searchterms')
  .type('Apple MacBook Pro 13-inch{enter}')
  cy.scrollTo(0,700)
cy.xpath(Addcart).click()
cy.scrollTo(0,700)
cy.get('#add-to-cart-button-4').click()
cy.get('#sku-4').should('contain','AP_MBP_13')
cy.screenshot()
});