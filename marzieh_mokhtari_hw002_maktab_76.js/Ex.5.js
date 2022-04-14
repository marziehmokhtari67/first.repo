//Ex5
let input = +prompt('please enter an integer number:')
let fibo_sequence = [0,1]
for (let i =2;i<=input;i++){
        fibo_sequence[i]=fibo_sequence[i-2]+fibo_sequence[i-1]
    }
    console.log(fibo_sequence)