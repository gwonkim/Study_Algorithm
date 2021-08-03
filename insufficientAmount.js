
/* 
문제
새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
단, 금액이 부족하지 않으면 0을 return 하세요.

입출력 예 #1
이용금액이 3인 놀이기구를 4번 타고 싶은 고객이 현재 가진 금액이 20이라면, 총 필요한 놀이기구의 이용 금액은 30 (= 3+6+9+12) 이 되어 10만큼 부족하므로 10을 return 합니다.

*/

// 첫 번째 코드
function solution1(price, money, count) {
    let answer = 0;
    let totalMoney = 0;

   for(let num=1; num <=count; num ++) {
       totalMoney += (price*num);
   } 
    if(money < totalMoney) {
        answer = totalMoney - money;
    } else {
        answer = 0;
    }
    return answer;
}

// 두 번째 코드
// (첫번 째 코드를 보고서 정리한 것)
function solution2(price, money, count) {
    var answer = 0;
   for(let num=1; num <=count; num++) {
       answer += (price*num);
   } 
   return answer > money ? answer-money : 0;
}

console.log('solusion1', solution1(3, 20, 4));
console.log('solusion2', solution2(3, 20, 4));