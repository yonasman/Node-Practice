// practicing asynchronous js
// callback

function orderPizza(callback) {
    console.log("Call your friend");
    setTimeout((pizza) => {
        console.log("Your pizza is ready");
        callback(pizza);
    },2000)
}
const pizzaReady = function(pizza) {
    console.log("Eat your pizza");
}
// orderPizza(pizzaReady)

// promises
// fetch("https://randomuser.me/api/")
// .then((res) => res.json())
// .then((data) => console.log(data.results[0].gender)).catch((err) => console.log("stg went wrong",err));
// let promise = new Promise((resolve,reject) => {
//     let success = true;
//     if(success) {
//         resolve("resolved")
//     } else {
//         reject("rejected")
//     }
// })
// promise.then((value) => {
//     console.log(value)
// })

// async await
async function logUser() {
    try {
        const res = await fetch("https://randomuser.me/api/");
        const data = await res.json();
        console.log(data.results[0])
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Resolved");
    }
    
}
// logUser()
// displaying users on the frontend
// get container
const userCont = document.getElementById("user-cont");
async function displayUser() {
    try {
        const res = await fetch("https://randomuser.me/api/");
        const data = await res.json();
        const user = data.results[0]
        console.log(user)
        // display
        userCont.innerHTML = `
        <img src="${user.picture.large}">
        <p>Name: ${user.title} ${user.first} ${user.last}</p>
        <p>Email: ${user.email}</p>
        <p>Gender: ${user.gender}</p>
        `
    } catch (error) {
        console.log("ERROR",error);
    }
}
// displayUser()
let promise = new Promise((resolve,reject) => {
    reject("gone")
})
promise.then((data) => {
    console.log(data)
},(error)=>{
    console.log(error)
})