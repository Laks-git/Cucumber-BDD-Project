package stepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import common.Page_BasePage;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import seleniumPages.LoginPage;
import seleniumPages.Page_PetcoAddToCartpage;
import seleniumPages.Page_PetcoHomepage;
 

public class AddToCartSteps {
	
	Page_BasePage basepage = new Page_BasePage();
	Page_PetcoHomepage petcoHomePage = new Page_PetcoHomepage();
	LoginPage loginPage = new LoginPage();
	Page_PetcoAddToCartpage search = new Page_PetcoAddToCartpage();
	
	@Before("@SmokeTest @RegressionTest")
	 public void setUP()
	 {
		basepage.launchPetcoURL();
	 }

	@After("@SmokeTest @RegressionTest")
	 public void tearDown()
	 {
		basepage.closeBrowser();
	 }
		
	@Given("^registered user is on home page$")
	public void registered_user_is_on_home_page() {
		
	}

	@When("^title of home page is Petco Supplies$")
	public void title_of_home_page_is_Petco_Supplies() {
		petcoHomePage.verifyHomePageTitle();
	    
	}

	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\" in Sign In page$")
	public void user_enters_and_in_Sign_In_page(String username, String password) {
		loginPage.navigateToSignInPage();
		loginPage.validLogin(username, password);
	}

	@Then("^user clicks on Sign In button and navigates to Home page$")
	public void user_clicks_on_Sign_In_button_and_navigates_to_Home_page() {
	    
		loginPage.loginformSubmit();
	}

	@Then("^user searches for an item$")
	public void user_searches_for_an_item() {
	    
	    search.searchItem();
	}

	@Then("^user naviagtes to PDP by choosing specific item$")
	public void user_naviagtes_to_PDP_by_choosing_specific_item() {
	    
	    
	}

	@Then("^user adds item to cart$")
	public void user_adds_item_to_cart() {
	    
	    
	}

		
}
 
 