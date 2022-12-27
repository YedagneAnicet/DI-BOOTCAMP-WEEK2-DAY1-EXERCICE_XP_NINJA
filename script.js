/* Exercise 1 : Evaluation
Instructions
For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction. */

5 >= 1;
// compare 5 and 1 (Greater than or equal to)
// true

0 === 1;
// compare value and type of 0 and 1
// false

4 <= 1;
// compare 4 and 1 (Less than or equal to)
// false

1 != 1;
//compare 1 and 1 (Not equal to)
// false

"A" > "B";
//compare value of position of A and B in alphabetical order
//false

"B" < "C";

//compare value of position of A and B in alphabetical order
//true

"a" > "A";
//compare value of position of A and B in alphabetical order
//true

"b" < "A";
//compare value of position of A and B in alphabetical order
//false

true === false;
// compare value and type
// false

true != true;
//compare value true and true (Not equal to)
// false

/*Exercise 2 : Ask For Numbers
Instructions
Ask the user for a string of numbers separated by commas
Console.log the sum of the numbers.
Hint: use some string methods */

let chaineChiffre = prompt("Entrer des chiffre séparé par des virgule : ");

let tab = chaineChiffre.split(",");
let somme = (som, val) => parseInt(som) + parseInt(val);
console.log(`La somme des nombres  est : ${tab.reduce(somme)}`);

/*Exercise 3 : Find Nemo
Instructions
Hint: if statement (tomorrow’s lesson)

Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
Find the word “Nemo”
Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
If you can’t find Nemo, console.log “I can’t find Nemo”. */

let chaineNemo = prompt("Entrer une phrase contenant le mot Nemo");

let tabChaine = chaineNemo.split(" ");

let indiceNemo = tabChaine.indexOf("Nemo");

if (indiceNemo == -1) {
  console.log(`I can not find Nemo`);
} else {
  console.log(`I found Nemo at ${indiceNemo}`);
}

/* Exercise 4 : Boom
Instructions
Hint: if statement (tomorrow’s lesson)

Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

If the number given is less than 2 : return “boom”
If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
If the number given is evenly divisible by 2, add a exclamation mark to the end.
If the number given is evenly divisible by 5, return the string in ALL CAPS.
If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end. */

let numberUser = prompt("Entrer un nombre");

let reponse;
if (numberUser < 2) {
  reponse ="Boom";
}

if (numberUser > 2) {
    reponse = `B${"o".repeat(numberUser)}m`;
}

if (numberUser % 2 == 0 && numberUser > 2) {
    reponse = `B${"o".repeat(numberUser)}m!`;
}else if (numberUser % 2 == 0) {
    reponse = ("Boom!");
}

if (numberUser % 5 == 0 && numberUser > 2) {
    reponse = `B${"o".repeat(numberUser)}m`;
    reponse = reponse.toUpperCase()
}else if (numberUser % 5 == 0) {
    reponse = ("Boom");
    reponse = reponse.toUpperCase()
}

if (numberUser % 5 == 0 && numberUser % 2 == 0 && numberUser > 2){
    reponse = `B${"o".repeat(numberUser)}m!`;
    reponse = reponse.toUpperCase()
}else if (numberUser % 5 == 0 && numberUser % 2 == 0){
    reponse = ("Boom!");
    reponse = reponse.toUpperCase()
}

console.log(reponse);
