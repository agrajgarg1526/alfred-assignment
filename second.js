const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter string \n", (str) => {
  str = str.toLowerCase();
  var string = "abcdefghijklmnopqrstuvwxyz";

  let map = new Map();

  for (let i = 0; i < string.length; i++) {
    map.set(string[i], 1);
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") map.delete(str[i]);
  }

  if (map.size === 0) {
    console.log("String is pangram");
  } else {
    console.log("String is not pangram");

    console.log("Missing Characters in input string : \n");

    for (let ch of map.keys()) {
      console.log(ch);
    }
  }
  rl.close();
});
