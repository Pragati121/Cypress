it('swag lab login test',function(){
    const apparel ="//a[contains(text(),' Apparel ')]";
    cy.visit('https://demo.nopcommerce.com/')
    cy.xpath(apparel).click()
});