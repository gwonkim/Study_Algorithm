/* 

<문제>
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

<입출력 예시>
[1,2,3,4] // 1
[1,2,7,6,4]	// 4

입출력 예 #1
[1,2,4]를 이용해서 7을 만들 수 있습니다.

입출력 예 #2
[1,2,4]를 이용해서 7을 만들 수 있습니다.
[1,4,6]을 이용해서 11을 만들 수 있습니다.
[2,4,7]을 이용해서 13을 만들 수 있습니다.
[4,6,7]을 이용해서 17을 만들 수 있습니다.


-----------------------------
-> isPrime1 : 루트를 이용하여 소수 찾기(ex 9 -> 루트3, 3까지 반복) 
-> 루트n보다 작은 수에서 나눠지는 수(소수X)가 안 나온다면 루트n보다 큰 수에서도 안 나눠진다. 

-> isPrime2 : n까지의 반복을 이용해 소수 찾기

-> 에라토스테네스의 체
1제외 2~n까지 자기 자신 제외하고 순차적으로 자신의 배수를 지우면 소수만 남음.
2배수 제거(2 제외)
3배수 제거(3 제외)
4배수는 이미 제거됨
5의 배수 제거(5 제외)
6배수는 이미 제거 됨

*/

const isPrime1 = (n) => {
    for (var i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

function solution1(nums) {
    var answer = 0;
    for (let a = 0; a < nums.length; a++) {
        for (let b = a + 1; b < nums.length; b++) {
            for (let c = b + 1; c < nums.length; c++) {
                isPrime1(nums[a] + nums[b] + nums[c]) ? answer++ : '';
            }
        }
    }
    return answer;
}

const isPrime2 = (n) => {
    for (let i = 2; i < n; i++)
        if (n % i === 0) return false;
    return n > 1;
};

function solution2(nums) {
    var answer = 0;
    for (let a = 0; a < nums.length; a++) {
        for (let b = a + 1; b < nums.length; b++) {
            for (let c = b + 1; c < nums.length; c++) {
                isPrime2(nums[a] + nums[b] + nums[c]) ? answer++ : '';
            }
        }
    }
    return answer;
}

let a = [1,2,3,4] // 1
let b = [1,2,7,6,4]	// 4

console.log('solution1 a', solution1(a));
console.log('solution1 b', solution1(b));

console.log('solution2 a', solution2(a));
console.log('solution2 b', solution2(b));


