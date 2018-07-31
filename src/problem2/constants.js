const charMap = {
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

const base27 = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q'];
const givenBase27 = ['0','1','2','3','4','5','6','7','8','9','A','C','D','E','F','H','J','K','L','M','N','P','R','T','V','W','X'];
const checkDigitArr = [2, 4, 5, 7, 8, 10, 11, 13];

module.exports =  {
  base27,
  charMap,
  checkDigitArr,
  givenBase27
};
