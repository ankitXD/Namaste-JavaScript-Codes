// function x(){
//   console.log("namaste")
// }

// function y(x){
//   x()
// }

const radius = [3,1,2,4]

const area = function (radius){
  return Math.PI * radius * radius
}

const circum = function (radius){
  return 2 * Math.PI * radius
}

const diameter = function (radius){
  return 2 * radius
}

const calculate = function (arr,logic){
  const output = []
  for(let i = 0; i < arr.length; i++){
    output.push(logic(arr[i]))
  }
  return output
}

console.log(calculate(radius,area))
console.log(calculate(radius,circum))
console.log(calculate(radius,diameter))