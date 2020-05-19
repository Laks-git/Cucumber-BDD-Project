Feature: Petco Home Page Feature


#without Examples Keyword
@RegressionTest
Scenario: Petco Home Page Test Scenario
Given user launches Chrome Browser
When user open Petco site
Then verify user is on home page
Then verify searchbox is displayed on home page
Then verify searchbox button is displayed on home page
Then close the Petco site