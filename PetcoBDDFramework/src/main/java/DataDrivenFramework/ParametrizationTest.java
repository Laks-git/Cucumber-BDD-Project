package DataDrivenFramework;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.excel.lib.util.Xls_Reader;

public class ParametrizationTest {

public static void main(String[] args)
	
	{
	
	    WebDriver driver;
	
	  //Open Chrome browser and navigate to Petco Registration page
		System.out.println("Launch Chrome Browser");
		System.setProperty("webdriver.chrome.driver","C:/Users/SAI KUMAR/Downloads/chromedriver.exe");
		driver = new ChromeDriver();
		System.out.println("Enter URL to navigate to Petco Site");
		driver.get("https://www.petco.com/shop/UserRegistrationForm?myAcctMain=&new=Y&catalogId=10051&langId=-1&storeId=10151");
		driver.manage().window().maximize();
			
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
			
			reader.setCellData("CreateAccount_Data", "status", rowNum, "Pass");		//writes data into a cell
			
		}
	}

}