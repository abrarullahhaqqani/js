//Dates
// let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate)

// let createDate=new Date(2026,2,31,0,0)//months are 0 indexed
// console.log(createDate.toLocaleString())

// let myDate=new Date("2026-03-31")
// console.log(myDate.toLocaleString())

// let myDate1=new Date("03-31-2026")
// console.log(myDate1.toLocaleString())

// let myTimeStamp=Date.now()//Milliseconds since 1 Jan 1970
// console.log(myTimeStamp)
// console.log(myDate.getTime())

// console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)//months are 0 indexed
console.log(newDate.getDay())

console.log(newDate.toLocaleString('default',{
    weekday:'long'
}))