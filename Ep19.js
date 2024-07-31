const arr = [1,2,3,4,5]

//map function

function double (x){
  return x * 2
}

function triple (x){
  return x * 3
}

function binary (x){
  return x.toString(2)
}

const output1 = arr.map(double)
console.log(output1)
const output2 = arr.map(triple)
console.log(output2)
const output3 = arr.map(binary)
console.log(output3)

// filter

function isOdd(x){
  return x%2
}

const output = arr.filter(isOdd)

console.log(output)

//reduce

function findSum(arr){
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum =  sum + arr[index];
  }
  return sum;
}
console.log(findSum(arr))

const output4 = arr.reduce(function (acc,curr){
  acc = acc + curr
  return acc
},0)
console.log(output4)

function findMax(arr){
  let max = 0;
  for (let index = 0; index < arr.length; index++) {
    if(arr[index]>max){
      max = arr[index]
    }
  }
  return max;
}
console.log(findMax(arr))

const output5 = arr.reduce(function (max,curr){
  if(curr>max){
    max = curr
  }
  return max
},0)
console.log(output5)

