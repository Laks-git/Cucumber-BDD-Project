package stepDefinations;

import common.Page_BasePage;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import seleniumPages.Page_CreateAccount;
import seleniumPages.Page_PetcoHomepage;

public class CreateAccount {
	
	Page_PetcoHomepage petcoHomePage = new Page_PetcoHomepage();
	Page_BasePage basepage = new Page_BasePage();
	Page_CreateAccount createacctpage = new Page_CreateAccount();

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
	
	@Given("^User is on Registration page$")
	public void user_is_on_Registration_page() {
	    
		createacctpage.navigateToRegistrationForm();
	}

	@When("^Registration form title matches$")
	public void registration_form_title_matches() {
	    
		//createacctpage.verifyRegistrationFormtitle();
	}

	@Then("^enter all the required fields and submit the registration form$")
	public void enter_all_the_required_fields_and_submit_the_registration_form() {
	    
		createacctpage.createAccount();
	}

	@Then("^navigate to Homepage$")
	public void navigate_to_Homepage() {
	    
		//petcoHomePage.verifyHomePageTitle();
	}


}
