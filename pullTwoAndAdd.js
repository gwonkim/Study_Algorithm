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

let num1 = [2, 1, 3, 4, 1];
// return [2, 3, 4, 5, 6, 7]

let num2 = [5, 0, 2, 7];
// return [2, 5, 7, 9, 12]

solution(num1);
solution(num2);