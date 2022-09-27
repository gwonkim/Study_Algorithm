/*  
    거리두기 확인하기
    
    P의 상하좌우 확인 후 P의 개수에 따라 
    O사이 2개이상과 P가 여러 개인 경우를 걸러냄.
*/


function solution(places) {
    return places.map(place => place.some((r, ri) => 
            r.split('').some((c, ci, arr) => {
                if (c === 'X') return false;
                const userCount = [ // 상하좌우
                    (place[ri - 1] || '').charAt(ci),
                    (place[ri + 1] || '').charAt(ci),
                    arr[ci - 1] || null,
                    arr[ci + 1] || null,
                ].filter(v => v === 'P').length;              
                
                if((c === 'O' && userCount >= 2) || (c === 'P' && userCount > 0)) {
                    return true;
                }
                return false;
            })) ? 0 : 1
    );
};