package common;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Page_BasePage {

	
	public static WebDriver driver;
	
	public void launchPetcoURL() {
		System.out.println("Launch Chrome Browser");
		System.setProperty("webdriver.chrome.driver","C:/Users/SAI KUMAR/Downloads/chromedriver.exe");
		driver = new ChromeDriver();
		System.out.println("Enter URL to navigate to Petco Site");
		driver.get("https://www.petco.com/");
		driver.manage().window().maximize();
	}
	
	public void closeBrowser()
	{
		driver.quit();
		System.out.println("Closed Chrome Browser");
	}
	
}
