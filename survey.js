/* 
성격 유형 검사

지표 번호	성격 유형
1번 지표	라이언형(R), 튜브형(T)
2번 지표	콘형(C), 프로도형(F)
3번 지표	제이지형(J), 무지형(M)
4번 지표	어피치형(A), 네오형(N)

- 파라미터 설명
survey의 원소는 "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA" 중 하나입니다.
choices의 길이 = survey의 길이
*/

function solution1(survey, choices) {
  let scoreMap = new Map();
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach(v => {
    scoreMap.set(v[0], 0);
    scoreMap.set(v[1], 0);
  });

  choices.forEach((v, i) => {
    let score;
    let type;

    if (v < 4) {
      type = survey[i].charAt(0);
      score = 4 - v;
    } else if (v > 4) {
      type = survey[i].charAt(1);
      score = v - 4;
    }
    scoreMap.set(type, (scoreMap.get(type) || 0) + score);
  });

  let answer = [];
  let score1;
  let score2;
  types.forEach(v => {
    score1 = scoreMap.get(v[0]);
    score2 = scoreMap.get(v[1]);
    answer.push(score1 >= score2 ? v[0] : v[1]);
  });
  return answer.join("");
}

let survey1 = ["AN", "CF", "MJ", "RT", "NA"];
let choices1 = [5, 3, 2, 7, 5]; // "TCMA"

let survey2 = ["TR", "RT", "TR"];
let choices2 = [7, 1, 3]; // "RCJA"

console.log("solution1", solution1(survey1, choices1));
console.log("solution2", solution1(survey2, choices2));
