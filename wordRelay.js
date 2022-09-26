function solution(n, words) {
    let answer;
    for(let i=1; i<words.length; i++) {
        if (words[i-1][words[i-1].length-1] !== words[i][0] || words.indexOf(words[i]) !== i) {
            answer = [i%n+1, parseInt(i/n)+1];
            break;
        }
    }
    return answer ? answer : [0, 0];
}

let n1 = 3;
let words1 = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];
let n2 = 5;
let words2 = ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"];
let n3 = 2;
let words3 = ["hello", "one", "even", "never", "now", "world", "draw"];

console.log('끝말잇기', solution(n1, words1)); // [3, 3]
console.log('끝말잇기', solution(n2, words2)); // [0, 0]
console.log('끝말잇기', solution(n3, words3)); // [1, 3]