package hw10_1;
import java.util.Scanner;
import java.util.Queue;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;

public class Main {
	static int vertex; // 정점 수
	static int edge; // 간선 수
	static int startNum; // 탐색 시작 정점 번호
	private static Graph graph; // 그래프
	public static boolean[] visited = new boolean[1001]; // 방문 확인
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		vertex = scanner.nextInt();
		edge = scanner.nextInt();
		startNum = scanner.nextInt();
		graph = new Graph(vertex);
		
		for(int i=0; i<edge; i++) {
			int v1 = scanner.nextInt();
			int v2 = scanner.nextInt();
			graph.insertEdge(v1, v2);
		}
		
		dfs(startNum);
		System.out.println();
		bfs(startNum);

		scanner.close();
	}

	static class Graph {
		private ArrayList<Integer>[] table;
		
		// 그래프 생성
		public Graph(int n) {
			table = new ArrayList[n];
			for(int i=0; i<n; i++) {
				table[i] = new ArrayList<Integer>();
			}
		}

		// 간선 삽입(v1, v2)
		public void insertEdge(int v1, int v2) {
			table[v1-1].add(v2);
			Collections.sort(table[v1-1]);
			table[v2-1].add(v1);
			Collections.sort(table[v2-1]);
		}

		// 인접 정점 번호 리턴
		public int[] adjacencyVertex(int v) {
			int length = table[v-1].size();
			int[] num = new int[length];
			for(int i=0; i< table[v-1].size(); i++) {
				num[i] = table[v-1].get(i);
			}
			return num;
		}
	}

	// 깊이 우선 탐색 DFS
	public static void dfs(int v) {		
		visited[v-1] = true;
		System.out.print(v+" ");

		for(int x : graph.adjacencyVertex(v)) {
			if(visited[x-1] == false) {
				dfs(x);
			}
		}
	}

	// 너비 우선 탐색 BFS
	public static void bfs(int v) {
		Queue<Integer> queue = new LinkedList<>();
		for (int i = 0; i < visited.length; i++){
			visited[i] = false;
		}
		System.out.print(v+" ");
		visited[v-1] = true;
		queue.add(v);
		while(!queue.isEmpty()) {
			int vertex = queue.poll();
			for(int x : graph.adjacencyVertex(vertex)) {
				if(visited[x-1] == false) {
					visited[x-1] = true;
					queue.add(x);
					System.out.print(x+" ");
				}
			}
		}
		System.out.println();
	}

}


