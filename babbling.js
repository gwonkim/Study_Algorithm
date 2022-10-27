/* 
    옹알이
    *Node.js에서 실행 시 replaceAll()이 실행 불가(함수 제공X)
    *프로그래머스 터미널에서는 정상 실행
*/

// 1. 실패 : 87.5 / 100
function solution1(babbling) {
  let babble = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  babbling.map(word => {
    babble.map((b, i) => {
      let un = word.slice(i, i + b.length * 2);
      if (un !== b + b) {
        word = word.replace(b, "");
      }
    });
    if (word.length == 0) return answer++;
  });
  return answer;
}

// 2. 아래 코드가 정답으로 처리가 되었지만,(...?)
// 	["ayayewoomawooma"]이 경우에는 통과가 안됨
function solution2(babbling) {
  let babble = ["aya", "ye", "woo", "ma"];
  return babbling.reduce((answer, word) => {
    babble.map(b => {
      word = word.replace(b + b, "V");
      word = word.replaceAll(b, "");
    });
    return word.length === 0 ? ++answer : answer;
  }, 0);
}

// 3. 이 경우에는 ["ayayewoomawooma"] 테스트가 통과됨
function solution3(babbling) {
  let babble = ["aya", "ye", "woo", "ma"];
  let unbabbl = ["ayaaya", "yeye", "woowoo", "mama"];

  return babbling.reduce((answer, word) => {
    unbabbl.map((b, i) => {
      word = word.replace(b, "V");
    });
    babble.map((b, i) => {
      word = word.replaceAll(b, "");
    });
    return word.length === 0 ? ++answer : answer;
  }, 0);
}

// 4. 정규식 이용한 방법(다른사람 코드 참고) - 옹알이2에서도 정답 처리
function solution4(babbling) {
  const reg1 = /(aya|ye|woo|ma)\1+/;
  const reg2 = /^(aya|ye|woo|ma)+$/;
  // const reg3 = /^(aya(?!(aya))|ye(?!(ye))|woo(?!(woo))|ma(?!(ma)))+$"/; // 1, 2 합친 정규식
  return babbling.reduce(
    (answer, word) => (!reg1.test(word) && reg2.test(word) ? ++answer : answer),
    0
  );
}

let babbling = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]; // 2

console.log("solution1", solution1(babbling));
console.log("solution2", solution2(babbling));
console.log("solution3", solution3(babbling));
console.log("solution4", solution4(babbling));
