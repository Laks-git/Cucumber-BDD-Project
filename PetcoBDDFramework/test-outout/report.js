$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/SAI KUMAR/git/Cucumber-BDD-Project/PetcoBDDFramework/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Petco Login Feature",
  "description": "",
  "id": "petco-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#without Examples Keyword"
    },
    {
      "line": 5,
      "value": "#Scenario: Petco Login Test Scenario"
    },
    {
      "line": 6,
      "value": "#Given user is already on Login Page"
    },
    {
      "line": 7,
      "value": "#When title of login page is Sign in"
    },
    {
      "line": 8,
      "value": "#Then user enters \"prasanna.kandregula.lpk@gmail.com\" and \"Lucky@143\""
    },
    {
      "line": 9,
      "value": "#Then user clicks on Sign In button"
    },
    {
      "line": 10,
      "value": "#Then user is on home page"
    },
    {
      "line": 14,
      "value": "#with Examples Keyword"
    }
  ],
  "line": 16,
  "name": "Petco Valid Login Test Scenario",
  "description": "",
  "id": "petco-login-feature;petco-valid-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "title of login page is Sign in",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user clicks on Sign In button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "petco-login-feature;petco-valid-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 27,
      "id": "petco-login-feature;petco-valid-login-test-scenario;;1"
    },
    {
      "cells": [
        "prasanna.kandregula.lpk@gmail.com",
        "Lucky@143"
      ],
      "line": 28,
      "id": "petco-login-feature;petco-valid-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Petco Valid Login Test Scenario",
  "description": "",
  "id": "petco-login-feature;petco-valid-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "title of login page is Sign in",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters \"prasanna.kandregula.lpk@gmail.com\" and \"Lucky@143\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user clicks on Sign In button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 20890306000,
  "status": "passed"
});
formatter.match({
  "location": "login.title_of_login_page_is_Sign_in()"
});
formatter.result({
  "duration": 200305700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prasanna.kandregula.lpk@gmail.com",
      "offset": 13
    },
    {
      "val": "Lucky@143",
      "offset": 53
    }
  ],
  "location": "login.user_enters_and(String,String)"
});
formatter.result({
  "duration": 3663781900,
  "status": "passed"
});
formatter.match({
  "location": "login.user_clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 3552790600,
  "status": "passed"
});
formatter.match({
  "location": "login.user_is_on_home_page()"
});
formatter.result({
  "duration": 126150300,
  "status": "passed"
});
formatter.match({
  "location": "login.close_the_browser()"
});
formatter.result({
  "duration": 1321000100,
  "status": "passed"
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
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user clicks on Sign In button",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "petco-login-feature;petco-invalid-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 41,
      "id": "petco-login-feature;petco-invalid-login-test-scenario;;1"
    },
    {
      "cells": [
        "prasanna.kandregula@gmail.com",
        "Lucky@143"
      ],
      "line": 42,
      "id": "petco-login-feature;petco-invalid-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 42,
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
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 16025573800,
  "status": "passed"
});
formatter.match({
  "location": "login.title_of_login_page_is_Sign_in()"
});
formatter.result({
  "duration": 12930200,
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
  "duration": 3476227900,
  "status": "passed"
});
formatter.match({
  "location": "login.user_clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 3174967200,
  "status": "passed"
});
formatter.match({
  "location": "login.close_the_browser()"
});
formatter.result({
  "duration": 1713729100,
  "status": "passed"
});
});