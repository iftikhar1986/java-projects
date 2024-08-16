package decision_structures;

import java.util.Scanner;

public class TestResults {

	public static void main(String[] args) {
		
		 //Get the test score
        System.out.println("Enter your test score:");
        Scanner scanner = new Scanner(System.in);
        double score = scanner.nextDouble();
        scanner.close();

        //Determine the letter grade
        
        char grade;
        
        if(score<60) {
        	grade = 'F';
        	System.out.println("Your Grade is: "+grade);
        	
        }else if(score<70) {
        	
        	grade = 'D';
        	System.out.println("Your Grade is: "+grade);
        	
        }else if(score<80) {
        	
        	grade = 'C';
        	System.out.println("Your Grade is: "+grade);
        	
        }else if(score<80) {
        	
        	grade = 'B';
        	System.out.println("Your Grade is: "+grade);
        }else {
        	grade = 'A';
        	System.out.println("Your Grade is: "+grade);
        }


	}

}
