function saymyname(){
    console.log("n");
    console.log("i");
    console.log("h");
    console.log("a");
    console.log("l");
}
// saymyname()
function addtwonumbers(number1,number2){
    console.log(number1+number2);
}
addtwonumbers()   //arguments
addtwonumbers(3,7)

// parameter
// function loginusermessage(username){
//     if(!username){
//         console.log("enter a username");
        

//     }
//     return `${username} just logged in`
// }
// console.log(loginusermessage());
function calculatecartprice(...num1){

    return num1
}
console.log(calculatecartprice(20,30,40));
 
