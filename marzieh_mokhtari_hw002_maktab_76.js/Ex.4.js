//Ex4
let cityName = prompt('please enter your city name:')
let productCost = +prompt('please enter product cost:')
let totalAmount
switch(cityName){
    case 'tehran':
         totalAmount = productCost;
        console.log('total amount of payment:' ,totalAmount);
        break
    case 'karaj':
        totalAmount = 10000 + productCost; 
        console.log('total amount of payment:',totalAmount);
    break
    default:
        totalAmount = 20000 + productCost;
        console.log('total amount of payment:',totalAmount)
}