// 오픈 채팅방
// 중복 닉네임 문제

// 실패1, 25%
function solution(record) {
  let userId = [];
  let result = [];

  record.forEach((user, i) => {
    let [action, id, nickname] = user.split(" ");

    if (action.charAt(0) === "E") {
        let dataId = userId[id];
      if (userId[id] === undefined) { // 신규 참여자
        userId[id] = [nickname, true]; // 이름과 접속 유무(T/F)
      } else { // 이전 참여자(했던 사람)
        dataId[0] = nickname;
        dataId[1] = true;
      }
      result.push(`${id}님이 들어왔습니다.`); // id로 1차 저장
    } else if (action.charAt(0) === "L") {
      id[1] = false;
      result.push(`${id}님이 나갔습니다.`);
    } else if (action.charAt(0) === "C") {
      userId[id][0] = nickname;
    }
  });

  Object.keys(userId).forEach(id => { // id -> nickname 전환
    result = result.toString().replace(new RegExp(id, "g"), `${userId[id][0]}`);
  });
  return result.split(",");
}
