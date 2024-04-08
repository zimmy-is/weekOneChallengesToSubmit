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


