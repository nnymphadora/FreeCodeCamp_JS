function palindrome(str) {
  let filteredArray = str
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("");
  return filteredArray.join("") == filteredArray.reverse().join("");
}

console.log(palindrome("A man, a plan, a canal. Panama"));
