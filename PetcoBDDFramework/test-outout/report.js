$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/SAI KUMAR/git/Cucumber-BDD-Project/PetcoBDDFramework/src/main/java/Features/AddToCart.feature");
formatter.feature({
  "line": 1,
  "name": "Petco AddtoCart Feature for Registered users",
  "description": "",
  "id": "petco-addtocart-feature-for-registered-users",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Petco AddtoCart Feature for Registered user",
  "description": "",
  "id": "petco-addtocart-feature-for-registered-users;petco-addtocart-feature-for-registered-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    },
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "registered user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of home page is Petco Supplies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters \"\u003cusername1\u003e\" and \"\u003cpassword1\u003e\" in Sign In page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Sign In button and navigates to Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user searches for an item",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user naviagtes to PDP by choosing specific item",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user adds item to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "navigates to cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "selects second Day Delivery",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enters Credit card details",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "verifies Place Order button enabled or not",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "places order based on availability of Place Order button",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "petco-addtocart-feature-for-registered-users;petco-addtocart-feature-for-registered-user;",
  "rows": [
    {
      "cells": [
        "username1",
        "password1"
      ],
      "line": 23,
      "id": "petco-addtocart-feature-for-registered-users;petco-addtocart-feature-for-registered-user;;1"
    },
    {
      "cells": [
        "prasanna.kandregula.lpk@gmail.com",
        "Lucky@143"
      ],
      "line": 24,
      "id": "petco-addtocart-feature-for-registered-users;petco-addtocart-feature-for-registered-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22967116500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Petco AddtoCart Feature for Registered user",
  "description": "",
  "id": "petco-addtocart-feature-for-registered-users;petco-addtocart-feature-for-registered-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    },
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "registered user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of home page is Petco Supplies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters \"prasanna.kandregula.lpk@gmail.com\" and \"Lucky@143\" in Sign In page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Sign In button and navigates to Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user searches for an item",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user naviagtes to PDP by choosing specific item",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user adds item to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "navigates to cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "selects second Day Delivery",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enters Credit card details",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "verifies Place Order button enabled or not",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "places order based on availability of Place Order button",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCartSteps.registered_user_is_on_home_page()"
});
formatter.result({
  "duration": 3399490000,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartSteps.title_of_home_page_is_Petco_Supplies()"
});
formatter.result({
  "duration": 190934300,
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
  "location": "AddToCartSteps.user_enters_and_in_Sign_In_page(String,String)"
});
formatter.result({
  "duration": 20684779500,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartSteps.user_clicks_on_Sign_In_button_and_navigates_to_Home_page()"
});
formatter.result({
  "duration": 3216702100,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartSteps.user_searches_for_an_item()"
});
formatter.result({
  "duration": 6055994800,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartSteps.user_naviagtes_to_PDP_by_choosing_specific_item()"
});
formatter.result({
  "duration": 42741885900,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d81.0.4044.138)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-T3PS0N3\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.138, chrome: {chromedriverVersion: 80.0.3987.16 (320f6526c1632..., userDataDir: C:\\Users\\SAIKUM~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:60687}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 54a5e1a90ec292a858d530f42b5bb0f4\n*** Element info: {Using\u003dxpath, value\u003d//a[@id\u003d\u0027catalogEntry_img301024\u0027]/img[@class\u003d\u0027img-responsive\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat seleniumPages.Page_PetcoAddToCartpage.navigatetoPDP(Page_PetcoAddToCartpage.java:40)\r\n\tat stepDefinations.AddToCartSteps.user_naviagtes_to_PDP_by_choosing_specific_item(AddToCartSteps.java:74)\r\n\tat ✽.Then user naviagtes to PDP by choosing specific item(C:/Users/SAI KUMAR/git/Cucumber-BDD-Project/PetcoBDDFramework/src/main/java/Features/AddToCart.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AddToCartSteps.user_adds_item_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartSteps.navigates_to_cart_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartSteps.proceed_to_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartSteps.selects_nd_Day_Delivery(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartSteps.enters_Credit_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartSteps.verifies_Place_Order_button_enabled_or_not()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddToCartSteps.places_order_based_on_availability_of_Place_Order_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 8252464000,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-T3PS0N3\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.138, chrome: {chromedriverVersion: 80.0.3987.16 (320f6526c1632..., userDataDir: C:\\Users\\SAIKUM~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:60687}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 54a5e1a90ec292a858d530f42b5bb0f4\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:452)\r\n\tat common.Page_BasePage.closeBrowser(Page_BasePage.java:22)\r\n\tat stepDefinations.login.tearDown(login.java:33)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: java.lang.RuntimeException: java.util.concurrent.TimeoutException\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilUnavailable(UrlChecker.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverService.stop(DriverService.java:224)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:95)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\t... 63 more\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(Unknown Source)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:156)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilUnavailable(UrlChecker.java:115)\r\n\t... 66 more\r\n",
  "status": "failed"
});
});