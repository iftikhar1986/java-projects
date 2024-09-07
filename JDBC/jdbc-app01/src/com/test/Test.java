package com.test;



class A{
	int i = 10;
	static int j = 20;
	
}

public class Test {

	public static void main(String[] args) {
		
		A a = new A();
		System.out.println(a.i);
		System.out.println(a.j);
		System.out.println(A.j);

	}

}
