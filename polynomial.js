// 다항식 더하기

function solution(polynomial) {
    let poly = polynomial.split(" ");
    let xnum = 0;
    let num = 0;

    poly.map(p => {
        let xn = p.split('x')[0];
        if (p[p.length - 1] == "x") {
            xnum += Number(xn || 1);
        } else if (p == "+") {
        } else {
            num += Number(p);
        }
    });
    const isXnum = (xnum == 0 ? '' :  xnum == 1 ? 'x' : `${xnum}x`);
    const isNum = (num == 0 ? '' : `${num}`);
    const is = (xnum && num ? ' + ' : '')
    return isXnum + is + isNum;
}
