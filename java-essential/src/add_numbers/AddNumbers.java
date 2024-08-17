package add_numbers;

import java.util.Scanner;

public class AddNumbers {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		int runAgain = 0 ;
		
		do {
			
			System.out.println("Enter the Frist Number");
			double number1 = scanner.nextDouble();
			
			System.out.println("Enter the Second Number");
			double number2 = scanner.nextDouble();
			
			double sum = number1+number2;
			
			System.out.println("The sum is: "+sum);
			
			System.out.println("If you want to run it again, Press 1 for yes, Press 2 for no.");
			
			runAgain = scanner.nextInt();
			
			
			
			
		}while(runAgain == 1);
		
	}

}
