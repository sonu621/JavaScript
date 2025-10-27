// fetch('https://randomuser.me/api/')

const { use } = require("react");

const promiseONe = new Promise(function (resolve, reject) {
  // Doing some async tasks
  // DB calls, cryptography, network calls
  setTimeout(function () {
    // console.log('Async task is completed');
    resolve();
  }, 1000);
});

promiseONe.then(function () {
  // console.log('Promise consumed');
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log('Async task 2 completed');
    resolve();
  }, 1000);
}).then(function () {
  // console.log('Promise 2 consumed');
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Sonu", email: "sonu@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  // console.log(user);
});

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true
//     if (!error) {
//       resolve({ username: "Sonu", email: "sonu@gmail.com" });
//     } else {
//       reject("Error: Something went wrong!")
//     }
//   }, 1000)
// })

// promiseFour
//   .then((user) => {
//     console.log(user)
//     return user.username
//   })
//   .then((username) => {
//     console.log(username)
//   })
//   .catch(function (error) {
//     console.log(error)
//   }).finally(() => console.log('Promise is settled'))


const promiseFIve = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true
    if(!error){
      resolve({username: "Sonu", email: "sonu@gmail.com"})
    }else{
      reject("Error: JavaScript went wrong!")
    }
  }, 1000)
})

async function consumePromiseFive(){
  const response = await promiseFIve
  console.log(response);
}

consumePromiseFive()