// const a=10;
// const name="ram"
// //In ternary ? is IF and : is Else
// const b = (a > 5 ? console.log("true") : console.log('false'));

// const c= (name.length ==3 ? console.log(true) : console.log(False));


const data={
    email:"email123gmail.com",
    pass:"123",
    isverified:false

}
const userinput='email123gmail.com'
const userinput1='123'

// const a=(data.email==userinput 
//     ? data.pass==userinput1 ? console.log('Access Granted')
//     : console.log('pass invalid')
//     : console.log('invalid email'))
    
    

const a=(data.email==userinput ?
     data.pass==userinput1 ?
     data.isverified ? console.log('access')
     : console.log('user not verified')
      
     : console.log('Invalid pass')
    : console.log('Invalid email'))