//date() details

let calender = new Date()
console.log("currentCal:", calender)

let currentYear = new Date().getFullYear()
console.log("currentyear:", currentYear)

let currentDate = new Date().getDate()
console.log("currentDate:", currentDate)

let currentMonth = new Date().getMonth()
console.log("currentmonth:", currentMonth, "datatype:",typeof(currentMonth))  

let currentMonth1 = new Date().getMonth().toLocaleString()  //display number/other value into a string 
console.log("currentmonth 1:", currentMonth1, "datatype:",typeof(currentMonth1))

let hour =new Date().getHours()
console.log("hour:",hour)

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//LOGICL OPERATOR
// && AND
// || OR
// != NOT EQUAL

//else if statement

let score =  prompt("Enter ur score")
    if(score >= 80) {
    console.log("Grade A")
    }else if(score < 80 && score >= 60) {
        console.log("Grade B")
    }else{
        console.log("Grade C")
    }

//ternary operator

// condition ? perform task : other task (for singal value)
// condition ? perform task : condition ? perform task : other task (for multiple value)

console.log("__________________ternary operation___________")
score >= 80 ? console.log("Grade A"):
score < 80 && score >= 60 ? console.log("Grade B"):
console.log("Grade C")


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//strict comparsion(===)

let a = '10'
a === '10' ? console.log("it is equal"): console.log("it is not equal")
a === 10 ? console.log("it is equal"): console.log("it is not equal")  //here it display not equal bcoz the assigned value is string which is not equal to number

// equal comparison(==)
let b = '10'
b == '90' ? console.log("equal"): console.log("not equal")
b == 10 ? console.log("equal"): console.log("not equal")