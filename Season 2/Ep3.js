const cart = ["shoes","pants","kurta"]

const promise = createOrder(cart);

promise.then(function(orderId){
  console.log(orderId)
  //proceedToPayment(orderId);
})

//producer 
function createOrder(cart){
  const pr = new Promise(function (resolve, reject){

    //createOrder
    //validateCart
    //orderId
    if(!validateCard(cart)){
      const err = new Error("cart is not valid")
      reject(err)
    }
    // logic for createOrder
    const orderId = "12345";
    if(orderId){
      resolve(orderId)
    }

  })

  return pr;
}

function validateCart(cart){
  return true;
}