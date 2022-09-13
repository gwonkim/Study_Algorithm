// 나머지가 1이 되는 수 찾기


// 성공1
function solution1(n) {
    let answer;
    for(let i=2; i<=n+1; i++) {
        if (n%i === 1) {
            return answer = i; 
        }
    }
    return answer; 
}

// 다른 방법(While문 이용)
function solution2(n) {
    let answer = 1;
    while (n%answer !== 1) {
        answer++
    }
    return answer; 
}

let n1 = 10;
let n2 = 12;

console.log('나머지가 1이 되는 수 찾기');
console.log(solution1(n1));
console.log(solution2(n2));