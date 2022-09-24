// 카카오 
// 개인정보 동의 약관 유효기간 만료 약관 구하기

function solution(today, terms, privacies) {
    terms = terms.map(v => v.split(" "));
    privacies = privacies.map(v => v.split(" "));
    let answer = privacies.map((v, i) => {
      let [_, month] = terms.find(m => (m[0] === v[1] ? true : false));
      let date1 = new Date(v[0]);
      let date2 = new Date(today);
      date1.setDate(date1.getDate() + 1);
      date2.setDate(date2.getDate() + 1);
      date2.setMonth(date2.getMonth() - month);
      let dateDiff = parseInt(((date2 - date1) / 24) * 60 * 60 * 1000);
  
      if (0 <= dateDiff) {
        return i + 1;
      }
    });
    return answer.filter(e => e !== undefined);
  }
  