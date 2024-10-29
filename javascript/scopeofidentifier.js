//let, var , const - scopes

//var identifier
var num = 30; //global scope
// var num = 40;
function display1(){
    var res = num * num; //local scope
    var txt = 'inner'  //local scope
    if(num === 30){
        var greet = 'welcome' //block-level scope
        console.log("greet 1:", greet)
    }
    console.log("res 1:", res) 
    console.log("txt 1:", txt) 
    console.log("greet 1:----",greet)
}
console.log("__________________hello var__________________")
//console.log("greet", greet)  //throws error, becoz block scope cant be accessed outside the function
//console.log("res 1:",res)
//console.log("txt", txt)  // throws error, becoz local scope cant be accessed outside the function
display1()
 
//==============================================================================================================================================

//let identifier
let digit = 40;  //global scope
//digit = 50;
function show(){
    let result = digit * digit;  //local scope
    let txt1= 'inner';  //local scope
    if(digit === 40){
        let message = 'hello'    //block-level scope 
        console.log("message 2:",message)
    }
    console.log("res 2:", result)
    console.log("txt 2:", txt1)
    // console.log("message:", message)  //block-level scope wont ecexute outside the if condition in let  and const idetifier
}
console.log("____________________hi let____________________")
//console.log("message", message) throws error, becoz block scope cant be, accessed outside the function
//console.log("txt1", txt1)// throws error, becoz local scope cant be accessed outside the function
show()

//==============================================================================================================================================

//const identifier
const digit1 = 90;  //global scope
//digit = 50;
function share(){
    const result = digit1 * digit1;  //local scope
    const txt1= 'inner';  //local scope
    if(digit1 === 90){
        const message = 'hello'    //block-level scope 
        console.log("message 3:",message)
    }
    console.log("res 3:", result)
    console.log("txt 3:", txt1)
    // console.log("message:", message)  //block-level scope wont ecexute outside the if condition in let  and const idetifier
}
console.log("________________welcome const__________________")
//console.log("message", message) throws error, becoz block scope cant be, accessed outside the function
//console.log("txt1", txt1)// throws error, becoz local scope cant be accessed outside the function
share()

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// redcalartion and reassignment

console.log("____________redeclaration and reassing__________")

//var identifier
var num1 = 30; 
var num1 ;   //redeclaration
var num1 = 10;   //reassignment
function display2(){
    var res = num1 * num1;
    console.log("var 4:", res) 
}
display2()

//==============================================================================================================================================

//let identifier
let digit2 = 40; 
// let digit2 = 10; throws error bcoz redeclaration cannot be done in let identifier
digit2 = 22; //only reasssignment can be done
function show1(){
    let result = digit2 * digit2;  
    console.log("let 5:", result) 
}
show1()

//==============================================================================================================================================

//const identifier
const hi = 101; 
// let hi = 10; throws error bcoz redeclaration cannot be done in const identifier
// hi = 77; throws error bcoz redeclaration cannot be done in const identifier
function min(){
    const result = hi * hi;  
    console.log("const 6:", result) 
}
min()

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// hositing - assign the value , thn print , thn declare varaiable name 
 
console.log("___________________hoisting_____________________")

// var identifier
x = 10; //assign
console.log("x value is:",x);
var x;  //declare

// let identifier
// y = 10;
// console.log("y value is:",y);  //throws error
// let y;

//const identifier
// z = 10;
// console.log("z value is:",z);  //throws error
// const z;