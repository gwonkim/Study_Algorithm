// 두 개 뽑아 더하기

function solution(numbers) {
    let num = [];
    
    for(let i=0; i<numbers.length; i++) {
       for(let j=i+1; j<numbers.length; j++) {
           num.push(numbers[i] + numbers[j]); // 두 개 뽑아 더한 후 num에 push
       }
    }

    return [...new Set(num)].sort((a, b) => a-b); // num 중복 제거 후 오름차순 정렬
}