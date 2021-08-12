/* 
<문제>
대학 교수인 당신은, 상호평가를 통하여 학생들이 제출한 과제물에 학점을 부여하려고 합니다. 아래는 0번부터 4번까지 번호가 매겨진 5명의 학생들이 자신과 다른 학생의 과제를 평가한 점수표입니다.

No.	0	1	2	3	4
0	100	90	98	88	65
1	50	45	99	85	77
2	47	88	95	80	67
3	61	57	100	80	65
4	24	90	94	75	65
평균	45.5	81.25	97.2	81.6	67.8
학점	F	B	A	B	D
위의 점수표에서, i행 j열의 값은 i번 학생이 평가한 j번 학생의 과제 점수입니다.

0번 학생이 평가한 점수는 0번 행에담긴 [100, 90, 98, 88, 65]입니다.
0번 학생은 자기 자신에게 100점, 1번 학생에게 90점, 2번 학생에게 98점, 3번 학생에게 88점, 4번 학생에게 65점을 부여했습니다.
2번 학생이 평가한 점수는 2번 행에담긴 [47, 88, 95, 80, 67]입니다.
2번 학생은 0번 학생에게 47점, 1번 학생에게 88점, 자기 자신에게 95점, 3번 학생에게 80점, 4번 학생에게 67점을 부여했습니다.
당신은 각 학생들이 받은 점수의 평균을 구하여, 기준에 따라 학점을 부여하려고 합니다.
만약, 학생들이 자기 자신을 평가한 점수가 유일한 최고점 또는 유일한 최저점이라면 그 점수는 제외하고 평균을 구합니다.

0번 학생이 받은 점수는 0번 열에 담긴 [100, 50, 47, 61, 24]입니다. 자기 자신을 평가한 100점은 자신이 받은 점수 중에서 유일한 최고점이므로, 평균을 구할 때 제외합니다.
0번 학생의 평균 점수는 (50+47+61+24) / 4 = 45.5입니다.
4번 학생이 받은 점수는 4번 열에 담긴 [65, 77, 67, 65, 65]입니다. 자기 자신을 평가한 65점은 자신이 받은 점수 중에서 최저점이지만 같은 점수가 2개 더 있으므로, 유일한 최저점이 아닙니다. 따라서, 평균을 구할 때 제외하지 않습니다.
4번 학생의 평균 점수는 (65+77+67+65+65) / 5 = 67.8입니다.
제외할 점수는 제외하고 평균을 구한 후, 아래 기준에 따라 학점을 부여합니다.

평균	학점
90점 이상	A
80점 이상 90점 미만	B
70점 이상 80점 미만	C
50점 이상 70점 미만	D
50점 미만	F
학생들의 점수가 담긴 정수형 2차원 배열 scores가 매개변수로 주어집니다. 이때, 학생들의 학점을 구하여 하나의 문자열로 만들어서 return 하도록 solution 함수를 완성해주세요.


<입출력 예시>
[[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]]	"FBABD"
[[50,90],[50,87]]	"DA"
[[70,49,90],[68,50,38],[73,31,100]]	"CFD"
*/
function solution1(scores) {
    var answer = '';
    let students = [];
    for(let i=0; i<scores.length; i++) {
        students[i] = [];
        for(let j=0; j<scores.length; j++) {
            
            students[i][j] = scores[j][i];
        }
        console.log('s', students)
    }
    for(let i=0; i<scores.length; i++) {
        for(let j=0; j<scores.length; j++) {
            if(Math.max(students[i]) === students[i][i] && students[i][i] === scores[i][j] && !scores[i][i]) {
                grade1(students[i], answer);
  
            } else {
                grade1(students[i].slice(1, scores[i][i]), answer);
            }
        }
        console.log('s', students)
    }

    console.log('students', students);
    console.log('answer', answer);
    
    return answer;
};

let grade1 = (arr, answer) => {
    let avg = arr.reduce((a, b) => a+b)
    switch(avg) {
        case 90 <= avg:
            answer.push('A');
            break;
        case 80 <= avg:
            answer.push('B');
            break;
        case 70 <= avg:
            answer.push('C');
            break;
        case 50 <= avg:
            answer.push('D');
            break;
        case 50 > avg:
            answer.push('F');
            break;
    }
    console.log('grade', answer);
};


function solution(scores) {
    var answer = '';
    let students = [];
    for(let i=0; i<scores.length; i++) {
        students[i] = [];
        for(let j=0; j<scores.length; j++) {
            
            students[i][j] = scores[j][i];
        }
        console.log('s', students)
        if(i === scores.length -1) {
            console.log('test')
            students.forEach((a, index) => {
                             a.forEach((b, i) => {
                console.log('Math.ma',Math.max(...a), a[index], a[i]);
                console.log('Math.max(a) === b[i1]', Math.max(...a) === a[index])
                console.log('Math.min(a) === b[i1]', Math.min(...a) === a[index])
                                if(Math.max(...a) === a[index]) {
            console.log('test23')
                    
                    if(index!== i && a[index] === a[i]) {
                        grade(a.reduce((a, b) => a+b), answer);
                    } else {
                        grade(a.slice(1, index).reduce((a, b) => a+b), answer);
                    }
                } else if(Math.min(...a) === a[index]) {
                    if(index!== i && a[index] === i) {
                        grade(a.reduce((a, b) => a+b), answer);
                    } else {
                        grade(a.slice(1, index).reduce((a, b) => a+b), answer);
                    }
                }

            })})
        }
    }
    console.log('students', students);
    console.log('answer', answer);
    
    return answer;
}

const grade = (avg, answer) => {
    switch(avg) {
        case 90 <= avg:
            answer.push('A');
            break;
        case 80 <= avg:
            answer.push('B');
            break;
        case 70 <= avg:
            answer.push('C');
            break;
        case 50 <= avg:
            answer.push('D');
            break;
        case 50 > avg:
            answer.push('F');
            break;
    }
    console.log('grade', answer);
}


console.log('solution1 a', solution1(a));
console.log('solution1 b', solution1(b));

console.log('solution2 a', solution2(a));
console.log('solution2 b', solution2(b));