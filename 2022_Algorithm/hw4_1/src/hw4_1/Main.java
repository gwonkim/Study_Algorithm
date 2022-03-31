package hw4_1;

public class Main {
	public static void main(String[] args) {
		System.out.println("hw4_1 : 김지원");

		// (1) 크기가 n인 예약 배열을 생성 (단, n = 10)
		Reservation[] list = new Reservation[10];

		// (2) 예약 번호는 1, 2, 3..., 시작시간, 종료시간은 랜덤 값인 예약 객체를 n개 생성하여 배열에 저장
		for (int i = 0; i < list.length; i++) {
			int startTime = (int) (Math.random() * 5 + 1); // 시작 시간: 1~5
			int endTime = (int) (Math.random() * (6 - startTime) + startTime + 1); // 종료 시간: 시작 시간+1~6
			list[i] = new Reservation(i + 1, startTime, endTime);
		}

		// (3) n개의 예약 각각에 대해 시작시간, 종료시간, 길이를 출력
		for (int i = 0; i < list.length; i++) {
			System.out.println(list[i].toString());
		}

		// (4) 예약 배열을 길이 오름차순으로 정렬하는 정렬 메소드 호출
		countingSort(list);

		// (5) 정렬된 n개의 예약 각각에 대해 시작시간, 종료시간, 길이를 출력
		System.out.println("길이 오름차순 정렬 결과 = ");
		for (int i = 0; i < list.length; i++) {
			System.out.println(list[i].toString());
		}

	}

	// 계수정렬
	private static void countingSort(Reservation[] list) {
		int n = list.length; // 배열 원소 개수

		// 기본 타입의 배열인 경우 초기값 존재(0)
		int[] count = new int[5]; // 예약 시간 개수(1~5)
		Reservation[] temp = new Reservation[n]; // list 배열 복사용 변수

		// 각 시간(1~5시간) 별 카운팅
		for (int i = 0; i < n; i++) {
			count[list[i].getLength() - 1]++;
		}

		// count[i]의 값보다 작거나 같은 원소의 총수
		for (int i = 1; i < count.length; i++) {
			count[i] = count[i] + count[i - 1];
		}

		// temp 배열에 list 배열 복사(깊은 복사)
		for (int i = 0; i < n; i++) {
			temp[i] = list[i];
		}

		// 시간 기준으로 오름차순 정렬
		for (int j = n - 1; j >= 0; j--) {
			int time = temp[j].getLength(); // 예약 시간의 index
			list[count[time - 1] - 1] = temp[j]; // 배열 정렬
			count[time - 1]--;
		}
	}
}
