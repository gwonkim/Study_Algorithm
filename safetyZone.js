// 안전지대

function solution(board) {
  var answer = [];
  let checked = board.slice();
  let len = board.length;

  board.map((b, i1) => {
    b.map((v, i2) => {
      if (v === 1) {
        if (len > i1 - 1 && i1 - 1 >= 0) {
          len > i2 - 1 && i2 - 1 >= 0 && board[i1 - 1][i2 - 1] != 1
            ? (checked[i1 - 1][i2 - 1] = 2)
            : false;
          len > i2 && i2 >= 0 && board[i1 - 1][i2] != 1
            ? (checked[i1 - 1][i2] = 2)
            : false;
          len > i2 + 1 && i2 + 1 >= 0 && board[i1 - 1][i2 + 1] != 1
            ? (checked[i1 - 1][i2 + 1] = 2)
            : false;
        }
        if (len > i1 && i1 >= 0) {
          len > i2 - 1 && i2 - 1 >= 0 && board[i1][i2 - 1] != 1
            ? (checked[i1][i2 - 1] = 2)
            : false;
          len > i2 + 1 && i2 >= 0 && board[i1][i2 + 1] != 1
            ? (checked[i1][i2 + 1] = 2)
            : false;
        }
        if (len > i1 + 1 && i1 + 1 >= 0) {
          len > i2 - 1 && i2 - 1 >= 0 && board[i1 + 1][i2 - 1] != 1
            ? (checked[i1 + 1][i2 - 1] = 2)
            : false;
          len > i2 && i2 >= 0 && board[i1 + 1][i2] != 1
            ? (checked[i1 + 1][i2] = 2)
            : false;
          len > i2 + 1 && i2 + 1 >= 0 && board[i1 + 1][i2 + 1] != 1
            ? (checked[i1 + 1][i2 + 1] = 2)
            : false;
        }
      }
    });
  });
  checked.forEach(e => (answer = [...answer, ...e]));
  return answer.reduce((ans, v) => (v != 1 && v != 2 ? ++ans : ans), 0);
}
