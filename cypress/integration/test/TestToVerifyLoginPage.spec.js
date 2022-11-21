import TestToVerifyLoginPage from "../../Pages/TestToVerifyLoginPage";
const LoginPage =new TestToVerifyLoginPage()
describe('Test user is able to Add Employee', () => {
    before(function () {
        cy.fixture('Data').then(function (data) {
          this.data = data;
        })
      })
it('add items to cart',function(){
LoginPage.naviagte()
LoginPage.clickonusername(this.data.Adminname,this.data.Password);
})
})