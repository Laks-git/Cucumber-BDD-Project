Feature: OrangeHRM Login Feature


#without Examples Keyword
#Scenario: OrangeHRM Login Test Scenario
#Given user is already on Login Page
#When title of login page is Sign in
#Then user enters "prasanna.kandregula.lpk@gmail.com" and "Lucky@143"
#Then user clicks on Sign In button
#Then user is on home page



#with Examples Keyword
@SmokeTest
Scenario Outline: OrangeHRM Valid Login Test Scenario

Given user is already on Login Page
When title of login page is Sign in
Then user enters "<username>" and "<password>"
Then user clicks on Sign In button
Then user is on home page
Then close the browser


Examples:
	| 				username			 | password |
	| prasanna.kandregula.lpk@gmail.com  | Lucky@143 |
	
@RegressionTest
Scenario Outline: OrangeHRM Invalid Login Test Scenario

Given user is already on Login Page
When title of login page is Sign in
Then user enters "<username>" and "<password>"
Then user clicks on Sign In button
Then verify invalid login error message
Then close the browser


Examples:
	| 				username			 | password |
	| prasanna.kandregula@gmail.com  | Lucky@143 |
