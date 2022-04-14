// 1. Calculate
// Read Radius
// Calculate A=πr2
let Radius=+prompt('please enter the radius:' )
function calculating_of_area(r){
    let area = Math.PI*(r**2)
    return area
}

     alert('area:'+ calculating_of_area(Radius))
//2. Using if..else, write the code which gets a number via prompt and then shows in alert:
// 1, if the value is greater than zero
// -1, if less than zero,
// 0, if equals zero.
let Number = + prompt('please enter a number:')
if (Number>0){
    alert(1)
}
else if (Number<0){
    alert(-1)
}
else{
    alert(0)
}
// 3. Create a program that:
// Reads the number of years employed
// Reads the number of children the employee has
// Prints the total amount of salary the employee makes .
// Output: "The total amount is 560$. 400$ minimum wage + 100$ for 5 years experience + 60$ for 2 kids "
let year_employed = +prompt('please enter the number of year employed:')
let numberOfChildren = + prompt('please enter the number of children:')
function totalWage (year,kids){
    const min = 400
    let total_salary = min + 20*year + 30*kids
    return total_salary
}
alert(`total_salary:${totalWage(year_employed,numberOfChildren)}$`)
// 4. Write a function that:
// Get a number.
// Display the sum of natural numbers until the parameter is reached.
let naturalNunber = + prompt('please enter a nunbeer:')
let sum = 0
for(let i =1;i<=naturalNunber;i++){
sum=sum+i
}
alert(`sum: ${sum}`)
// 5. Write the code which outputs prime numbers in the interval from 2 to n.
// For n = 10 the result will be 2,3,5,7.
// P.S. The code should work for any n, not be hard-tuned for any fixed value.
let num = +prompt("please enter a number")
function primeNumber(prime) {
nextNumber :
for (let i = 2 ; i <= prime ; i++ ) {
for (let j = 2 ; j < i ; j++ ) {
if (i % j === 0){
continue nextNumber ;
}
}
console.log(i)
}
}
primeNumber(num)
// 6. Let's write a program to make a simple calculator with the switch statement .
// Just assume + , - , * , / .
function calculator(x,operator,y){
switch(operator){
    case '+':
     console.log(x+y)
     break;
    case '-':
        console.log(x-y)
    break;
    case '*':
        console.log(x*y)
        break;
    case'/':
    console.log(x/y)
    break;
    default:
    console.log('impossible')

}
}
 calculator(5,'*',3)  