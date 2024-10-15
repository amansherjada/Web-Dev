let a = "Aman"

console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
// console.log(a[4]) undefined


// Template literals
let m = "Aman"
let n = "Adnan"

console.log(m + " is a friend of "+ n)
console.log(`${m} is a friend of ${n}`) //Template literal

// Escape sequence char
let sent = `manaf's network is fast because he is a "network" Engineer`
let sent2 = "manaf\"s network is goooood"
console.log(sent)
console.log(sent2)

// string properties
console.log(sent.length)
console.log(sent.toUpperCase())
console.log(sent.toLowerCase())

// slice
console.log(sent.slice(0, 15))
console.log(sent.slice(16))

// replace
console.log(sent.replace("fast", "very fast"))

// trim
let sent3 = "         manaf"
console.log(sent3.trim())

// concat
console.log(m.concat(" is a friend of ", n))

// strings are immutable 


console.log("ama\"".length) //4

// Returns true if searchString appears as a substring
console.log(sent.includes("fast"))

console.log(sent.endsWith("hello"))

console.log(sent.startsWith("manaf"))