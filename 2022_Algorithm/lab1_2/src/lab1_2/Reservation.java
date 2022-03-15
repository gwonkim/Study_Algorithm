package lab1_2;

public class Reservation {
	private int id; // 예약 번호
	private int startTime; // 시작 시간
	private int endTime; // 종료 시간
	
	public Reservation(int id, int startTime, int endTime) {
		super();
		this.id = id;
		this.startTime = startTime;
		this.endTime = endTime;
	}
	
	public int getId() {
		return id;
	}
	
	public int getStartTime() {
		return startTime;
	}
	
	public void setStartTime(int startTime) {
		this.startTime = startTime;
	}
	
	public int getEndTime() {
		return endTime;
	}
	
	public void setEndTime(int endTime) {
		this.endTime = endTime;
	}

	@Override
	public String toString() {
		return id + " " + startTime + "시~" + endTime + "시 " + (endTime - startTime)+"시간";
	}
	
}
