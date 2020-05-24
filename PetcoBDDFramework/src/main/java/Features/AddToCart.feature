Feature: Petco AddtoCart Feature for Registered users


@SmokeTest @RegressionTest
Scenario Outline: Petco AddtoCart Feature for Registered user

Given registered user is on home page
When title of home page is Petco Supplies
Then user enters "<username1>" and "<password1>" in Sign In page
Then user clicks on Sign In button and navigates to Home page
Then user searches for an item
Then user naviagtes to PDP by choosing specific item
Then user adds item to cart
Then navigates to cart page
And proceed to checkout
Then selects second Day Delivery
Then Enters Credit card details
Then verifies Place Order button enabled or not
And places order based on availability of Place Order button


Examples:
	| 				username1			 | password1 |
	| prasanna.kandregula.lpk@gmail.com  | Lucky@143 |

	

