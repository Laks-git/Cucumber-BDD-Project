Feature: Petco AddtoCart Feature for Guest and Registered users


@SmokeTest
Scenario: Petco AddtoCart Feature for Guest user

Given guest user is on home page
When title of home page is Petco Supplies
Then user searches for an item
Then user naviagtes to PDP by choosing specific item
Then user adds item to cart

	
@RegressionTest
Scenario Outline: Petco AddtoCart Feature for Registered user

Given registered user is on home page
When title of home page is Petco Supplies
Then user enters "<username>" and "<password>" in Sign In page
Then user clicks on Sign In button and navigates to Home page
Then user searches for an item
Then user naviagtes to PDP by choosing specific item
Then user adds item to cart

Examples:
	| 				username 			 | password |
	| prasanna.kandregula.lpk@gmail.com  | Lucky@143 |
