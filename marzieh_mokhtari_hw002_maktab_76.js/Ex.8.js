let result = []
let sorting= function sort(a,b,c){
     max = Math.max(a,b,c)
    min = Math.min(a,b,c)
    if (a!==max && a!==min){
        result = [max,a,min]  
    }
    else if(b!==max && b!==min){
        result = [max,b,min]  
    }
    else{
        result = [max,c,min]
         
    }
    return result
    
}
console.log(sorting(4,5,1))