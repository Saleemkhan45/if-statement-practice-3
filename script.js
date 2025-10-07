
// Level 3 — Advanced (for logic practice)
//Check if a student has passed or failed (marks ≥ 50).
// let student = 45;
// if(student >= 50) {
//     console.log("Student is passed");   
// } else{
//     console.log("Student is fail");
    
// }


// Check if a person can enter a club — age ≥ 18 and has a membership card.
// let age = 18;
// let membership = true;

// if(age >= 18 && membership === true) {
//     console.log("You can enter a club");
// } else{
//   console.log("You can't enter a club");
  
// }


// Check if a person qualifies for a discount — if their age < 18 or age > 60.
let age = 60;
if(age < 18 || age >= 60) {
    console.log("You qualifies for a discount");
} else{
 console.log("You not qualifies for a discount");
 
}


// Check if a character is a vowel or consonant.
let char = "44";

char = char.toLocaleLowerCase();

if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ) {
    console.log("it's a vowel");
} else{
    console.log("it's a consonant");
    
}