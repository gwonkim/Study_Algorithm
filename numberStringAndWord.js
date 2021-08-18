/* 
네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"
이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.


풀이 
numbers :  숫자의 영단어가 담긴 배열
numbers를 모두 돌면서 문자열에 해당 숫자가 있다면 그 숫자 지점에서 split 그리고 그 숫자로 join
숫자로 변경 후 리턴
*/


function solution(s) {
    let numbers = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    numbers.forEach((a, i) => s = s.split(a).join(i));
    return Number(s);
}

let a = "one4seveneight"; // 1478
let b = "23four5six7"; // 234567
let c = "2three45sixseven"; // 234567
let d = "123" // 123

console.log('solution a', solution(a));
console.log('solution b', solution(b));
console.log('solution c', solution(c));
console.log('solution d', solution(d));
