console.log("JavaScript Promises")

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("No random number is less then 0.5")
    }
    else {
        setTimeout(() => {
            console.log("I AM DONE")
            resolve("resolved")
        }, 1000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("No random number is less then 0.5 (2)")
    }
    else {
        setTimeout(() => {
            console.log("I AM DONE (2)")
            resolve("resolved (2)")
        }, 3000);
    }
})

// let p1 = Promise.all([prom1, prom2])
// p1.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

let p1 = Promise.allSettled([prom1, prom2])
p1.then((a) => {
    console.log(a)
}).catch((err)=>{
    console.log(err)
})

// refer JavaScript notes for theory