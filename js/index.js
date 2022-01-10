// Iteration 1: Names and Input
let hacker1 = "gianluca";
let hacker2 = "nadja";

console.log(`'The driver's name is ${hacker1}'`);
console.log(`'The navigator's name is ${hacker2}'`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`'The driver has the longest name, it has ${hacker1.length} characters.'`)
} else if(hacker1.length < hacker2.length){
    console.log(`'It seems that the navigator has the longest name, it has ${hacker2.length} characters.'`)
} else if(hacker 1 === hacker 2){
    console.log(`'Wow you both have equally long names, ${hacker2.length} characters!'`) 
}

// Iteration 3: Loops
let hacker1 = 'gianluca'
let hacker2 = 'nadja'
let driver = "";

for(let i = 0; i < hacker1.length; i++){
driver += hacker1[i] + " ";
}

console.log(driver.toUpperCase());

let navigator = "";

for(let j = hacker2.length - 1; j >= 0; j--){
  navigator += hacker2[j];
}
console.log(navigator);

// 3.3
for(i = 0; i < hacker1.length; i++){
  if(hacker1[i] < hacker2[i]){
    console.log("The driver's name goes first.");
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log("Yo, the navigator goes first definitely.");
    break;
  } else if (hacker1 === hacker2){
    console.log("What?! You both have the same name?");
    break;
  }
}