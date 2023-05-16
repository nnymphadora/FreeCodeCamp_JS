function rot13(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  let strArray = str.split("");
  let newArray = strArray.map((el) => {
    if (alphabet.indexOf(el) != -1) {
      if (alphabet.indexOf(el) + 13 <= 25) {
        el = alphabet[alphabet.indexOf(el) + 13];
      } else {
        el = alphabet[alphabet.indexOf(el) - 26 + 13];
      }
    }
    return el;
  });
  return newArray.join("");
}

console.log(rot13("SERR YBIR?"));
