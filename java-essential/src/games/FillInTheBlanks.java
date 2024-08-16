package games;

import java.util.Scanner;

public class FillInTheBlanks {

	public static void main(String[] args) {
		
		//Input Data from the console
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Let's create a story!");
		System.out.println("Enter an adjective");
		String adjective = scanner.next();
		
		
		System.out.println("Enter a season of the year");
		String season = scanner.next();
		
		System.out.println("Enter a whole number");
		String number = scanner.next();
		
		scanner.close();
		
		System.out.println("On a(n) " + adjective +  " " + season + " day, I drink a minimum of "
                + number + " cups of coffee.");
		
		
		

	}

}
