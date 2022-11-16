it('swag lab login test',function(){
  const electronics ="//a[contains(text(),' Electronics')]"
  const clickoncameraAndphotos ="//a[contains(text(),' Camera & photo ')]"
  cy.visit('https://demo.nopcommerce.com/')
 cy.xpath(electronics).click()
 cy.xpath(clickoncameraAndphotos).click()
});