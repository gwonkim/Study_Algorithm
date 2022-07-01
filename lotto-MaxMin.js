//로또 최고 순위와 최저 순위
// 알아볼 수 없는 번호 0, 번호 6개 중 최저/최고 구하기

function solution(lottos, win_nums) {   
    let unknowIndex = 0; // 알 수 없는 값의  index

    let min = lottos.filter((a, i) => { // 최저 점수
        let findIndex = win_nums.indexOf(a);
        if (findIndex !== -1) {
            win_nums.slice(findIndex, 1);
            return true;
        }
        if(a === 0) {
            unknowIndex++
        }
        return false
    }).length;    
    return [ grade(unknowIndex + min), grade(min)]
}

const grade = (num) => {
    switch (num) {
        case 6:
            return 1;
        case 5:
            return 2;
        case 4:
            return 3;
        case 3:
            return 4;
        case 2:
            return 5;
        default:
            return 6;
    }
}



// 다른 사람 풀이 참고
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}