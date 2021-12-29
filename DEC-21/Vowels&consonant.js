const chalk = require("chalk");

const findVowelOrNot = () => {
    
    let Char = "A";
    Char = Char.toLocaleLowerCase();
    if (Char == "a" || Char == "e" || Char == "i" || Char == "o" || Char == "u") {
        console.log(chalk.green.bold("char is Vowel"));

    }else{
      console.log(chalk.blue.bold("char is consonant"));
    }
};
findVowelOrNot();