// if
// const isuserlogged="true"
// const isuser="false"
// if(3==4){
// console.log(isuserlogged);
// }
// else{
//     console.log(isuser);
// }

// implicit scope
const balance=1000
// if(balance>500) console.log("test"), console.log("test2");

if (balance > 500) {
    console.log("less than 750");
    
}else if(balance>750){
    console.log("less than 750");
    
}
else if(balance > 900){
    console.log("less than 750");
    
}else{
    console.log("less than 1200");
    
}

const userloggedin=true
const debitcard=true

if (userloggedin&&debitcard)
    {
    console.log("allow to buy course");
}