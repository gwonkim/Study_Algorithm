// 오픈 채팅방
// 중복 닉네임 문제

// 성공
const solution1 = record => {
  let result = [];
  let userInfo = {};

  for (let i = 0; i < record.length; i++) {
    let [action, id, nickname] = record[i].split(" ");

    if (action.charAt(0) === "L") {
      result.push([id, `님이 나갔습니다.`]);
      continue;
    }

    if (action.charAt(0) === "E") {
      result.push([id, `님이 들어왔습니다.`]);
    }
    userInfo[id] = nickname;
  }
  console.log("result", result.map(v => userInfo[v[0]] + v[1]));
};

// 실패4, 6.3%
const solution2 = record => {
  let result = [];
  let userInfo = {};

  for (let i = 0; i < record.length; i++) {
    let [action, id, nickname] = record[i].split(" ");
    userInfo[id] = nickname;
    if (action.charAt(0) === "L") {
      result.push([id, `님이 나갔습니다.`]);
    }
    if (action.charAt(0) === "E") {
      result.push([id, `님이 들어왔습니다.`]);
    }
  }
  console.log("result", result.map(v => userInfo[v[0]] + v[1]));
};

let test = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];
// 	["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

console.log('성공');
solution1(test);
console.log('실패');
solution2(test);
