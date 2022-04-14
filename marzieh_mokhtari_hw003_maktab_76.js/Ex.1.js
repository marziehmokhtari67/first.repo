function lonelyInteger(array){
for(let i =1;i<array.length;i++){
    if (array.indexOf(-array[i])===-1){
        return array[i]
    }
}

}
 alert(lonelyInteger([-9, -105, -9, -9, -9, -9, 105]))

