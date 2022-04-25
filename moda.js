const list = [ 1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1 ];
const listCount = {};

list.map(
  function (element) {
    if (listCount[element]) {
      listCount[element] += 1;
    } else {
      listCount[element] = 1;
    }
  }
);

const array = Object.entries(listCount).sort(
  function (value1, value2) {
    return value1[1] - value2[1];
  }
);

const moda = array[array.length - 1];