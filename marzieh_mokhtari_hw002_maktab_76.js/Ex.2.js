let spend_houres = +prompt('please enter the numbers of houres that users spend:')
let member = confirm('is the user a member? ')
function tax(houres){
    if(member===true){
        let total_tax = 2*houres+0.1*(2*houres)
        console.log(total_tax)
        
    }
    else{
        console.log('user must not spend tax')
    }
    
}
tax(spend_houres)