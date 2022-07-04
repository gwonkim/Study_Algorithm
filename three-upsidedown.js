/* 
3진법 뒤집기
*/
const solution1 = (n) => {
    let value = '';
    let remainder;
    while(n) {
        remainder = n%3;
        n = Math.floor(n/3);
        value += remainder;
    }
    return [...value].reduce((a, b, i) => a+b*(3**(value.length-(i+1))), 0);
}

// 다른 사람 풀이 참고
const solution2 = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

 solution1(45); // return 7
 solution2(125); // return 229