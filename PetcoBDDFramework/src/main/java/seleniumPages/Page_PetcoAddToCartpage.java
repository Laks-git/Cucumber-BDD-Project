package seleniumPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import common.Page_BasePage;
import junit.framework.Assert;

import java.time.Duration;

public class Page_PetcoAddToCartpage extends Page_BasePage {

	public void searchItem()
	{
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofMillis(20000));
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("SimpleSearchForm_SearchTerm")));
		WebElement searchword = driver.findElement(By.id("SimpleSearchForm_SearchTerm"));
		searchword.sendKeys("dog");
		searchword.submit();
	}
	
	public void verifysearchpageTitle(){
		String actualsearchtitle = driver.getTitle();
	    System.out.println(actualsearchtitle);
	    String expsearchtitle = "Search Results";
	    Assert.assertEquals(expsearchtitle, actualsearchtitle);
	    
	    if(actualsearchtitle.equalsIgnoreCase(expsearchtitle))
	    {
	    	System.out.println("Search title matched");
	    }
	    else {
	    	System.out.println("Search title not matched");
	    }
	}
	
	public void navigatetoPDP()
	{
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofMillis(20000));
	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@id='catalogEntry_img301024']/img[@class='img-responsive']"))).click();
	
	}
	
	public void verifyAddToCartEnabled()
	{
		if(driver.findElement(By.id("add2CartBtn_cpy1")).isDisplayed()) {
			System.out.println("AddToCart button is displayed");
		} else {
			System.out.println("AddToCart is NOT displayed");
		}
	
	if(driver.findElement(By.id("add2CartBtn_cpy1")).isEnabled()) {
		System.out.println("AddToCart button is enabled");
	} else {
		System.out.println("AddToCart is NOT enabled");
	}
}
	
	public void navigatetoCart()
	
	{
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofMillis(20000));
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class = 'btn btn-primary btn-full show']"))).click();
		
	}
	
	public void verifycartTitle(){
		
		String actualcarttitle = driver.getTitle();
	    System.out.println(actualcarttitle);
	    String expcarttitle = "Seresto Flea and Tick Collar for Large Dogs | Petco";
	    Assert.assertEquals(expcarttitle, actualcarttitle);
	    
	    if(actualcarttitle.equalsIgnoreCase(expcarttitle))
	    {
	    	System.out.println("Cart title matched");
	    }
	    else {
	    	System.out.println("Cart title not matched");
	    }
	}
	
		  	 	
}
