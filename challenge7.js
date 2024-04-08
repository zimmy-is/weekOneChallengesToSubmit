// 7. Create a JavaScript program that calculates the average grade of a student based on their 
// scores in three subjects: Math, Science, and English.
// Define a function named calculateAverage that takes three parameters: mathScore, scienceScore, 
// and englishScore.
// Inside the function, calculate the average score by adding up the scores of the three subjects and 
// dividing by 3.
// Return the average score from the function.
// Call the calculateAverage with the separate score results as arguments and log the result to the 
// console.
// Modify the program to also determine and display the corresponding letter grade based on the 
// average score. 
// For example, A for scores >= 90, B for scores >= 80, and so on


//define arrow function for 3 subjects' scores
const calculateAverage = (mathScore, scienceScore, englishScore) => {
//not needed, just wanted to see if I can call individual scores - found it must be done INSIDE function
    console.log(`You scored ${mathScore} in Maths`)
    console.log(`You scored ${scienceScore} in Science`)
    console.log(`You scored ${englishScore} in English`)
//returns average of 3 scores
    return ((mathScore + scienceScore + englishScore) / 3)
}
//set the scores for the 3 subjects, in a variable so I can use in grade section (shorter way than this?)
let av = calculateAverage(9,15,7)

console.log(`Your average score is ${av}`)

let grade = ""
//if statement to give a grade based on score, added colours and bold for fun (ANSI escape codes)
    if (av >= 90){
        grade = "\x1b[33mA\x1b[0m"
    }else if (av >= 80){
        grade = "\x1b[32mB\x1b[0m"
    }else if (av >= 70){
        grade = "C"
    }else if (av >= 60){
        grade = "\x1b[35mD\x1b[0m"
    }else if (av >= 50){
        grade = "\x1b[91mE\x1b[0m"
    }else{ grade = "\x1b[1m\x1b[31mFAIL!\x1b[0m"
 }

console.log(`Your grade is ${grade}`)