// const cart = ["shoes","pants","kurta"]

// createOrder(cart,function (orderId){
//   proceedToPayment(orderId)
// })

// const promise = createOrder(cart)

// promise.then(function () {
//   proceedToPayment(orderId);
// });

const github_api = "https://api.github.com/users/ankitxd"

const user = fetch(github_api)

console.log(user)

user.then(function (data){
  console.log(data)
})