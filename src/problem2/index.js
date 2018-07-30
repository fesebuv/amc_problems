
var charMap = {
  B: '8',
  G: 'C',
  I: '1',
  O: '0',
  Q: '0',
  S: '5',
  U: 'V',
  Y: 'V',
  Z: '2'
};

var checkDigit = [2, 4, 5, 7, 8, 10, 11, 13];

function cleanData(input) {
  var arr = input.split('');
  arr.map(function (char) {
    if(charMap.hasOwnProperty(char)) {
      return charMap[char];
    }
    return char;
  });
  return arr.join('');
}

function calculateCheckSum(input) {
  var sub = input.substring(0,8);
  var last = input.substring(8,9);
  var arr = sub.split('');
  arr = arr.map(function (charc, index) {
    var val = parseInt(charc, 10);
    var check = parseInt(checkDigit[index], 10);
    return val * check;
  });

  var sum = arr.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);

  var check = sum % 27;

  if(parseInt(last, 27) === check) {
    return parseInt(parseInt(sub, 27), 10);
  } else {
    return 'INVALID';
  }

}


function problem2() {
  var input = '12345678A';
  var cleanInput = cleanData(input);
  var checkSum = calculateCheckSum(cleanInput);
  console.log(checkSum);
}


problem2();
