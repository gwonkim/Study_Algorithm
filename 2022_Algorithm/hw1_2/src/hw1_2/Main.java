package hw1_2;

public class Main {

	public static void main(String[] args) {
		System.out.println("hw1_2 : 김지원");

		// (1) 크기가 n인 예약 배열을 생성 (단, n = 10)
		Reservation [] reservation = new Reservation[10];

		// (2) 예약 번호는 1, 2, 3..., 시작시간, 종료시간은 랜덤 값인 예약 객체를 n개 생성하여 배열에 저장
		for(int i=0; i<reservation.length; i++) {
			int startTime = (int) (Math.random()*5+1); // 시작 시간: 1~5
			int endTime = (int) (startTime + (Math.random()*5+1)); // 종료 시간: 시작 시간+1~6
			reservation[i] = new Reservation(i+1, startTime, endTime);
		}

		// (3) n개의 예약 각각에 대해 시작시간, 종료시간, 길이를 출력
		for(int i=0; i < reservation.length; i++) {
			System.out.println(reservation[i].toString());
		}

		// (4) 각 길이의 예약이 몇개씩인지 구함 (중첩 반복문을 사용하지 말고 수행시간 복잡도가 O(n)이 되도록 작성해 볼 것)

		int[] count = new int[5]; // 예약 갯수 카운트 변수
		for(int i=0; i < reservation.length; i++) {
			count[reservation[i].getLength() - 1]++;
		}

		// (5) 각 길이의 예약 수를 출력
		for(int i=0; i<count.length; i++) {
			System.out.println(i+1 + "시간 = "+ count[i]);
		}
	}
}
