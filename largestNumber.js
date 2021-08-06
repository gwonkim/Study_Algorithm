/* 
<문제>
0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.


입출력 예시
[6, 10, 2] // "6210"
[3, 30, 34, 5, 9] // "9534330"

------------------
-> 어려운데 간단한 문제
-> sort의 리턴 방식 이해 필요 

테스트 11 : 리턴 값이 '0000'과 같은 경우 '0'으로 변환해야 함.
-> 리턴할 값의 0의 자리가 0인지 비교 후 리턴
-> *****비교나 리턴할 때 문자열 0을 비교하거나 리턴해야 함!
-> answer[0] !== '0' ? answer : '0' // (o) 문자열 0 
-> answer[0] !== 0 ? answer : 0 // (x) 숫자 0 
*/

function solution1(numbers) {
    let answer = numbers.map(n => n+'').sort((a, b) => (b+a)-(a+b)).join('');
    return answer[0] !== '0' ? answer : '0';
}

function solution2(numbers) {
    let answer = numbers.map(n => n+'').sort((a, b) => (b+a)-(a+b));
    return answer[0] !==  '0' ? answer.join('') : '0';
}

let a = [6, 10, 2]; // "6210"
let b = [3, 30, 34, 5, 9]; // "9534330"
console.log('solution1 a', solution1(a));
console.log('solution1 b', solution1(b));
console.log();

console.log('solution2 a', solution2(a));
console.log('solution2 b', solution2(b));