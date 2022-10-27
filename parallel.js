// 평행
// y좌표의 차이 / x좌표의 차이 = 기울기
function solution(dots) {
  let answer = [];
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      let v = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
      if (answer.includes(v)) return 1;
      answer.push(v);
    }
  }
  return 0;
}
