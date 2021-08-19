
/* 
<문제>
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

----------
성능으로는 for문이 더 좋다
filter, map, forEach는 O(n)의 시간복잡도를 갖지만 2중일 경우 O(n^2)
forEach Vs for문 시간 차이는 일반적으로 for문이 약 1.4배 빠름(성능 : for문이 좋음)
*/

// 정확성O 효율성 X 
// 효율성 테스트 : 시간 초과 
function solution1(participant, completion) {
    completion.filter(c => {
        let i = participant.findIndex(p => c === p);
        participant.splice(i, 1);
    })
    return participant[0];
}


// 정확성O 효율성 O
// 속도로는 for문이 효율적
function solution2(participant, completion) {
    participant.sort();
    completion.sort();
    for(var i=0;i<participant.length;i++) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}

let a = ["leo", "kiki", "eden"];
let b = ["eden", "kiki"]; // "leo"

let c = ["marina", "josipa", "nikola", "vinko", "filipa"];
let d = ["josipa", "filipa", "marina", "nikola"]; // "vinko"

console.log('solution1', solution1(a, b));
console.log('solution1', solution1(c, d));

console.log('solution2', solution2(a, b));
console.log('solution2', solution2(c, d));
