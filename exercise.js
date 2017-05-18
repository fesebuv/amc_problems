

var ccNums = ['4400016049422110',
'4485633318676001',
'4532617069310928',
'5230851628590439',
'5277370710835083',
'5409165634150103',
'340834486976393',
'377537528407480',
'346868166309859',
'30099784180511',
'30451460601877',
'30129124863771'].forEach(function(ccNum) {
  // console.log(ccNum);

  const newArr = ccNum.split('').reverse().map(function(val, index) {
    // console.log('index: %s, odd? %s',index, index % 2 !== 0);

    if(index % 2 !== 0) {
      val = val * 2;
      if(val > 9) {
        val = val.toString().split('').reduce(function (prev, curr) {
          return parseInt(prev, 10) + parseInt(curr, 10);
        });
      }
    }
    return val;

  });


  var checkSum = newArr.reverse().reduce(function (prev, curr) {
    return parseInt(prev, 10) + parseInt(curr, 10);
  });

  console.log('ccNum: %s, checkSum: %s', ccNum, checkSum * 9 % 10);

});
