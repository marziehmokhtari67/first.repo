
// function makeCounter() {
//     let counter = 0;
//     return function () {
//     return ++counter;
//     };
//     }
//     const clicked = makeCounter();
//     alert(clicked());
//     alert(clicked());
//     alert(clicked());
// alert(1+[1,2])
// alert( [0] === [0] )
// let styles = ['juzz','blues']
// styles.push('Rock-in-Roll')
// styles[1]='Classics'
// styles.shift()
// styles.unshift('Rap','rega')
// alert(styles)

// let arr = []

// function sumInput(){
    
    
//     while ( true) {
//          a = prompt('plaese enter a value:')
//          if(a=== null|| a===''||a==='cancel') 
//         break
//         arr.push(+a)
        
//     }   
        

//    return arr   

// }
//  console.log(sumInput())
function maximalsubarray(b){
    let sum = 0
    let maximum = 0
    for(let i =0; i<b.length;i++){
        sum +=b[i]
         maximum = Math.max(sum,maximum)

    }
// 
return maximum
}
console.log(maximalsubarray([1,2,3]))

