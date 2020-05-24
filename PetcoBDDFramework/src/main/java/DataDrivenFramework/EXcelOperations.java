package DataDrivenFramework;

import com.excel.lib.util.Xls_Reader;

public class EXcelOperations {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		//get data from excel
				Xls_Reader reader = new Xls_Reader("C:/Users/SAI KUMAR/git/Cucumber-BDD-Project/PetcoBDDFramework/src/main/java/TestData/Petco_Create Account.xlsx");
				
				if(!reader.isSheetExist("LoginPage"))
				{
					reader.addSheet("LoginPage");
					reader.addColumn("LoginPage", "Email");
					reader.addColumn("LoginPage", "Password");
					reader.addColumn("LoginPage", "Status");
					reader.setCellData("LoginPage", "Email", 2, "prasanna.kandregula@gmail.com");
					reader.setCellData("LoginPage", "Password", 2, "Lucky@143");
					reader.setCellData("LoginPage", "Status", 2, "Pass");
					int rowCount = reader.getRowCount("LoginPage");
					System.out.println("Total row count under Login Page sheet is " + rowCount);
					int columnCount = reader.getColumnCount("LoginPage");
					System.out.println("Total column count under Login Page sheet is " + columnCount);
					
				
				}
				
				
	}

}
