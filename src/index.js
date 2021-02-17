module.exports = function toReadable (number) {
  if (number === 0) {
    return 'zero';
  }

  const dg = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };

  const tw = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen', 
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen', 
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };

  const dz = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty', 
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety', 
  };

  let result;

  if (number % 100 < 10) {
    const s = number.toString();
    result = s.length < 3 ? dg[number] : `${dg[s[0]]} hundred ${dg[s[2]]}`;
  }
  else if (number % 100 >= 10 && number % 100 <= 19) {
    const s = number.toString();
    result = s.length < 3 ? tw[number] : `${dg[s[0]]} hundred ${tw[s.slice(-2)]}`;
  }
  else if (number % 100 >= 20 && number % 100 < 100) {
    const s = number.toString();
    result = s.length < 3 ?
      `${dz[s[0]]} ${dg[s[1]]}` : 
      `${dg[s[0]]} hundred ${dz[s[1]]} ${dg[s[2]]}`;
  }

  return result.trim();
};
