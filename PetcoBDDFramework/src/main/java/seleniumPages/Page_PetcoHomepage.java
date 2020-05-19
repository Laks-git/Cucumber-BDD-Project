package seleniumPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import common.Page_BasePage;
import junit.framework.Assert;

public class Page_PetcoHomepage extends Page_BasePage {

		public void launchBrowser() {
		System.out.println("Launch Chrome Browser");
		System.setProperty("webdriver.chrome.driver","C:/Users/SAI KUMAR/Downloads/chromedriver.exe");
		driver = new ChromeDriver();
		}
	
	public void openPetcoURL() {
		System.out.println("Enter URL to navigate to Petco Site");
		driver.get("https://www.petco.com/");
		driver.manage().window().maximize();
	}
	
	public void verifyHomePageTitle() {
	String hometitle = driver.getTitle();;
    System.out.println(hometitle);
    String expected = "Pet Supplies, Pet Food, and Pet Products | Petco";
    Assert.assertEquals(expected, hometitle);
	}
	
	public void checkSearchBoxIsDisplayed() {
		if(driver.findElement(By.name("searchTerm")).isDisplayed()) {
			System.out.println("Search text box is displayed");
		} else {
			System.out.println("Search text box is NOT displayed");
		}
	}
	
	public void checkSearchButtonIsDisplayed() {
		if(driver.findElement(By.id("submitButton")).isDisplayed()) {
			System.out.println("Search button is displayed");
		} else {
			System.out.println("Search button is NOT displayed");
		}
	}
	
	public void exit()
	{
		driver.quit();
	}
}
