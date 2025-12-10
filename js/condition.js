const data={
  email:'email.com',
  pass:'123',
  isverified:false
}
const userInput='email.com'
const userInput2='123'
// if(data.email==userInput){
//     if(data.pass==userInput2){
//         console.log("access granted");

//     }
//     else{
//         console.log("Invalid Pass");
//     }
// }
// else{
//     console.log("Invalid Email");
// }
 

//Nested statement of If else

if(data.email==userInput){
    if(data.pass==userInput2){
        if(!data.isverified){ //In javascript ! is False
            console.log("Access Granted");
        }
        else{
            console.log("User not verified");
        }
       
    }
    else{
        console.log("Invalid Password");
    }
}
else{
    console.log("Invalid email");
}