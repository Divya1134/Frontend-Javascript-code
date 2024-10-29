// objects
let student = {id:101,name:'Alice',subject:'react'}
console.log("student 1:",student)
console.log("student 2:",student.name) //display particular element
console.log("student 3:",student['subject'])  //display particular element
student.name = 'John'  //update value
student.address = 'bangalore'  //add new value
console.log("student 4:",student)

//Array of objects
let student1 = [{id:101, name: 'John', subject: 'React'},
                {id:102, name: 'Nethan', subject: 'React'},
                {id:103, name: 'John', subject: 'React'},
                {id:104, name: 'Peter', subject: 'React'},
                {id:105, name: 'Mark', subject: 'React'}]  //adding multiple items in a single object by using array method
console.log("student info 1:", student1)
console.log("student info 2:", student1 [4].name)
student1.map((data)=>{    //for iteration we used array map method
    if (data.name === 'John') {   //if is used to check the condition
        data.name = 'John Peter'
        }
    })
console.log("student info 3:",student1)