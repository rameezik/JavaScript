let userinput = prompt("Enter Any Sentence/word");
let vowels = ["a", "e", "i", "o", "u"];
let vowelscount = [];

for(let i = 0; i < userinput.length; i++) {
    let char = userinput[i].toLowerCase();

    if (char === vowels[0] ||
        char === vowels[1] ||
        char === vowels[2] ||
        char === vowels[3] ||
        char === vowels[4] ) {
        vowelscount.push(char);
    }

}
alert(
  "Total vowels found: " + vowelscount.length +
  "\nVowels: " + vowelscount.join(", ")
);
