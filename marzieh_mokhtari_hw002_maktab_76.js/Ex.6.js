let number = +prompt('please enter an integer number:')
function fib(n){
    let result ;
    if(n===0){
        
        let FirstFib = 0
        
        return FirstFib
    }
    else if( n===1){
        let SecondFib = 1
        return SecondFib
    }
    else if (n>=2){
        return fib(n-2) + fib(n-1)

    }
    return result
}
console.log(fib(number))