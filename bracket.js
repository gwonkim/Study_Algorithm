/* 
올바른 괄호

괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 
올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

제한사항
문자열 s의 길이 : 100,000 이하의 자연수
문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

-----------------------
이 문제의 효율성 테스트 요점
-> 빠른 탈출구 2가지 체크

*빠른 탈출구: s의 첫 번째 값이 ")"일 경우, s의 마지막 값이 "("일 경우
위의 경우 검사하지 말고 바로 false 리턴 

+ if문과 switch의 속도는 비슷한 듯, 두 가지의 경우 모두 효율성 테스트 통과
*/


// 정확성 테스트 통과, 효율성 테스트 실패
function solution(s){
    return s[0] === ')' ? false : check(s);
    // 효율성 실패 이유 => 마지막 괄호가 열린 괄호일 경우를 제외해서 
}

const check = (s) => {
    let ck = [];
    for(let i=0; i<s.length; i++) {
        switch(s[i]) {
            case '(':
                ck.push('(');
                break;
            case ')':
                ck.pop();
                break;
            default:
                break;
        }
    }
    return ck.length === 0 ? true : false;
}


// 정확성 테스트 통과, 효율성 테스트 통과
function solution(s){
    return s[0] === ')' || s[-1] === '(' ? false : check(s);
}

const check = (s) => {
    let ck = [];
    for(let i=0; i<s.length; i++) {
        if (s[i] === '(') { // switch문과 if문 둘 다 효율성 통과
            ck.push('(');
        } else if (s[i] === ')') {
            ck.pop();
        }
    }
    return ck.length === 0 ? true : false;
}