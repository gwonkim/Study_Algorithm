// disguise 위장
// 같은 의상의 종류의 경우 총 개수를 더한다
// 다른 의상의 종류의 경우 1을 더한다.

function solution(clothes) {
    let answer; 
    if (clothes.length !== 0) { 
        // 옷이 있는 경우
        let num = {}; // 빈 객체 생성
        clothes.forEach((v, i) => { 
            num[clothes[i][1]] = (num[clothes[i][1]] || 1) +  1;
            v.reduce((a, b) => {
                b === a ? a+1 : a; 
            })
        });
        return num.reduce((a,b) => a+b);
        
    } else { 
        // 옷이 없는 경우
        answer = 1;
    }

    return answer;
}

function solution(clothes) {
    let answer; 
    if (clothes.length !== 0) { 
        // 옷이 있는 경우
        let clothesObject = {};
        clothesObject = clothes.reduce((v, i) => { 
            console.log('reduce before: v, i, v[i[1]] ::', v, i, v[i[1]]);
            v[i[1]] = v[i[1]] ? v[i[1]] + 1 : 1;
            console.log('reduce after: v, i, v[i[1]] ::', v, i, v[i[1]]);
            return v;
        });
        answer = Object.values(clothesObject).reduce((a,b) => {
             a*(b+1);
            console.log('a b a*(b+1)  : ', a, b, a+b);
        }, 1);
    } else { 
        // 옷이 없는 경우
        answer = 1;
    }
    console.log('answer :', answer);
    return 1;
}

let test1 = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
// return 5

let test2 = [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]];
// return 3