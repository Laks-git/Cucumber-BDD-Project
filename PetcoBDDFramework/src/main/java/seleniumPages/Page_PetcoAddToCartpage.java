package seleniumPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import common.Page_BasePage;

public class Page_PetcoAddToCartpage extends Page_BasePage {

	public void searchItem()
	{
		driver.findElement(By.name("searchTerm")).sendKeys("dog");
		driver.findElement(By.id("submitButton")).click();
		
	}
}
