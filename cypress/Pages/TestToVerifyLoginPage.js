class TestToVerifyLoginPage{
        username ='(//input[contains(@class,"oxd-input")])[1]';
        password='//input[@name="password"]';
naviagte(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
}
clickonusername(Adminname,Password){
    cy.wait(500)
    cy.xpath(this.username).should('be.visible').type(Adminname)
    cy.xpath(this.password).should('be.visible').type(Password)
    return this;
}
}
export default TestToVerifyLoginPage