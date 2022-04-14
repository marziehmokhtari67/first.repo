let count =0
function countCharacters(char,string){
    
    for(let i=0; i<string.length; i++){
        if(string[i]===char){
            count+=1
        }
    }
    return count
}
console.log(countCharacters('m','marziehmokhtari'))