function average(array){
let sum = 0
for (let i =1;i<array.length;i++){
    sum+=array[i]
}
let Average = sum/array.length
if(Average<60){
    console.log('the average is :'+ Average + '\n'+'its grade is F')
}
else if(Average<70){
    console.log('the average is :'+ Average + '\n'+'its grade is D')
} 
else if (Average<80){
console.log('the average is :'+ Average + '\n'+'its grade is C')
}
else if (Average<90){
console.log('the average is :'+ Average + '\n'+'its grade is B') 
}
else if (Average<100){
    console.log('the average is :'+ Average + '\n'+'its grade is A') 
    }
}
average([80,77,88,95,68])