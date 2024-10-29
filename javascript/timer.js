// setTimeout() - is used to take some time to display the content

setTimeout(() => {
    console.log("HI THERE");
    document.write("WELCOME ")
},3000);

//setInterval() - is used to call the value again and again in an given interval of time

setInterval(() => {
    console.log("hii");
    document.write("hello ")
}, 3000);

// Promise() - has 3 states pending,resolve,reject

const promise1 = new Promise ((resolve, reject) => {
    let fileloaded = true;
    if (fileloaded== false){
        resolve ("success")
    }else{
        reject (" Not success")
    }})
    .then ((data) => console.log ("data", data)) //success
    .catch ((error) => console.log ("error",error)) //not success