// 124 나라의 숫자

// 1, 2, 4 3진법 문제(like 2진법)
// 각 숫자를 3으로 나눈 나머지와 나누기를 이용하는 방법으로 접근
// num = [1, 2, 4]
// 예시 4: 4/3 = 1, 4%3 = 1,  => num[1-1] num[1-1] == 11
// 예시 10: 10/3 = 3, 10%3 = 1 => num[3-1] num[1-1] == 41

/* 
Math.ceil을 사용하여 계산해서 헤맴
124의 순서가 포인트!
  - 처음에는 배열에 담아 [1, 2, 4] 순서로 하고 -1을 통해 값을 대입했지만
    여러 번의 계산을 통해 나머지가 0, 1, 2일 때 4, 1, 2값이 동일하게 나온다는 것을 파악

[방법]
뒷 숫자부터 계산
그리고 n을 나머지가 0이기 전까지
n = n/3을 하면서 반복
n 나머지값이 0이 나오는 순간 n의 3 나눈 값(1)에서 -1을 통해 0으로 만들어 반복문 종료
*/

function solution(n) {
    let num = [4, 1, 2];
    let answer = '';

   while(n) {
       answer = num[n%3] + answer;
       n = n%3 == 0 ? n/3-1 : Math.floor(n/3);
   }
    return answer;
}

let n1 = 5; // 12
let n2 = 10; // 41
let n3 = 6; // 12

console.log(n1, ' => ', solution(n1));
console.log(n2, ' => ', solution(n2));
console.log(n3, ' => ', solution(n3));
