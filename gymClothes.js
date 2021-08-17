/* 
<문제>
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

제한사항
전체 학생의 수는 2명 이상 30명 이하입니다.
체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
*/

/* 
1번 째 코드 : 실패
이유 : map을 돌리는 중에 일치하는 값이 있어 삭제할 경우 
그 뒤의 배열 위치가 바뀌기 때문에 순서가 앞당겨져서 일부 값을
넘길 가능성이 생김.
*/
function solution(n, lost, reserve) {
    // 도난 당했지만 여벌이 있는 경우
    lost.map((a, i) => reserve.filter((b, index) => {
        if(a===b) {
            lost.splice(i, 1);
            reserve.splice(index, 1);
        }
    }));
    
    // 도난 당했지만 여벌이 없는 경우
    lost.map((l, i) => {
        reserve.filter((r) => (l !== 1 && (l-r === -1 || l-r === 1)) ? lost.splice(i, 1) : '');
    })
    return n - lost.length;
}

// 최종 
function solution1(n, lost, reserve) {
    lost.sort(); // 테스트 13 : 정렬 안 된 배열 왔을 때
    let answer = n - lost.length;
    lost = lost.filter((l) => {
        let index = reserve.findIndex(r => r === l);
        if(index === -1) return l
        else {
            reserve.splice(index, 1);
            answer++;
        }
    });
    lost.map(l => {
        let index = reserve.findIndex(r => l-r == 1 || l-r == -1);
        if(index !== -1) {
            reserve.splice(index,1);
            answer++;
        }
    });
    
    return answer;
};

let n = 5;
let lost = [2, 4];
let reserve = [1, 3, 5]; // 5

console.log('solution1', solution1(n, lost, reserve));