// What is a callback function in js

// setTimeout(function () {
//   console.log("timer")
// },5000)

// function x(y){
//   console.log("x")
// }
// x(function y(){
//   console.log("y")
// })

//JS is a synchronous and single threaded language

//blocking the main thread

//power of callbacks

// deep about event listeners

//closures demo with event listeners

// Scope demo with event listeners

//garbage collection & removeEventListeners

function attachEventListener(){
  let count = 0
  document.getElementById("clickme").addEventListener("click", function x(){
  console.log("hi" , ++count)
})
}
attachEventListener()