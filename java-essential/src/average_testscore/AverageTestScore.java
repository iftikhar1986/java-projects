package average_testscore;

import java.util.Scanner;

public class AverageTestScore {

	public static void main(String[] args) {
		
		//Initialize what we know
		int numberOfStudents = 2;
		int numberOfTests = 4;
		
		
		Scanner scanner = new Scanner(System.in);
		
		//Processing all students
		for(int i=0; i<numberOfStudents; i++) {
			
			double total = 0;
			
			//Process a student's test scores
			for(int j=0; j<numberOfTests; j++) {
				
				
				
				System.out.println("Enter the score of the Test#: "+(j+1) );
				double score = scanner.nextDouble();
				total = total +score;
				
			}
			
			//Calculating the average 
			double average = total/numberOfTests;
			System.out.println("The test average for student #"+ (i+1)+ " is "+average);
			
		}
		
		
		
		
		
		scanner.close();
		

	}

}
