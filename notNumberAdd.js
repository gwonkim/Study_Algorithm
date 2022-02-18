// 없는 숫자 더하기
const solution = (numbers) => (
    45 - numbers.reduce((a, b) => a+b, 0)
);

let numbers1 = [1,2,3,4,6,7,8,0];
// return 14

let numbers2 = [5,8,4,0,6,7,9];
// return 9

console.log('solution', solution(numbers1));
console.log('solution', solution(numbers2));

