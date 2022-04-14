//Ex3
let user_name = prompt('please enter your user name:')
let password = prompt('please enter your password:')
let verificated = prompt('please enter verificated password:')

for (let i=1;i<=3;i++){
    if(password===verificated){
        alert ('your account is created');
        break
    }
    else{
        verificated= prompt('try again');

    }
    
    }
 if (verificated!==password)alert('sorry you can not enter password again')
    