/* 
<문제>
데이터 처리 전문가가 되고 싶은 "어피치"는 문자열을 압축하는 방법에 대해 공부를 하고 있습니다. 최근에 대량의 데이터 처리를 위한 간단한 비손실 압축 방법에 대해 공부를 하고 있는데, 문자열에서 같은 값이 연속해서 나타나는 것을 그 문자의 개수와 반복되는 값으로 표현하여 더 짧은 문자열로 줄여서 표현하는 알고리즘을 공부하고 있습니다.
간단한 예로 "aabbaccc"의 경우 "2a2ba3c"(문자가 반복되지 않아 한번만 나타난 경우 1은 생략함)와 같이 표현할 수 있는데, 이러한 방식은 반복되는 문자가 적은 경우 압축률이 낮다는 단점이 있습니다. 예를 들면, "abcabcdede"와 같은 문자열은 전혀 압축되지 않습니다. "어피치"는 이러한 단점을 해결하기 위해 문자열을 1개 이상의 단위로 잘라서 압축하여 더 짧은 문자열로 표현할 수 있는지 방법을 찾아보려고 합니다.

예를 들어, "ababcdcdababcdcd"의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 2개 단위로 잘라서 압축한다면 "2ab2cd2ab2cd"로 표현할 수 있습니다. 다른 방법으로 8개 단위로 잘라서 압축한다면 "2ababcdcd"로 표현할 수 있으며, 이때가 가장 짧게 압축하여 표현할 수 있는 방법입니다.

다른 예로, "abcabcdede"와 같은 경우, 문자를 2개 단위로 잘라서 압축하면 "abcabc2de"가 되지만, 3개 단위로 자른다면 "2abcdede"가 되어 3개 단위가 가장 짧은 압축 방법이 됩니다. 이때 3개 단위로 자르고 마지막에 남는 문자열은 그대로 붙여주면 됩니다.

압축할 문자열 s가 매개변수로 주어질 때, 위에 설명한 방법으로 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return 하도록 solution 함수를 완성해주세요.

------
문자열.substr(start, length);
음수 사용 가능
length 생략 가능
start+length 위치까지 

문자열.substring(start, end);
음수 사용 불가(음수 = 0)
end 생략 가능
0부터 길이 생각 시 start에서 end 앞까지

*/

function solution(s) {
    let recordStrLength = []; 
    for (let i=0; i<s.length/2; i++) {
        let num = i+1;
        let count = 1;
        let newString = '';
        for (let l=0; l<s.length; l+=num) {
            let current = s.substring(l, l+num); 
            if (current === s.substring(l+num, l+num+num)) {
                count++;
            } else {
                if(count > 1) {
                    newString = newString + count + current;
                } else {
                    newString += current;
                } 
                count = 1;
            }
        }
        recordStrLength.push(newString.length);
    }
    return Math.min(...recordStrLength);
}

let a = "aabbaccc"; // 7 
let b = "ababcdcdababcdcd"; // 9
let c = "abcabcdede"; // 8
let d = "abcabcabcabcdededededede"; // 14
let e = "xababcdcdababcdcd"; // 17

console.log('solution a', solution(a));
console.log('solution b', solution(b));
console.log('solution c', solution(c));
console.log('solution d', solution(d));
console.log('solution e', solution(e));

// 다른 사람 코드
const solution = s => {
    const range = [...Array(s.length)].map((_, i) => i + 1);
    return Math.min(...range.map(i => compress(s, i).length));
  };
  
  const compress = (s, n) => {
    const make = ([a, l, c]) => `${a}${c > 1 ? c : ''}${l}`;
    return make(
      chunk(s, n).reduce(
        ([a, l, c], e) => e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1],
        ['', '', 0]
      )
    );
  };
  
  const chunk = (s, n) =>
    s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];