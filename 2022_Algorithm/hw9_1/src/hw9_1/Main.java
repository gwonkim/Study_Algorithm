package hw9_1;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String x = scanner.next();
		String y = scanner.next();
		System.out.println(lcs(x, y));
		scanner.close();
	}

	public static int lcs(String x, String y) {
		int m = x.length();
		int n = y.length();
		int[][] c = new int[m+1][n+1];

		for(int i=0; i<=m; i++) {
			c[i][0] = 0;
		}
		for(int j=0; j<=n; j++) {
			c[0][j] = 0;
		}
		for(int i=1; i<=m; i++) {
			for(int j=1; j<=n; j++) {
				if (x.charAt(i-1) == y.charAt(j-1)) {
					c[i][j] = c[i-1][j-1] + 1;
				} else {
					c[i][j] = Math.max(c[i-1][j], c[i][j-1]);
				}
			}
		}
		return c[m][n];
	}
}

