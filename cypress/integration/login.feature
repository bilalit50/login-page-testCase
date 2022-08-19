Feature: Login of CloudFront

    Feature This feature is requried for a user to login
    
       Scenario: To check login functionality with invalid email-ID and invalid password
       Given A user open the login page
       When Enter invalid login Username "invlaid@gmail.com"
       And Enter invalid login Password "invlaid"
       And A user click on the login button
       Then User will be receiving a fail message "Your account has been blocked after multiple consecutive login attempts."


       Scenario: To check login functionality with invalid email-ID and valid password
       Given A user open the login page
       When Enter invalid login Username "invlaid@gmail.com"
       And Enter valid login Password "valid"
       And A user click on the login button
       Then User will be receiving a fail message "Your account has been blocked after multiple consecutive login attempts."

       Scenario: To check login functionality with valid email-ID and invalid password
       Given A user open the login page
       When Enter valid login Username "vlaid@gmail.com"
       And Enter invalid login Password "invalid"
       And A user click on the login button
       Then User will be receiving a fail message "Your account has been blocked after multiple consecutive login attempts."

       Scenario: To check login functionality with valid email-ID and valid password
       Given A user open the login page
       When Enter valid login Username "valid@gmail.com"
       And Enter valid login Password "valid"
       And A user click on the login button
       Then User will be redirect at home page "User should be able to login"

      
       Scenario: Click forget password link and verify Url
       Then Click on Forget password link and verify Url

       Scenario: To check reset password functionality
       When A user Enter invalid E-mail "valid@gmail.com"
       And A user click on the send Email Button
       Then Verify the message successfully send mail to reset password "We've just sent you an email to reset your password."