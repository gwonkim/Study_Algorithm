// 모의고사

// 실패
// 사유 : 최대 정답자가 아닌 부분에 undefined가 출력 
function solution(answers) {
    let maxAnswers = []; // 최대 정답자
    let scores = [0, 0, 0]; // 맞은 개수
    let a = [ // 수포자의 찍는 방법 패턴
        [1, 2, 3, 4, 5], // 5
        [2, 1, 2, 3, 2, 4, 2, 5], // 8 
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] // 10
    ];
    
    for (let i=0; i<answers.length; i++) {
      a[0][i % 5] === answers[i] ? scores[0]++ : false;
      a[1][i % 8] === answers[i] ? scores[1]++ : false;
      a[2][i % 10] === answers[i] ? scores[2]++ : false;
    }

    let max = Math.max(...scores); // 최고 점수
    return scores.map((v, i) => {
        if (max ===v) {
            return i+1;
        }
    })
}

let test1 = [1, 2, 3, 4, 5];
// return [1]

let test2 = [1, 3, 2, 4, 2];
// return [1, 2, 3]

console.log('test1', solution(test1));
console.log('test2', solution(test2));