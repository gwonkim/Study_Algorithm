function solution1(n) {
    return Number(String(n).split('').sort((a,b) => Number(b)-Number(a)).join(''));
 }

 let n = 118372; // return 873211

function solution2(absolutes, signs) {
    return absolutes.map((v,i) =>  signs[i] ? v: -v).reduce((a,b)=> a+b)
}

let absolutes = [4,7,12];
let signs = [true,false,true]; // return 9 

 console.log('solution', solution1(n));
 console.log('solution', solution2(absolutes, signs));