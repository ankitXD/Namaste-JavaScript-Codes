function x(){
  for (var index = 1; index <= 5; index++) {
    function close(x){
        setTimeout(function (){
        console.log(x)
      },x * 1000)
    }
  }close(index)
  console.log("Hello")
}
x()