// 두 큐 합 같게 만들기
// 포인터 개념 이용

function solution1(queue1, queue2) {
  let queue = [...queue1, ...queue2]; // 전체 큐
  let num = queue.reduce((a, b) => a + b, 0) / 2; // 각 큐의 합 값

  let pointer1 = 0,
    pointer2 = queue1.length;
  let sum = queue1.reduce((a, b) => a + b);
  let count = 0; // 작업 횟수

  while (true) {
    if (count >= queue.length*2) return -1;
    if (num > sum) {
      sum += queue[pointer2];
      pointer2++;
    } else if (num < sum) {
      sum -= queue[pointer1];
      pointer1++;
    } else if(num === sum){
      return count;
    }
    count++;
  }
  return -1;
}

let queue1 = [3, 2, 7, 2];
let queue2 = [4, 6, 5, 1];
// return 2

let queue3 = [1, 2, 1, 2];
let queue4 = [1, 10, 1, 2];
// return 7

let queue5 = [1, 1];
let queue6 = [1, 5];
// return -1

console.log("두 큐 합 같게 만들기");
console.log(solution1(queue1, queue2));
console.log(solution1(queue3, queue4));
console.log(solution1(queue5, queue6));
