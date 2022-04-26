package hw7_1;

// 정수형 key값을 저장하는 해시 테이블 클래스
// 해시함수 : 곱하기 방법
// 충돌해결 : 체이닝
public class MyHashTable {
	private class Node {
		int key;
		Node link;
	}
	
	private Node[] table;
	private int m; // 테이블 크기
	private int n; // 원소 수
	private static final double A = 0.6180339887;
		
	// table tableSize size 초기화
	public MyHashTable(int m) {
		table = null;
		this.m = m;
		this.n = m*2;
	}
	
	private int hash(int key) {
		// table [hash(x)]
		// key의 해시값을 구하여 그 위치의 연결 리스트 맨 앞에 key값을 저장한 노드 삽입
		return (int) Math.floor(m*(key*A%1));
	}
	public void add(int key) {
		table[hash(key)].key = key; 
	}
	
	
	public double getLoadFactor() {
		return n/m;
	}
	
	public boolean contains(int key) {
		if (table[hash(key)].key == key) {
			return true;
		} else {
			return false;
		}
	}
	
	public void printTable() {
		for(int i=0; i< table.length; i++) {
			System.out.print("table[" + i + "] =");
			Node temp = table[i];
			while(temp != null) {
				System.out.print(temp.key + " ");
				temp = temp.link;
			}
			System.out.println();
		}
	}
	
	
}
