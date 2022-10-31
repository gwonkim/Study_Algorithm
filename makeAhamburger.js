// 햄버거 만들기

// 1, 시간초과
function solution(ingredient) {
  let answer = 0;
  ingredient = ingredient.join("");
  for (;;) {
    if (ingredient.includes("1231")) {
      ingredient = ingredient.replace(/1231/, "");
      ++answer;
    } else {
      return answer;
    }
  }
}

// 2, 성공
function solution1(ingredient) {
  let hamburger = [];
  let answer = 0;

  for (let i = 0; i < ingredient.length; i++) {
    hamburger.push(ingredient[i]);
    if (hamburger.length >= 4) {
      let len = hamburger.length;
      let result = [];
      result.push(hamburger[len - 4]);
      result.push(hamburger[len - 3]);
      result.push(hamburger[len - 2]);
      result.push(hamburger[len - 1]);
      if (result.join("") === "1231") {
        ++answer;
        hamburger.pop();
        hamburger.pop();
        hamburger.pop();
        hamburger.pop();
      }
    }
  }
  return answer;
}

// 다른 사람 코드 참조
function solution2(ingredient) {
  let answer = 0;
  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient.slice(i, i + 4).join("") === "1231") {
      answer++;
      i -= 3;
      ingredient.splice(i, 4);
    }
  }

  return answer;
}


let ingredient1 = [2, 1, 1, 2, 3, 1, 2, 3, 1]; // 2
let ingredient2 = [1, 3, 2, 1, 2, 1, 3, 1, 2]; // 0

console.log('test1', solution1(ingredient1));
console.log('test2', solution2(ingredient2));