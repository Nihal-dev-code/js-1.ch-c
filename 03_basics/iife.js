// immediatly invoked function expressions (iife)
//  (function chai(){
//     console.log(`db connected`);
// })()

// (function aur(){
//     console.log(`db connected`);
// })()    (arror ayega)

//  (function chai(){
//   console.log(`db connected`);
// })();

//  (function aur(){
//      console.log(`db connected`);
//  })()    

(function cha(){
    // named iife
   console.log(`db connected`);
 })();

((name)=>{
    // unnamed iife
    console.log(`db connected ${name}`);
})('Nihal')    
