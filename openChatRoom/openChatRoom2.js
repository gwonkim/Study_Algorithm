// 오픈 채팅방
// 중복 닉네임 문제

// 실패2, 25%
// forEach 제거
const solution = record => {
  let userId = [];
  let result = [];

  for (let i = 0; i < record.length; i++) {
    let [action, id, nickname] = record[i].split(" ");

    if (action.charAt(0) === "E") {
      userId[id] = nickname;
      result.push(`${id}님이 들어왔습니다.`); // id로 1차 저장
    } else if (action.charAt(0) === "L") {
      result.push(`${id}님이 나갔습니다.`);
    } else if (action.charAt(0) === "C") {
      userId[id] = nickname;
    }
  }

  for(let i=0; i<Object.keys(userId).length; i++) {
    let id = Object.keys(userId)[i];
    result = result.toString().replace(new RegExp(id, "g"), `${userId[id]}`);
  }

  return result.split(',');
};


let test = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];
// 	["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

console.log(solution(test));