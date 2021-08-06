/* 
<문제>
H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.


<입출력 예시>
citations : [3, 0, 6, 1, 5]
return : 3

--------------------------------
-> 어려운데 간단한 문제
-> forEach와 map은 중간에 멈추지 않음(무조건 한 바퀴, 그래서 while 아니면 for문 사용해야 함)
-> h번 이상 인용 논문이 h번 이상만 생각할 것(h번 이하 인용을 신경 쓸 필요가 없음, 이상이면 넘을 일이 안 생김)
*/


function solution1(citations) {
    var answer = 0;
    citations = citations.sort((a,b)=> b-a);
    while( answer + 1 <= citations[answer]){
        answer++;
    }
    return answer;
}

// 첫 번째 풀이 축약
function solution2(citations) {
    var answer = 0;
    while( answer + 1 <= citations.sort((a,b)=> b-a)[answer]){
        answer++;
    }
    return answer;
}
let a = [3, 0, 6, 1, 5]; // 3
let b = [10, 8, 5, 4, 3]; // 4

console.log('solution1 a', solution1(a));
console.log('solution1 b', solution1(b));

console.log('solution2 a', solution2(a));
console.log('solution2 b', solution2(b));