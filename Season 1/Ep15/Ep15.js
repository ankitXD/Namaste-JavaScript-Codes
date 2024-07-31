// function a(){
//   console.log("a")
// }
// a()
// console.log("end")

// console.log("start")
// setTimeout (function cb(){
//   console.log("callback")
// },5000)
// console.log("end")

console.log("start")
document.getElementById("btn").addEventListener("click", function cb(){
  console.log("callback")
})
console.log("end")