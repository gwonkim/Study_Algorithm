// 중복 확인
// 동일 신고자 신고 중복 제거
// 신고자 별 신고 정리
// 신고 횟수 결과 리턴

function solution(id_list, report, k) {
    let answer = [];
    let kthCheck = [];
    let deduplication = report.filter((v, i) => report.indexOf(v) === i); // 중복 제거
    for(let i=0; i < id_list.length; i++) { // 신고자 별 신고 정리
        let reportList = [];
        for(let i2=0; i2 < deduplication.length; i2++) {
            if (id_list[i] === deduplication[i2].slice(0, id_list[i].length)) { // 유저가 신고한 ID만 모은 배열 push
                reportList.push(deduplication[i2].slice(id_list[i].length+1, deduplication[i2].length)); 
            }
            if (id_list[i] === deduplication[i2].slice(-id_list[i].length)) { // 중복 수 체크
                kthCheck[i] ? kthCheck[i]++ : kthCheck[i] = 1;
            }
        }
        answer.push(reportList); // 각 신고자의 배열 합치기
    }

    for(let i=0; i<id_list.length; i++) { // 중복 제거
        answer.filter((v, i) => {
            
        });
    }
    console.log('!!', answer);

    return answer;
}

let test1_id_list = ["muzi", "frodo", "apeach", "neo"];
let test1_report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
let test1_k = 2;
// return [2, 1, 1, 0]

let test2_id_list = ["con", "ryan"];
let test2_report = ["ryan con", "ryan con", "ryan con", "ryan con"];
let test2_k = 3;
// [0, 0]

solution(test1_id_list, test1_report, test1_k);
// solution(test2_id_list, test2_report, test2_k);

