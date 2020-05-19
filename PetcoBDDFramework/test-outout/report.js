$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/SAI KUMAR/git/Cucumber-BDD-Project/PetcoBDDFramework/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Petco Login Feature",
  "description": "",
  "id": "petco-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Petco Invalid Login Test Scenario",
  "description": "",
  "id": "petco-login-feature;petco-invalid-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "title of login page is Sign in",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user enters \"\u003cusername1\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user clicks on Sign In button",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "verify invalid login error message",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "petco-login-feature;petco-invalid-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username1",
        "password"
      ],
      "line": 42,
      "id": "petco-login-feature;petco-invalid-login-test-scenario;;1"
    },
    {
      "cells": [
        "prasanna.kandregula@gmail.com",
        "Lucky@143"
      ],
      "line": 43,
      "id": "petco-login-feature;petco-invalid-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16529971900,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Petco Invalid Login Test Scenario",
  "description": "",
  "id": "petco-login-feature;petco-invalid-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "title of login page is Sign in",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user enters \"prasanna.kandregula@gmail.com\" and \"Lucky@143\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user clicks on Sign In button",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "verify invalid login error message",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 2579400600,
  "status": "passed"
});
formatter.match({
  "location": "login.title_of_login_page_is_Sign_in()"
});
formatter.result({
  "duration": 18551900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prasanna.kandregula@gmail.com",
      "offset": 13
    },
    {
      "val": "Lucky@143",
      "offset": 49
    }
  ],
  "location": "login.user_enters_and(String,String)"
});
formatter.result({
  "duration": 4255102300,
  "status": "passed"
});
formatter.match({
  "location": "login.user_clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 2779545300,
  "status": "passed"
});
formatter.match({
  "location": "login.verify_invalid_login_errormessage()"
});
formatter.result({
  "duration": 879859300,
  "status": "passed"
});
formatter.match({
  "location": "login.close_the_browser()"
});
formatter.result({
  "duration": 40400,
  "status": "passed"
});
formatter.after({
  "duration": 1341695500,
  "status": "passed"
});
});