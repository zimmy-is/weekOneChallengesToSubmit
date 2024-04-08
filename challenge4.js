let randNum = 1
let arr = []
// generate 6 random numbers between 1&50
for (let i = 0; i < 6; i++){
    randNum = (Math.ceil(Math.random() * 50));
//push random number into an array
    arr.push(randNum)  
}
console.log(arr)