package seleniumPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import common.Page_BasePage;
import junit.framework.Assert;

public class Page_PetcoHomepage extends Page_BasePage {

	Page_BasePage basepage = new Page_BasePage();
	
	
	public void verifyHomePageTitle() {
	String hometitle = driver.getTitle();
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
	
	
}
