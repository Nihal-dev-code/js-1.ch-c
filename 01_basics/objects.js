const regularuser={
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudary"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3=Object.assign(obj2,obj1)
// console.log(obj3);
const obj3={...obj1,...obj2}
console.log(obj3);
console.log(obj3.hasOwnProperty(1));


