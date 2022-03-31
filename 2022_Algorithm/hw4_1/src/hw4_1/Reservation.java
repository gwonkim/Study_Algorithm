package hw4_1;

public class Reservation {
	private int id;
	private int startTime;
	private int endTime;

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

	public int getEndTime() {
		return endTime;
	}
	
	public int getLength() {
		return endTime - startTime;
	}

	@Override
	public String toString() {
		return id + " " + startTime + "시~" + endTime + "시 " + getLength()+"시간";
	}

}
