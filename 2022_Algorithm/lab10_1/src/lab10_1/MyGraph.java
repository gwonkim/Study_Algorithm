package lab10_1;

import java.util.ArrayList;
import java.util.Collections;

// 그래프 : undirected graph
// 구현 방법 : 인접 배열
public class MyGraph {
	private ArrayList<Integer>[] table;
	
	// 그래프 생성
	public MyGraph(int n) {
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

	// 인접 정점 번호 출력
	public void printGraph(int v) {
		System.out.print(v + "에 인접한 정점 = ");
		for(int i=0; i< table[v-1].size(); i++) {
			System.out.print(table[v-1].get(i)+" ");
		}
		System.out.println();
	}
}
