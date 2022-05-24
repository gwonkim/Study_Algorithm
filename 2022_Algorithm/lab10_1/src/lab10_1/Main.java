package lab10_1;

import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		System.out.println("lab10_1 : 김지원");

		// 정점 수(n), 간선 수(e) 입력
		Scanner s = new Scanner(System.in);
		int n = s.nextInt(); // 정점 수
		int e = s.nextInt(); // 간선 수

		// 정점 수 n인 무향 그래프 생성
		MyGraph undirectedGraph = new MyGraph(n);
		
		// 그래프 간선 삽입
		for(int i=0; i<e; i++) {
			int v1 = s.nextInt();
			int v2 = s.nextInt();
			undirectedGraph.insertEdge(v1, v2);
		}
		
		// 인접 정점 번호 출력
		for(int i=1; i<=n; i++) { 
			undirectedGraph.printGraph(i);
		}
		s.close();
	}
}
