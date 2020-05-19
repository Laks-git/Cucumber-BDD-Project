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
import seleniumPages.Page_PetcoHomepage;

public class login {
	
	Page_BasePage basepage = new Page_BasePage();
	Page_PetcoHomepage petcoHomePage = new Page_PetcoHomepage();
	LoginPage loginPage = new LoginPage();	
	
	
	@Before
	 public void setUP()
	 {
		basepage.launchPetcoURL();
	 }

	@After
	 public void tearDown()
	 {
		basepage.closeBrowser();
	 }
		
	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page() {
		loginPage.navigateToSignInPage();
	}

	@When("^title of login page is Sign in$")
	public void title_of_login_page_is_Sign_in() {
		loginPage.verifyLoginPageTitle();
		    
	}

	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) {
		loginPage.validLogin(username, password);
	    
	}

	@Then("^user clicks on Sign In button$")
	public void user_clicks_on_Sign_In_button() {	   
		loginPage.loginformSubmit();	
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() {
		
		petcoHomePage.verifyHomePageTitle();
	}
	
	@Then("^verify invalid login error message$")
	public void verify_invalid_login_errormessage() {
		loginPage.loginErrorText();
	}

	@Then("^close the browser$")
	public void close_the_browser() {
		
	
	}
	
}
