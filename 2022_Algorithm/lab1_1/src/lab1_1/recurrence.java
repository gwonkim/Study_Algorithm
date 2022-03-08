package lab1_1;

import java.util.Scanner;

public class recurrence {
	public static void main(String[] args) {
		System.out.println("lab1_1 : 김지원");
		Scanner scanner = new Scanner(System.in);
		System.out.print("정수값 입력 : ");
		int n = scanner.nextInt();
		
		System.out.print("뱐복 출력 = ");
		iterativePrint(n);
		
		System.out.print("\n재귀 출력 = ");
		recursivePrint(n);
	}
	
	private static void iterativePrint(int n) {
		for (int i=1; i<=n; i++) {
			System.out.print(i+" ");
		}
	}

	private static void recursivePrint (int n) {
		if (n > 0) {
			recursivePrint(n-1);
			System.out.print(n+" ");
		}
	}
}
