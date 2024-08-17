package decision_structures;

import java.util.Scanner;

public class GradeMessage {

	public static void main(String[] args) {
		
		System.out.println("Enter your letter grade");
		Scanner scanner = new Scanner(System.in);
		String grade = scanner.next();
		scanner.close();
		
		String message;
		
		switch(grade){
		case "A":
			message = "A Excellent Grades";
			break;
			
		case "B":
			message = "B Good Grades";
			break;
			
		case "C":
			message = "C Some Good Grades";
			break;
			
		case "D":
			message = "D You Need to work a bit harder";
			break;
			
		case "F":
			message = "E You Need to repeat the class again";
			break;
			
		default:
			message = "Invalid Grades";
			break;
			
		}
		
		System.out.println("Your Grade is: "+message);
		
		

	}

}
