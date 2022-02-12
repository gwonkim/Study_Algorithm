// 중복 확인
// 동일 신고자 신고 중복 제거
// 신고자 별 신고 정리
// 신고 횟수 결과 리턴

// 실패(시간 초과)
// 별도의 분리된 배열로 보기 힘듦 -> 객체로 합쳐야할 필요가 있음
function solution(id_list, report, k) {
    let reportUserList = []; // 신고 k회 이상인 사용자 리스트
    let kthCheck = []; // (id_list 순서)사용자별 신고 당한 횟수
    let deduplication = report.filter((v, i) => report.indexOf(v) === i); // 중복 제거
    for(let i=0; i < id_list.length; i++) { // 신고자 별 신고 정리
        let reportList = [];
        kthCheck[i] = 0;
        for(let i2=0; i2 < deduplication.length; i2++) {
            if (id_list[i] === deduplication[i2].slice(0, id_list[i].length)) { // 유저가 신고한 ID만 모은 배열 push
                reportList.push(deduplication[i2].slice(id_list[i].length+1, deduplication[i2].length)); 
            }
            if (id_list[i] === deduplication[i2].slice(-id_list[i].length)) { // 중복 수 체크
                kthCheck[i] ? kthCheck[i]++ : kthCheck[i] = 1;
            }
        }
        reportUserList.push(reportList); // 각 신고자의 배열 합치기
    }

    for(let i=0; i<kthCheck.length; i++) { // k회 이상인 정지된 신고 찾기
        if (kthCheck[i] < k) { // k회 이하인 사용자를 찾아 제거
            reportUserList.slice(0).forEach((_, i1) => {
                reportUserList.slice(0)[i1].filter((v2, i2) => {
                    id_list[i] === v2 ? reportUserList[i1].splice(i2, 1) : false;
                })
            })
        }
    }

    return reportUserList.map((_, i) => reportUserList[i].length);
}

// 성공
/* 
객체로 리스트 정리
예시
    {
        user : [ n1, n2 ],
        user2 : [ n2, n4]
    }
*/
function solution2(id_list, report, k) {
    let reportUserList = new Array(id_list.length).fill(0);
    let reportList = {}; // 사용자 별 신고 리스트 객체

    // 사용자 별 배열 생성 { user : [] }
    id_list.map((user)=>{
        reportList[user] = [];
    });

    // 신고 당한 사람 별 신고자 정리 배열 생성
    report.forEach((u, i) => {
        let [userId, reportedId] = u.split(' '); // 사용자ID, 신고한 사용자ID
       !reportList[reportedId].includes(userId) ? reportList[reportedId].push(userId) : false;
    });

    // k회 이상인 인원 찾기, 이용 정지
    for(const key in reportList){
        if(reportList[key].length >= k){
            reportList[key].map((user)=>{
                reportUserList[id_list.indexOf(user)]++;
            });
        };
    };

    return reportUserList;
}

let test1_id_list = ["muzi", "frodo", "apeach", "neo"];
let test1_report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
let test1_k = 2;
// return [2, 1, 1, 0]

let test2_id_list = ["con", "ryan"];
let test2_report = ["ryan con", "ryan con", "ryan con", "ryan con"];
let test2_k = 3;
// [0, 0]

console.log(solution2(test1_id_list, test1_report, test1_k));
console.log(solution2(test2_id_list, test2_report, test2_k));
