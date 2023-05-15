function convertToRoman(num) {
  var romanNum = "";
  let counter = 0;
  let lastDigit;
  let loopNum;
  let decimalPoints = ["I", "X", "C", "M"];
  let halfwayPoints = ["V", "L", "D"];
  while (num != 0) {
    loopNum = "";
    lastDigit = num % 10;
    if (lastDigit == 5) {
      romanNum = halfwayPoints[counter] + romanNum;
    } else if (lastDigit == 4) {
      romanNum = decimalPoints[counter] + halfwayPoints[counter] + romanNum;
    } else if (lastDigit == 9) {
      romanNum = decimalPoints[counter] + decimalPoints[counter + 1] + romanNum;
    } else if (lastDigit < 4) {
      for (let i = 0; i < lastDigit; i++) {
        loopNum = loopNum + decimalPoints[counter];
      }
      romanNum = loopNum + romanNum;
    } else if (lastDigit > 5) {
      for (let i = 0; i < lastDigit - 5; i++) {
        loopNum = loopNum + decimalPoints[counter];
      }
      romanNum = halfwayPoints[counter] + loopNum + romanNum;
    }
    num = Math.floor(num / 10);
    counter++;
  }
  return romanNum;
}

console.log(convertToRoman(987));
