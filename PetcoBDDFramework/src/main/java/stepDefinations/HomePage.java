package stepDefinations;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import seleniumPages.Page_PetcoHomepage;

public class HomePage {
	
	Page_PetcoHomepage petcoHomePage = new Page_PetcoHomepage();

	@Given("^user launches Chrome Browser$")
	public void user_launches_Chrome_Browser() {
	    
		petcoHomePage.launchBrowser();
	}

	@When("^user open Petco site$")
	public void user_open_Petco_site() {
	    
		petcoHomePage.openPetcoURL();
	}

	@Then("^verify user is on home page$")
	public void verify_user_is_on_home_page() {
	    
		petcoHomePage.verifyHomePageTitle();
	}

	@Then("^verify searchbox is displayed on home page$")
	public void verify_searchbox_is_displayed_on_home_page() {
	    
		petcoHomePage.checkSearchBoxIsDisplayed();
	}

	@Then("^verify searchbox button is displayed on home page$")
	public void verify_searchbox_button_is_displayed_on_home_page() {
	    
		petcoHomePage.checkSearchButtonIsDisplayed();
	}


	@Then("^close the Petco site$")
	public void close_the_Petco_site(){
		petcoHomePage.exit();
	}

}
