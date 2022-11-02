// 연속된 수의 합

function solution(num, total) {
    var answer = Array(num).fill(0);
    let n = num%2 == 0 ? Math.floor(total/num)-Math.floor(num/2)+1 : Math.floor(total/num)-Math.floor(num/2);
    
    for(let i=0; i<num; i++) {
        answer[i] = n;
        n++;
    }
    return answer;
}

function solution(num, total) {
    var answer = [];
    let n = num%2 == 0 ? Math.floor(total/num)-Math.floor(num/2)+1 : Math.floor(total/num)-Math.floor(num/2);
    
    for(let i=0; i<num; i++) {
        answer.push(n);
        n++;
    }
    return answer;
}