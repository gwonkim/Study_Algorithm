// 오픈 채팅방
// 중복 닉네임 문제

// 실패3, 6.3%

const solution = record => {
  let userId = {};
  let result = [];

  for (let i = 0; i < record.length; i++) {
    let [action, id, nickname] = record[i].split(" ");
    userId[id] = nickname;
  }

  for (let i = 0; i < record.length; i++) {
    let [action, id] = record[i].split(" ");
    let nickname = userId[id];
    if (action.charAt(0) === "E") {
      result.push(`${nickname}님이 들어왔습니다.`);
    } else if (action.charAt(0) === "L") {
      result.push(`${nickname}님이 나갔습니다.`);
    }
  }
  console.log("result", result);
};

let test = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];
// 	["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

solution(test);
