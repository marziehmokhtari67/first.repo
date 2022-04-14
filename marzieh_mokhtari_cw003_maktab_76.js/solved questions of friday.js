// //  Create a function that takes two numbers as arguments (num, length) and
// returns an array of multiples of num until the array length reaches length.
function array_of_multiplys(num,length){
let multiply = []
for(let i =1; i< length+1; i++){
multiply[i-1]= num * i
}
return multiply
}
console.log(array_of_multiplys(10,4))
//Create a function that takes an array of numbers and returns the second
// largest number.
function largestSeccondNumber(a){
    let b = a.sort((a, b) => a-b)
    let c =b[b.length-2]
    return c
}
console.log(largestSeccondNumber([89,100,684,965,52]))
//Create a function that takes an array of items, removes all duplicate items
// and returns a new array in the same sequential order as the old array (minus
//     duplicates).
function newarray(f){
    let g = []
    for(let i=0;i<f.length;i++ ){
        if(g.indexOf(f[i])===-1){
            g.push(f[i])
        }
    }
    return g
}
console.log(newarray(['a','a','b','c','d','c']))
// Create a function that takes a number and returns an array with the digits of
// the number in reverse order.
function Reverse(a){
    let digit= a.toString().split('')
    let c = digit.reverse()
   for (i = 0;i<c.length;i++){
       c[i]= Number(c[i])
   }
    return c
}
console.log(Reverse(123456789))
