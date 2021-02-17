module.exports = function toReadable (number) {
  if (number === 0) {
    return 'zero';
  }

  const dg = ['','one','two','three','four','five','six','seven','eight','nine', 
  'ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];

  const dz = ['', '', 'twenty', 'thirty', 'forty', 'fifty',  'sixty', 'seventy', 'eighty', 'ninety'];

  let result;

  if (number % 100 < 10) {
    const s = number.toString();
    result = s.length < 3 ? dg[number] : `${dg[s[0]]} hundred ${dg[s[2]]}`;
  }
  else if (number % 100 >= 10 && number % 100 <= 19) {
    const s = number.toString();
    result = s.length < 3 ? dg[number] : `${dg[s[0]]} hundred ${dg[s.slice(-2)]}`;
  }
  else if (number % 100 >= 20 && number % 100 < 100) {
    const s = number.toString();
    result = s.length < 3 ?
      `${dz[s[0]]} ${dg[s[1]]}` : 
      `${dg[s[0]]} hundred ${dz[s[1]]} ${dg[s[2]]}`;
  }

  return result.trim();
};
