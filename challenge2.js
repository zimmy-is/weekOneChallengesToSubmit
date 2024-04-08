num = -200

//check if num is a string
if (typeof num === "string" || num <= 0) {
    console.log(`${num} needs to be a positive number`)
// is divisible by 3?
}else if (num % 3 == 0){
// if so, is divisible by 5? (nested within previous condition)
    if (num % 5 == 0){
    console.log("fizz buzz")}
    // is divisible by just 3?
}else if (num % 3 == 0){
    console.log("fizz")
    // is divisible by just 5?
}else if (num % 5 == 0){
    console.log("buzz")
}
else{
    console.log(num)
}
