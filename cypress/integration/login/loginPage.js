const url = "https://d1g5e94sevp1ds.cloudfront.net/login";
const username_input = '.MuiInputBase-root input[name="email"]';
const password_input = '.MuiInputBase-root input[name="password"]';
const loginBtn = '.MuiBox-root button[type="submit"]';
const errorMsg = ".jss2";
const forgetpassword = ".MuiButton-textSizeSmall";
const enter_EmailReset_pass = 'input[type="email"]';
const succfullySendMsg = ".MuiSnackbarContent-message";
const sentEmail_button = '.MuiBox-root button[type="submit"]';

class LoginPage {
  static visit() {
    cy.visit(url);
  }
  static username(username) {
    cy.get(username_input).type(username);
  }
  static password(password) {
    cy.get(password_input).type(password);
  }
  static submitBtn() {
    cy.get(loginBtn).click();
  }
  static shouldShowerrorMessage(errormessage) {
    cy.get(errorMsg).contains(errormessage);
  }

  static forgetpasswords() {
    cy.get(forgetpassword).click();
    cy.url().should("contains", "reset");
  }

  static enterEmail_resetPassword(enterEmail) {
    cy.get(enter_EmailReset_pass).type(enterEmail);
  }
  static sendEmail_button() {
    cy.get(sentEmail_button).click();
    cy.wait(2000);
  }
  static verifySuccessfullyMessage(verifyMessage) {
    cy.get(succfullySendMsg).should("have.text", verifyMessage);
  }
}
export default LoginPage;
