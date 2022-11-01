// 숫자 짝꿍

// 시간초과
// 이유 : 복잡도 O(n^2) 문제로 추정
function solution(X, Y) {
  let num = [];
  let y = Y.split("");

  for (let i = 0; i < X.length; i++) {
    for (let j = 0; j < Y.length; j++) {
      if (X[i] === y[j]) {
        num.push(X[i]);
        y.splice(j, 1);
        break;
      }
    }
  }

  let answer =
    num.length > 0 ? num.sort((a, b) => Number(b - a)).join("") : "-1";
  return answer[0] != 0 ? answer : "0";
}

// 성공
function solution(X, Y) {
    let num = Array(10).fill(0);
    let mate = [];
    let y = Y.split("");
  
    for (let i = 0; i < X.length; i++) {
      num[X[i]] += 1;
    }
  
    for (let i = 0; i < Y.length; i++) {
      let y = Y[i];
      if (num[y] > 0) {
        mate.push(y);
        num[y] -= 1;
      }
    }
  
    let answer = mate.length > 0 ? mate.sort((a, b) => b - a).join("") : "-1";
    return answer[0] != 0 ? answer : "0";
  }