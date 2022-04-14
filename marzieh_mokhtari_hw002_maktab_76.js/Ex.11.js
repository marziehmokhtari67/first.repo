function sum(n){
    if(n>1){
        return n + sum(n-1)
    }
    else{
    return 1
    }
}
console.log(sum(3))