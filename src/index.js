module.exports = function reverse (n) {
  let result = '';
  let nStr = Math.abs(n).toString();
  for (let i = nStr.length - 1; i >= 0; i -= 1) {
    result += nStr[i];
  }
  return result;
}
