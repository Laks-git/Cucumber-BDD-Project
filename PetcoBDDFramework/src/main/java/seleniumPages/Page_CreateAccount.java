package seleniumPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import common.Page_BasePage;
import junit.framework.Assert;

public class Page_CreateAccount extends Page_BasePage{
	
	
	public void navigateToRegistrationForm()
	{
		                
		        //Instantiate Action Class        
		        Actions actions = new Actions(driver);
		        //Retrieve WebElement 'Account' to perform mouse hover 
		     WebElement menuOption = driver.findElement(By.xpath(".//span[contains(text(),'Account')]"));
		     //Mouse hover menuOption 'Account'
		     actions.moveToElement(menuOption).perform();
		     System.out.println("Done Mouse hover on 'Account' from Menu");
		     
		     //Now Select 'Sign In' from sub menu which has got displayed on mouse hover of 'Account'
		     WebElement subMenuOption = driver.findElement(By.xpath(".//*[contains(text(),'Register')]")); 
		     //Now , finally, it displays the desired menu list from which required option needs to be selected
		     //Now Select 'Alternative' from sub menu which has got displayed on mouse hover of 'Sign In'
		     subMenuOption.click();
		     System.out.println("Selected 'Register' from Menu");
		     
		     	//WebDriverWait wait = new WebDriverWait(driver, 120);
				//wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(".//*[contains(text(),'Register')]")));
				//WebElement registerword = driver.findElement(By.xpath(".//*[contains(text(),'Register')]"));
				//registerword.click();
				//System.out.println("Selected 'Register' from Menu");
	}
	
	public void verifyRegistrationFormtitle()
	{
		String registrationformtitle = driver.getTitle();
	    System.out.println(registrationformtitle);
	    Assert.assertEquals("Register", registrationformtitle);
	}
	
	public void createAccount()
	{
		
				 
		//get data from excel
			Xls_Reader reader = new Xls_Reader("C:/Users/SAI KUMAR/git/Cucumber-BDD-Project/PetcoBDDFramework/src/main/java/TestData/Petco_Create Account.xlsx");
			int rowCount = reader.getRowCount("CreateAccount_Data");
			reader.addColumn("CreateAccount_Data", "status"); //adds column under specified sheet
		
			//Parameterization
			for (int rowNum = 2; rowNum<=rowCount; rowNum++) {
										
				
				System.out.println("---------");
				String firstName = reader.getCellData("CreateAccount_Data", "firstname", rowNum);
				System.out.println(firstName);
				driver.findElement(By.xpath("//input[@name= 'firstName']")).clear();
				driver.findElement(By.xpath("//input[@name= 'firstName']")).sendKeys(firstName);
				
				
				String lastName = reader.getCellData("CreateAccount_Data", "lastname", rowNum);
				System.out.println(lastName);
				driver.findElement(By.xpath("//input[@name= 'lastName']")).clear();
				driver.findElement(By.xpath("//input[@name= 'lastName']")).sendKeys(lastName);
				
				String email = reader.getCellData("CreateAccount_Data", "email", rowNum);
				System.out.println(email);
				driver.findElement(By.xpath("//input[@name= 'logonId']")).clear();
				driver.findElement(By.xpath("//input[@name= 'logonId']")).sendKeys(email);
				
				String password = reader.getCellData("CreateAccount_Data", "password", rowNum);
				System.out.println(password);
				driver.findElement(By.xpath("//input[@name= 'logonPassword']")).clear();
				driver.findElement(By.xpath("//input[@name= 'logonPassword']")).sendKeys(password);
				
				String confirmpwd = reader.getCellData("CreateAccount_Data", "confirmpassword", rowNum);
				System.out.println(confirmpwd);
				driver.findElement(By.xpath("//input[@name= 'logonPasswordVerify']")).clear();
				driver.findElement(By.xpath("//input[@name= 'logonPasswordVerify']")).sendKeys(confirmpwd);
				
				String address = reader.getCellData("CreateAccount_Data", "address", rowNum);
				System.out.println(address);
				driver.findElement(By.xpath("//input[@name= 'address1']")).clear();
				driver.findElement(By.xpath("//input[@name= 'address1']")).sendKeys(address);
				
				String city = reader.getCellData("CreateAccount_Data", "city", rowNum);
				System.out.println(city);
				driver.findElement(By.xpath("//input[@name= 'city']")).clear();
				driver.findElement(By.xpath("//input[@name= 'city']")).sendKeys(city);
				
				String state = reader.getCellData("CreateAccount_Data", "state", rowNum);
				System.out.println(state);
				//driver.findElement(By.xpath("//*[@id= 'shipping-address-state']")).clear();
				Select drpState = new Select(driver.findElement(By.xpath("//*[@id= 'shipping-address-state']")));
				drpState.selectByVisibleText(state);
				
				String zip = reader.getCellData("CreateAccount_Data", "zip", rowNum);
				System.out.println(zip);
				driver.findElement(By.xpath("//input[@name= 'zipCode']")).clear();
				driver.findElement(By.xpath("//input[@name= 'zipCode']")).sendKeys(zip);
				
				String phone = reader.getCellData("CreateAccount_Data", "phone", rowNum);
				System.out.println(phone);
				driver.findElement(By.xpath("//input[@name= 'phone1']")).clear();
				driver.findElement(By.xpath("//input[@name= 'phone1']")).sendKeys(phone);
				
				//select  i'm not a robot checkbox
				
				// Selecting CheckBox		
		        WebElement robot = driver.findElement(By.id("recaptcha-anchor"));							

		        // This will Toggle the Check box 		
		        robot.click();			

		        // Check whether the Check box is toggled on 		
		        if (robot.isSelected()) {					
		            System.out.println("Checkbox is Toggled On");					

		        } else {			
		            System.out.println("Checkbox is Toggled Off");					
		        }		
					
		        driver.findElement(By.xpath("//*[@id= 'WC_UserRegistrationAddForm_links_1']")).submit();
		        
				reader.setCellData("CreateAccount_Data", "status", rowNum, "Pass");		//writes data into a cell
				
	}

	}
	
	
}
