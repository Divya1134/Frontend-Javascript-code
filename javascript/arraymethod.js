// Array declaration
let arr = ['apple',50.23,true]
console.log("array value:",arr)
for(i=0;i<3;i++){
    console.log("array value:",arr[i])
}

// Array methods

let color = ['black','white','purple','green']
console.log("color:",color)

// push() 
color.push('blue')  //push maethod is used to add the element in the last index of array
console.log("color 1:",color)

// unshift()
color.unshift('gold')  //unshift maethod is used to add the element in the first index of array
console.log("color 2:",color)

// pop() 
color.pop()  //pop maethod is used to delete the element in the last index of array
console.log("color 3:",color)

// shift()
color.shift()  //unshift maethod is used to delete the element in the first index of array
console.log("color 4:",color)

// splice()
let x = color.splice(1,2,'silver','maroon')  //used to remove the value and add any value in place of removed object
console.log('x:',x)
console.log('color 5:',color)

// indexOf()
console.log('array indexof:',color.indexOf('silver'))
console.log('array indexof:',color.indexOf('purple'))

// sort()
let num1 = [34,56,98,12,45]
console.log('sort 0:',num1)
console.log('sort 1:',num1.sort()) //sort maethod is used to arrange the elements in an ascending order directly
console.log("sort 2:",num1.sort((a,b)=>b-a))  //is used to arrange the elements in an descending order in an array
//((a,b) => a-b) call back function 

// reverse()
let num2 = [90,65,89]  //used to reverse the content
console.log('reverse :',num2.reverse())

// reduce()
let price = [7,8,9]
console.log("Reduce:",price.reduce((item,currentitem)=> item + currentitem,0))
// console.log("price:",price.reduce((a,b)=> a + b,0)) used to minimize the elements and give the single output out of that
// 0+7,0+7+8,0+15+9=24

// set() and ...spread operator
let a = [29,47,91,64,89,29,0,91,]
console.log("set:",[...new Set(a)]) //it performs union operation by using ...spread operator alomg with the method

// filter()
let ele = [11,8,24,75,87,0]
console.log("filter even:",ele.filter((data)=> data % 2 ==0))  //filter method is called when there is a condition
console.log("filter odd:",ele.filter((data)=> data % 2 !=0))

// join()
let p = 'mango'
let q = p.split('').reverse().join('') //split-'m','a',n','g','o'  reverse-'o','g','n','a','m'  join()-o,g,n,a,m join('')-ognam
console.log("join:",q)

// map()
let r = [89,9,56,34,75,14]
r.map((data,index)=>console.log("data:",data,"index value:",index))  //map is used for iterating and also to find out the data and index value of a given item