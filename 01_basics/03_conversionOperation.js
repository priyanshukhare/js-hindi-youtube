//*******To Number Conversion***********
let score = true//"33abc"//"33" // 33
console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber)

//"33" => 33
// "33abc" => NaN
// true => 1; false => 0


//*******To Boolean Conversion***********
let isLoggedIn = "priyanshu"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "priyanshu" => true

//*******To String Conversion***********
let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);