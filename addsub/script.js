// ```1. Create a function that logs the result of adding two numbers that were passed in as
// arguments.
const addNum = ( ad, b) => console.log(ad + b)
const sub = (a, b) => console.log (a-b)

addNum(34, 56)
sub(100, 99)
// 2. Create another function that logs the result of subtracting 
//two numbers that were passed in as arguments.
// 3. Invoke each function a couple times with different argument values.```
const calc = (a, b, c) => {
    c(a, b)
}

calc(500, 500, sub)


