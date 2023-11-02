package stepDefinations;

import common.Page_BasePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import seleniumPages.Page_PetcoHomepage;

public class HomePage {
	
	Page_PetcoHomepage petcoHomePage = new Page_PetcoHomepage();
	Page_BasePage basepage = new Page_BasePage();

	@Before
	public void launchBrowser()
	{
		basepage.launchPetcoURL();
	}

	@After
	public void closeBrowser()
	{
		basepage.closeBrowser();
	}
	
	@Given("^user launches Chrome Browser with Petco URL$")
	public void launch_ChromeBrowser_withPetcoURL()
		{
	
		}

	@Then("^user navigates to home page$")
	
		public void navigates_to_petcoHomePage() {
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
  
    public void close_petcoSite()
    {
	  
    }

}
