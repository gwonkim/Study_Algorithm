
// 통과1 but 효율성은 떨어짐(계속 reduce 호출 검사)
function solution1(d, budget) {
    d.sort((a, b) => a - b); // 오름차순 정렬
    while (d.reduce((a, b) => a+b, 0) > budget) { // 예산보다 크면 d의 맨 뒤의 값 빼고 반복
        d.pop();
    }
    return d.length;
}

// 통과2
function solution2(d, budget) { 
    let answer = 0;
    let money = 0;
    d.sort((a,b) => a-b).forEach(v => {
        money += v;
        money <= budget ? answer++ : false;
    })
    return answer;
}

let d = [1, 3, 2, 5, 4];
let budget = 9;
// return 3

console.log('test1', solution1(d, budget));
console.log('test2', solution2(d, budget));