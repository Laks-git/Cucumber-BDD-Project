Feature: Create Account/Registration feature for new customer's

@SmokeTest @RegressionTest
Scenario: Verify user able to create account/register as new user

Given User is on Registration page
When Registration form title matches
Then enter all the required fields and submit the registration form
And navigate to Homepage

