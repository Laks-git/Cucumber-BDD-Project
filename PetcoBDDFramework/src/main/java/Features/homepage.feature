Feature: Petco Home Page Feature


#without Examples Keyword
@SmokeTest @RegressionTest
Scenario: Petco Home Page Test Scenario
Given user launches Chrome Browser with Petco URL
When user navigates to home page
Then verify user is on home page
Then verify searchbox is displayed on home page
Then verify searchbox button is displayed on home page
Then close the Petco site