$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/SAI KUMAR/git/Cucumber-BDD-Project/PetcoBDDFramework/src/main/java/Features/CreateAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account/Registration feature for new customer\u0027s",
  "description": "",
  "id": "create-account/registration-feature-for-new-customer\u0027s",
  "keyword": "Feature"
});
formatter.before({
  "duration": 23986985000,
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
  "duration": 4341029200,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d81.0.4044.138)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-T3PS0N3\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.138, chrome: {chromedriverVersion: 80.0.3987.16 (320f6526c1632..., userDataDir: C:\\Users\\SAIKUM~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:50015}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e4d4e77f5498a56d9b427304bc7f9121\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.javaformatter.after({
  "duration": 11569642000,
  "status": "passed"
});
});Page_CreateAccount.java:31)\r\n\tat stepDefinations.CreateAccount.user_is_on_Registration_page(CreateAccount.java:33)\r\n\tat ✽.Given User is on Registration page(C:/Users/SAI KUMAR/git/Cucumber-BDD-Project/PetcoBDDFramework/src/main/java/Features/CreateAccount.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateAccount.registration_form_title_matches()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccount.enter_all_the_required_fields_and_submit_the_registration_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccount.navigate_to_Homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3845210700,
  "status": "passed"
});
});