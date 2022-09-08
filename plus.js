// 자릿수 더하기

function solution(n) {
    return [...n.toString()].reduce((a, b) => Number(a) + Number(b), 0);
}

let n = 987; // 24

console.log('자릿수 더하기', solution(n));