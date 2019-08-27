
//func sort array number after filter array input
const sortArrOfNumber = (arr) => {
  function sortNumber(a, b) {
    return a - b;
  }
  arr.sort(sortNumber);
  return arr;
};

//func sort array char after filter array input
const sortFunc = (alphabet) => {
  return function (a, b) {
    var index_a = alphabet.indexOf(a[0]),
      index_b = alphabet.indexOf(b[0]);
    if (index_a === index_b) {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    }
    return index_a - index_b;
  }
};

//func sort array input 
const funcSort = async (arr) => {
  try {
    let aphabet = 'ABCDRFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz*!@_.()[]#^&%-=+';
    let arrNumber = []; // init arr number
    let arrChar = []; // init arr char
    //filter number && char
    await arr.forEach((item) => {
      if (Number(item)) {
        arrNumber = [...arrNumber, item]; //item = number => push item in arrNumber
      } else arrChar = [...arrChar, item]; //  => push in arrChar
    });

    const sortArrNumber = await sortArrOfNumber(arrNumber);
    const sortArrChar = await arrChar.sort(sortFunc(aphabet));

    // run func sortArrNumber && sortArrChar
    return Promise.all([
      sortArrNumber, sortArrChar
    ]).then(result => {
      return resultAfterSort = [...result[0], ...result[1]];
    })
      .catch(console.log)
  }
  catch (error) {
    console.log(error);
  }
}

//array input
let arr = ["ax", "mof", "4", "63", "42", "3", "10", "[", "23", "adidas", "ba", ")", "ABC"];

//call fn sort array input
funcSort(arr)
  .then(console.log)
  .catch(console.log)
