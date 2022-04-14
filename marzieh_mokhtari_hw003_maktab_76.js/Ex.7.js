function multiply(n){
    if(n===1) return 123
    else{
        return (123 + multiply(n-1))
    }
}
console.log(multiply(4)) 