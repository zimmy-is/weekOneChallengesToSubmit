// let numb = 20

// if (numb >= 11 && numb < 20 && numb % 4 == 0){
//     console.log(`The number ${numb} is in the teens, and it's an even number`)
// }else if (numb < 10 && numb >= 1 && numb % 4 == 0){
//     console.log(`The number ${numb} is a single digit, and it's an even number`)
    
// }if (numb >= 11 && numb < 20 && numb % 4 != 0){
//     console.log(`The number ${numb} is in the teens, and it's an odd number`)
// }
// else if (numb < 10 && numb >= 1 && numb % 4 != 0){
//     console.log(`The number ${numb} is a single digit, and it's an odd number`)   
// }else{
//     console.log(`The number ${numb} is 20 or over`)
// }
 
let num1 = 16
let num2 = 15
let sumNum = num1 + num2

//check if num1 or num2 are strings
    if (typeof num1 === "string" || typeof num2 === "string"){
        console.log("make sure you enter two numbers")
//check if sumNum is even, log sumNum
    }else if (sumNum % 4 == 0){
     console.log(sumNum)
//if not log num1 x num2
    }else{
        console.log(num1 * num2)
    }


