function bubleAlgoritm(array){
for(let i=0;i<array.length;i++){
if(array[i]>array[i+1]){
    [array[i],array[i+1]]=[array[i+1],array[i]]

}
}
return array
}
console.log(bubleAlgoritm([0,2,5,3,9]))