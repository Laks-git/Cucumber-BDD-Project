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
formatter.before({
  "duration": 16739112600,
  "status": "passed"
});
formatter.before({
  "duration": 22462519400,
  "status": "passed"
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
  "duration": 10349813900,
  "status": "passed"
});
formatter.match({
  "location": "login.title_of_login_page_is_Sign_in()"
});
formatter.result({
  "duration": 295930200,
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
  "duration": 6313239100,
  "status": "passed"
});
formatter.match({
  "location": "login.user_clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 4638281800,
  "status": "passed"
});
formatter.match({
  "location": "login.user_is_on_home_page()"
});
formatter.result({
  "duration": 460526000,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Pet Supplies, Pet Food, and Pet Products | Petco]\u003e but was:\u003c[Access Denied]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat seleniumPages.Page_PetcoHomepage.verifyHomePageTitle(Page_PetcoHomepage.java:18)\r\n\tat stepDefinations.login.user_is_on_home_page(login.java:61)\r\n\tat ✽.Then user is on home page(C:/Users/SAI KUMAR/git/Cucumber-BDD-Project/PetcoBDDFramework/src/main/java/Features/login.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "login.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 723355700,
  "status": "passed"
});
formatter.after({
  "duration": 1213426100,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-T3PS0N3\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.138, chrome: {chromedriverVersion: 80.0.3987.16 (320f6526c1632..., userDataDir: C:\\Users\\SAIKUM~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59717}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 904999094c7c6aa6b150ebd804678b24\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat common.Page_BasePage.closeBrowser(Page_BasePage.java:22)\r\n\tat stepDefinations.login.tearDown(login.java:33)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
});