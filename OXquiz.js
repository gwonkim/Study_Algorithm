function solution(quiz) {
    let a = quiz.map(v=> v.split(' '));
    return a.reduce((answer, v) => {
        answer.push(eval(`${v[0]} ${v[1]} ${v[2]}`) == Number(v[4]) ? 'O' : 'X')
        return answer;
    }, []);
}
