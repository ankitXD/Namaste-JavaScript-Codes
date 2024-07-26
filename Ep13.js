//Func Statement aka func declaration
function a(){
  console.log("func statement")
}
a()
//func expression
var b = function() {
  console.log("b is called")
}
b()
//

//anon func
// function (){
  
// }

//named func expression
var c = function xyz() {
  console.log("named")
}
c()

//difference between parameters and arguements
var d = function(param1, param2) {
  console.log("difference between parameters and arguements")
}
d(1,2)

//first class functions
var e = function (param){
  return function xyz(){

  }
}

console.log(e())

//arrow func