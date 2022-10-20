function solution(array) {
    let num = array.reduce((num, v) => {
      num[v] = (num[v] || 0) + 1;
      return num;
    }, {});
      
    let mode, max = 0;
    let dupl = false;
    Object.keys(num).filter((key, i) => {
      if (i == 0 || max < num[key]) {// 최빈값 변경
        mode = key;
        max = num[key];
        dupl = false;
      } else if (max === num[key]) {// 최빈값 중복
        dupl = true;
      }
    });
    return dupl ? -1 : Number(mode);
  };

  function solution2(array) { // 다른 사람 코드 참고 후 변형
    let num = array.reduce((num, v) => {
      num[v] = (num[v] || 0) + 1;
      return num;
    }, {});
      
    const keys = Object.keys(num);

    keys.sort((a,b) => num[b] - num[a]); // 내림차순 정렬
    
    const max = keys[0];

    return num[keys[0]] === num[keys[1]] ? -1 : +max;
  }
  
  let array1 = [1, 2, 3, 3, 3, 4]; // 3
  let array2 = [1, 1, 2, 2]; // -1
  let array3 = [1]; // 1

  console.log('solution', solution(array1));
  console.log('solution', solution(array2));
  console.log('solution', solution(array3));

  console.log('solution2', solution2(array1));
  console.log('solution2', solution2(array2));
  console.log('solution2', solution2(array3));