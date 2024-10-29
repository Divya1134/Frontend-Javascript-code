function add(){
    let a = 10
    let b = 20
    let c = a + b 
    console.log("sum:", c)
    }
add()

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//passing parameter/arguments method
function sub(p,q){
    let r = p - q
    console.log("differnce:",r)
    }
sub(10,20) 

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//return statement
function mult(a,b){
    let c = a*b
    console.log("Hello")
    return c
    console.log("product",c)
    console.log("Hi")
    }
console.log("Hi")
console.log("value:",mult(10,3)) //perform mul outside the loop
let product = mult(20,20)
console.log("product:",product)   

// consider we hv created a func the whole func is called defination until func call is called.once the func call 
// is called it willl perform the task if console is present it will print console thn goes n check for next line 
// if func name is present it will move to func n perform task but it will not preint n thn it will move n print 
// the next console value and then print the output and goes for nxt satement repeat same thing