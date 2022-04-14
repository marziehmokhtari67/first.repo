function numberofday(date){
  
let month= date.getMonth()+1
console.log(month)
let year = date.getFullYear()
switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('the number of days is:31')
        break

    case 4:
    case 6:
    case 9:
    case 11:
        console.log('the number of days is:30')
        break
     case 2:
         if(year%4===0 && year%100===0 && year%400===0){
             console.log('because of leap year the number of days is:29')
         }
         else{
            console.log(' the number of days is:28')   
         }
         break
    default:
        console.log('the number 0f month is invalid')

}
}

numberofday(new Date)