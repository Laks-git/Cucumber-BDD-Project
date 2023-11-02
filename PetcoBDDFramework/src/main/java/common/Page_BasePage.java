package common;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;

public class Page_BasePage {

	
	public static WebDriver driver;
	
	public void launchPetcoURL() {
		System.out.println("Launch Chrome Browser");
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();driver.manage().window().maximize();

		System.out.println("Enter URL to navigate to Petco Site");
		driver.get("https://www.orangehrm.com/");
		driver.manage().window().maximize();
	}
	
	public void closeBrowser()
	{
		driver.quit();
		System.out.println("Closed Chrome Browser");
	}
	
}
