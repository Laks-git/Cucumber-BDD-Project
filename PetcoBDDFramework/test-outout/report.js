$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/SAI KUMAR/git/Cucumber-BDD-Project/PetcoBDDFramework/src/main/java/Features/CreateAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account/Registration feature for new customer\u0027s",
  "description": "",
  "id": "create-account/registration-feature-for-new-customer\u0027s",
  "keyword": "Feature"
});
formatter.before({
  "duration": 27002423300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify user able to create account/register as new user",
  "description": "",
  "id": "create-account/registration-feature-for-new-customer\u0027s;verify-user-able-to-create-account/register-as-new-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    },
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Registration form title matches",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "enter all the required fields and submit the registration form",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigate to Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccount.user_is_on_Registration_page()"
});
formatter.result({
  "duration": 20984816800,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.registration_form_title_matches()"
});
formatter.result({
  "duration": 96339900,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.enter_all_the_required_fields_and_submit_the_registration_form()"
});
formatter.result({
  "duration": 47690164800,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.navigate_to_Homepage()"
});
formatter.result({
  "duration": 42200,
  "status": "passed"
});
formatter.after({
  "duration": 8098768300,
  "status": "passed"
});
});