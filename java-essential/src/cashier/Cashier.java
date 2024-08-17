package cashier;

import java.util.Scanner;

public class Cashier {

	public static void main(String[] args) {
		
		//Get number of items to scan
		System.out.println("Enter the number of items you would like to scan");
		Scanner scanner  = new Scanner(System.in);
		
		int quintity = scanner.nextInt();
		
		double total = 0;
		
		
		//Create loop to iterate through all of the items and accumulate
		
		for(int i=0; i<quintity; i++) {
			
			System.out.println("Enter the cost of the items");
			double price = scanner.nextDouble();
			
			total = total + price; 
			
			
		}
		
		scanner.close();
		
		System.out.println("Your total is: "+total);
		

	}

}
