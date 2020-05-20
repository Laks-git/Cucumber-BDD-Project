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
import seleniumPages.Page_ProceedCheckout;
 

public class AddToCartSteps {
	
	Page_BasePage basepage = new Page_BasePage();
	Page_PetcoHomepage petcoHomePage = new Page_PetcoHomepage();
	LoginPage loginPage = new LoginPage();
	Page_PetcoAddToCartpage item = new Page_PetcoAddToCartpage();
	Page_ProceedCheckout checkout = new Page_ProceedCheckout();
	
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
	    
		
		item.searchItem();
		item.verifysearchpageTitle();
	}

	@Then("^user naviagtes to PDP by choosing specific item$")
	public void user_naviagtes_to_PDP_by_choosing_specific_item() {
		item.navigatetoPDP();
		item.verifyAddToCartEnabled();
	    
	}

	@Then("^user adds item to cart$")
	public void user_adds_item_to_cart() {
	    
		item.navigatetoCart();
		
	}

	@Then("^navigates to cart page$")
	public void navigates_to_cart_page() {
		item.verifycartTitle();
	    
	}
	@Then("^proceed to checkout$")
	public void proceed_to_checkout() {
	    
	    checkout.proceedCheckout();
	    checkout.verifycheckoutpageTitle();
	}

	@Then("^selects second Day Delivery$")
	public void selects_nd_Day_Delivery(int arg1) {
	    
	    checkout.selectShippingOption();
	}

	@Then("^Enters Credit card details$")
	public void enters_Credit_card_details() {
	    
	    
	}

	@Then("^verifies Place Order button enabled or not$")
	public void verifies_Place_Order_button_enabled_or_not() {
	    
	    
	}

	@Then("^places order based on availability of Place Order button$")
	public void places_order_based_on_availability_of_Place_Order_button() {
	    
	    
	}


		
}
 
 