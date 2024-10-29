// STRING METHODS

// charAt() - used to know the value by using the index number
var txt = 'hello'
console.log("value 1:",txt.charAt(0))
console.log("value 2:",txt.charAt(3))
console.log("value 3:",txt.charAt(9))  // display output has empty

// charCodeAt() and codePointAt() - used to know the UTF value by using the index number
console.log("UTF value 1:",txt.charCodeAt(1))
console.log("UTF value 2:",txt.codePointAt(4))
console.log("UTF value 3:",txt.codePointAt(8))  //display output as undefined

// concat() - used to merge the content by using the varaiable name
var name1 = 'Hi '
var name2 = 'Welcome'
var name3 = ' to Bangalore'
console.log("merged string is:",name1.concat(name2,name3))

// endsWith() - used to know the whether the content is ending with the given value and dispaly true if the element is present else display it has false
var test = 'flower'
console.log("ends with 1:",test.endsWith('er'))
console.log("ends with 2:",test.endsWith('we'))

// includes() - used to know the whether the content is present within the given value and dispaly true if the element is present else display it has false
console.log("includes 1:",test.includes('l'))
console.log("includes 2:",test.includes('g'))

// fromCharCode() and fromCodePoint() - used to know the UTF value by using the numbers from the already existing method string
var ab = String.fromCharCode(90,5,101)
console.log("utf value 1:",ab)

var abc = String.fromCodePoint(89,6,32,28,29,30,31)
console.log("utf value 2:",abc)

//indexOf() - used to know the whether the content is present in the first index of given value and dispaly index value if the element is present else display it has -1 index value
var fruit = 'pineapple'
console.log("indexof 1:",fruit.indexOf('p'))
console.log("indexof 2:",fruit.indexOf('h'))

//lastIndexOf() - used to know the whether the content is present at last in the given value and dispaly index value if the element is present else display it has -1 index value
console.log("Lastindexof 1:",fruit.lastIndexOf('p'))
console.log("Lastindexof 2:",fruit.lastIndexOf('m'))

//length - used to display the length of value assigned
let see = ' hi how are you ???'
console.log("Length:",see.length)  //no parameter is assigned for length

//padEnd() - used to add extra element at the end of given value 
let str = 'Alice '
console.log("padend:",str.padEnd(30,' how are you ?'))

//padStart() - used to add extra element at the begining of given value 
console.log("padstart:",str.padStart(30,' how are you ?'))

//repeat() - used to repeat the elements n number of time
console.log("repeat:", str.repeat(4))

//replace() - used to replace the first element value
let str1 ='i like java.java is a programming language'
console.log("replace 1:",str1)
console.log("replace 2:",str1.replace('java','javascript'))

//replaceAll() - used to replace all the element value which is present
console.log("replace all 1:",str1.replaceAll('java','javascript'))

let str2 = 'bat boat'
console.log("replace all 2:",str2)
console.log("replace all 3:",str2.replaceAll('b','c'))

//slice() and subString() - used to display the elements from the given index to another
console.log("slice 1:",str1.slice(12))
console.log("slice 2:",str1.slice(12,21))
console.log("sustring:",str1.substring(14,28))

//search() - used to search wether the element is present i.e 1 or not i.e -1
var fruit1 = 'mango'
console.log("search 1:",fruit1.search('g'))
console.log("search 2:",fruit1.search('i'))

//toUpperCase() - used to convet the whole value into upper case
console.log("upper case:",fruit1.toUpperCase())

//toLowerCase() - used to convet the whole value into lower case
let str3 = 'CAMERA'
console.log("lower case:",str3.toLowerCase())

//split() - used to convet the value into array and the split the content
console.log("split:",fruit1.split())        //['mango']
console.log("split:",fruit1.split(''))      //['m','a','n','g','o']
console.log("split:",fruit1.split(','))     //['mango']
console.log("split:",fruit1.split(';'))     //['mango']

//trim() - used to remove the excesss of space at begining and ending of a given string
let x = '    i like javascript    '
console.log("length of x:",x.length)
let z = x.trim()
console.log("length of z:",z.length)