package hw11_1;

import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int n = s.nextInt(); // 회의 수
		int[][] times = new int[n][2]; // 예약 시간
		int count = 1; // 예약 가능한 수

		for(int i=0; i<n; i++) {
			times[i][0] = s.nextInt(); // 시작시간 
			times[i][1] = s.nextInt(); // 종료시간
		}

		// 종료 시간 기준으로 정렬
		Arrays.sort(times, new Comparator<int[]>() {
			@Override
			public int compare(int[] num1, int[] num2) {
				if (num1[1] == num2[1]) {
					return num1[0] -  num2[0];
				} else {						
					return num1[1] - num2[1];
				}
			}
		});

		// 예약 가능한 시간 체크
		int preTime = times[0][1]; // 이전 시간
		for (int i=1; i<n; i++) {
			if (preTime <= times[i][0]) { // 이전 시간의 종료시간 <= 현재 시간의 시작시간
				preTime = times[i][1]; // preTime 현재의 종료시간으로 변경
				count++;
			}
		}

		System.out.println(count);
	}
}
