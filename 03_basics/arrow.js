const user={
username:"hitesh",
price:999,
welcomemessage:function(){
    console.log(`${this.username} welcome to website`);
    
}
}
user.welcomemessage()
const chai=function(){
    let username="hitesh"
    console.log(this.username);
    
}
chai()