import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../login/loginPage";
Given("A user open the login page", () => {
  LoginPage.visit();
});
When("Enter invalid login Username {string}", (username) => {
  LoginPage.username(username);
});
And("Enter invalid login Password {string}", (password) => {
  LoginPage.password(password);
});
And("A user click on the login button", () => {
  LoginPage.submitBtn();
});
Then("User will be receiving a fail message {string}", (errormessage) => {
  LoginPage.shouldShowerrorMessage(errormessage);
});

And("Enter valid login Password {string}", (password) => {
  LoginPage.password(password);
});
Then("User will be receiving a fail message {string}", (errormessage) => {
  LoginPage.shouldShowerrorMessage(errormessage);
});

And("Enter valid login Username {string}", (username) => {
  LoginPage.username(username);
});
Then("User will be receiving a fail message {string}", () => {
  LoginPage.shouldShowerrorMessage(errormessage);
});

When("Enter valid login Username {string}", (username) => {
  LoginPage.username(username);
});
And("Enter valid login Password {string}", (password) => {
  LoginPage.password(password);
});
Then("User will be redirect at home page {string}", (red) => {
  cy.log(red);
});

Then("Click on Forget password link and verify Url", () => {
  LoginPage.forgetpasswords();
});

When("A user Enter invalid E-mail {string}", (reset_Email) => {
  LoginPage.enterEmail_resetPassword(reset_Email);
});
And("A user click on the send Email Button", () => {
  LoginPage.sendEmail_button();
});
Then(
  "Verify the message successfully send mail to reset password {string}",
  (verifyMessage) => {
    LoginPage.verifySuccessfullyMessage(verifyMessage);
  }
);
