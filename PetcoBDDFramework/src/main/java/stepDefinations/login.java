package stepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class login {
	
	WebDriver driver;
	
	@Before
	public void setUP(){
		System.out.println("Launch Chrome Browser");
		System.setProperty("webdriver.chrome.driver","C:/Users/SAI KUMAR/Downloads/chromedriver.exe");
		driver = new ChromeDriver();
		System.out.println("Enter URL to navigate to Petco Site");
		driver.get("https://www.petco.com");
		driver.manage().window().maximize();
	
	}
	
	@After
	public void tearDown(){
		driver.quit();
		System.out.println("Petco site get closed");
	
	}
	
	
	
	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page() {

		driver.navigate().to("https://www.petco.com/shop/LogonForm");
	}

	@When("^title of login page is Sign in$")
	public void title_of_login_page_is_Sign_in() {
	   
		String title = driver.getTitle();
	    System.out.println(title);
	    Assert.assertEquals("Sign in", title);
	    
	}

	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) {
		 driver.findElement(By.name("logonId")).sendKeys(username);
		    driver.findElement(By.name("logonPassword")).sendKeys(password);
	    
	}

	@Then("^user clicks on Sign In button$")
	public void user_clicks_on_Sign_In_button() {	   
		driver.findElement(By.xpath("//button[@id='WC_AccountDisplay_links_2']")).click();
				
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() {
		
		String hometitle = driver.getTitle();
	    System.out.println(hometitle);
	    Assert.assertEquals("Pet Supplies, Pet Food, and Pet Products | Petco", hometitle);
	}

	
}
