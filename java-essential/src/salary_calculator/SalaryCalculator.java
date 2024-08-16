package salary_calculator;

import java.util.Scanner;

public class SalaryCalculator {

	 public static void main(String[] args){


	        
	        System.out.println("Enter the Salary?");
	        Scanner scanner = new Scanner(System.in);
	        int salary = scanner.nextInt();
	        
	        System.out.println("Enter the Bonus?");
	        int bonus = scanner.nextInt();
	        
	        System.out.println("Enter the Quota?");
	        int quota = scanner.nextInt();
	        

	        //Get values for the unknown
	        System.out.println("How many sales did the employee make this week?");
	        
	        int sales = scanner.nextInt();
	        scanner.close();

	        //Quick detour for the bonus earners
	        if(sales > quota){
	            salary = salary + bonus;
	            System.out.println("Congratulations you have met the quote");
	        }
	        else {
	        	int salesShort = quota - sales ;
	        	System.out.println("Sorry you don't met the quote, You Where "+salesShort+" Sales Short");
	        }

	        //Output
	        System.out.println("The employee's pay is $" + salary);
	    }

}
