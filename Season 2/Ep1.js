console.log("Namaste");
console.log("JavaScript");
console.log("Season 2");
// Namaste
// JavaScript
// Season 2

// It is quickly printing because `Time, tide & Javascript waits for none.`

console.log("Namaste");
setTimeout(function () {
  console.log("JavaScript");
}, 5000);
console.log("Season 2");
// Namaste
// Season 2
// JavaScript

// Here we are delaying the execution using callback approach of setTimeout.

const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
// Callback Hell

api.createOrder(cart, function () {
  api.proceedToPayment();
});
//Inversion of Control