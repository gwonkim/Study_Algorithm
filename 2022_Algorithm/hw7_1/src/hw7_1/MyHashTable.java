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

	// 해시 테이블 초기화
	public MyHashTable(int m) {
		table = new Node[m];
		this.m = m;
		this.n = 0;
	}

	// 해시값 구하기
	private int hash(int key) {
		return (int) Math.floor(m*(key*A%1));
	}

	// 원소 삽입
	public void add(int key) {
		// (A) 적재율 상관 없이 삽입
		int hash = hash(key); // hash 한 번만 호출하도록 수정
		Node newNode = new Node();
		newNode.key = key;
		newNode.link = table[hash];
		table[hash] = newNode;
		n++; // 원소 수 1 증가
	}

	// 적재율
	public double getLoadFactor() {
		return (double) n/m;
	}

	// 해당 key 존재 여부
	public boolean contains(int key) {
		Node temp = table[hash(key)];
		while(temp != null) {
			if (temp.key == key) {
				return true;
			}
			temp = temp.link;
		}
		return false;
	}

	// 테이블 프린팅
	public void printTable() {
		for(int i=0; i< table.length; i++) {
			System.out.print("table[" + i + "] = ");
			Node temp = table[i];
			while(temp != null) {
				System.out.print(temp.key + " ");
				temp = temp.link;
			}
			System.out.println();
		}
	}
}
