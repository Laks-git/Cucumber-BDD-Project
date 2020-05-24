package seleniumPages;

import java.awt.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import common.Page_BasePage;
import junit.framework.Assert;

public class Page_ProceedCheckout extends Page_BasePage{
	
	public void proceedCheckout() {
		WebDriverWait wait = new WebDriverWait(driver, 120);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@class='petco-checkout']//a[@id='continueReviewPage']"))).click();
		
	}

	public void verifycheckoutpageTitle(){
		String actualcheckouttitle = driver.getTitle();
	    System.out.println(actualcheckouttitle);
	    String expcheckouttitle = "Review Order";
	    Assert.assertEquals(expcheckouttitle, actualcheckouttitle);
	    
	    if(actualcheckouttitle.equalsIgnoreCase(expcheckouttitle))
	    {
	    	System.out.println("Checkout title matched");
	    }
	    else {
	    	System.out.println("Checkout title not matched");
	    }
	}
	
	public void selectShippingOption(){
	
		// Store all the elements of the same category in the list of WebLements.
	      java.util.List<WebElement> list = driver.findElements(By.xpath("//*[@class='col-6-sm']//input[@id='shipMode_1_0']"));

	      // Create a boolean variable to store true/false.
	      Boolean is_selected = list.get(0).isSelected();

	      // If 'is_selected' is true that means the first radio button is
	      // selected.
	      if (is_selected == true) {

	         // If the first radio button is selected by default then,
	         // select the second radio button.
	         list.get(1).click();

	      } else {

	         // If the first radio button is not selected then, click the first
	         // radio button.
	         list.get(0).click();
	      }
	   }
	}
	
	
	



