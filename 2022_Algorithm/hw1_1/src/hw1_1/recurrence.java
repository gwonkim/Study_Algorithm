package hw1_1;
import java.util.Scanner;

public class recurrence {
	public static void main(String[] args) {
		System.out.println("hw1_1 : 김지원");
		int[] array = {-10, -20, 30, 40, 50, 60, 70, 80, 90, 100, 10, 20};
		Scanner s = new Scanner(System.in);
		
		System.out.print("하한(0~11) : ");
		int lb = s.nextInt();
		
		System.out.print("상한(0~11) : ");
		int ub = s.nextInt();
		
		System.out.print("\n출력 = ");
		iterativeArrayPrint(array, lb, ub);
		System.out.println("\n합 = " + recursiveArraySum(array, lb, ub));
		
		s.close();
	}
	
	private static void iterativeArrayPrint(int[] array, int lb, int ub) {
		for (int i=lb; i<=ub; i++) {
			System.out.print(array[i]+" ");
		}
	}
	
	private static int recursiveArraySum(int[] array, int lb, int ub) {
		if(lb > ub) return 0;
		return array[lb]+recursiveArraySum(array, lb+1, ub);
	}
}
