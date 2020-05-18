$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/SAI KUMAR/git/Cucumber-BDD-Project/PetcoBDDFramework/src/main/java/Features/AddToCart.feature");
formatter.feature({
  "line": 1,
  "name": "Petco AddtoCart Feature for Guest and Registered users",
  "description": "",
  "id": "petco-addtocart-feature-for-guest-and-registered-users",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Petco AddtoCart Feature for Guest user",
  "description": "",
  "id": "petco-addtocart-feature-for-guest-and-registered-users;petco-addtocart-feature-for-guest-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "guest user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of home page is Petco Supplies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user searches for an item",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user naviagtes to PDP by choosing specific item",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user adds item to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartSteps.guest_user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartSteps.title_of_home_page_is_Petco_Supplies()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartSteps.user_searches_for_an_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartSteps.user_naviagtes_to_PDP_by_choosing_specific_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartSteps.user_adds_item_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Petco AddtoCart Feature for Registered user",
  "description": "",
  "id": "petco-addtocart-feature-for-guest-and-registered-users;petco-addtocart-feature-for-registered-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "registered user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of home page is Petco Supplies",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" in Sign In page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on Sign In button and navigates to Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user searches for an item",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user naviagtes to PDP by choosing specific item",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user adds item to cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "petco-addtocart-feature-for-guest-and-registered-users;petco-addtocart-feature-for-registered-user;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 26,
      "id": "petco-addtocart-feature-for-guest-and-registered-users;petco-addtocart-feature-for-registered-user;;1"
    },
    {
      "cells": [
        "prasanna.kandregula.lpk@gmail.com",
        "Lucky@143"
      ],
      "line": 27,
      "id": "petco-addtocart-feature-for-guest-and-registered-users;petco-addtocart-feature-for-registered-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Petco AddtoCart Feature for Registered user",
  "description": "",
  "id": "petco-addtocart-feature-for-guest-and-registered-users;petco-addtocart-feature-for-registered-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "registered user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of home page is Petco Supplies",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"prasanna.kandregula.lpk@gmail.com\" and \"Lucky@143\" in Sign In page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on Sign In button and navigates to Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user searches for an item",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user naviagtes to PDP by choosing specific item",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user adds item to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartSteps.registered_user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartSteps.title_of_home_page_is_Petco_Supplies()"
});
formatter.result({
  "status": "skipped"
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
  "location": "AddToCartSteps.user_enters_and_in_Sign_In_page(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartSteps.user_clicks_on_Sign_In_button_and_navigates_to_Home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartSteps.user_searches_for_an_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartSteps.user_naviagtes_to_PDP_by_choosing_specific_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartSteps.user_adds_item_to_cart()"
});
formatter.result({
  "status": "skipped"
});
});