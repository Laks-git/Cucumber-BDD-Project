package seleniumPages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import common.Page_BasePage;
import seleniumPages.Page_PetcoHomepage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginPage extends Page_BasePage{

	Page_PetcoHomepage petcoHomePage = new Page_PetcoHomepage();
	
	public void navigateToSignInPage() {
		//Launch the Browser and URL using Page_PetcoHomepage class
		petcoHomePage.launchBrowser();
		petcoHomePage.openPetcoURL();
		//Adding wait 
		 driver.manage().timeouts().implicitlyWait(1000, TimeUnit.MILLISECONDS);
		                
		        //Instantiate Action Class        
		        Actions actions = new Actions(driver);
		        //Retrieve WebElement 'Account' to perform mouse hover 
		     WebElement menuOption = driver.findElement(By.xpath(".//span[contains(text(),'Account')]"));
		     //Mouse hover menuOption 'Account'
		     actions.moveToElement(menuOption).perform();
		     System.out.println("Done Mouse hover on 'Account' from Menu");
		     
		     //Now Select 'Sign In' from sub menu which has got displayed on mouse hover of 'Account'
		     WebElement subMenuOption = driver.findElement(By.xpath(".//a[contains(text(),'Sign In')]")); 
		     //Now , finally, it displays the desired menu list from which required option needs to be selected
		     //Now Select 'Alternative' from sub menu which has got displayed on mouse hover of 'Sign In'
		     subMenuOption.click();
		     System.out.println("Selected 'Sign In' from Menu");
		   
	}

	
	public void verifyLoginPageTitle() {
	   
		String logintitle = driver.getTitle();
	    System.out.println(logintitle);
	    Assert.assertEquals("Sign in", logintitle);
	    
	}

	
	public void validLogin(String username, String password) {
		 driver.findElement(By.name("logonId")).sendKeys(username);
		 driver.findElement(By.name("logonPassword")).sendKeys(password);
		 
	    
	}
	
	
	
	public void loginformSubmit() {
		driver.findElement(By.xpath("//button[@id='WC_AccountDisplay_links_2']")).click();
	}
	

	
}

	