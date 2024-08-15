// What is async?
// What is await?
// How async await works behind the scenes?
// Example of using async/await
// Error Handling
// Interviews
// Async await vs Promise.then/.catch

// async function getData() {
//   return p
// }

// const dataPromise = getData()

// dataPromise.then((res)=> console.log(res))

// const p = new Promise((resolve,reject)=>{
//   resolve("Promise Resolved Value")
// })

// async function handlePromise() {
//   const val = await p;
//   console.log(val);
// }
// handlePromise();

async function handlePromise() {
  // fetch() => Response Object which as body as Readable stream => Response.json() is also a promise which when resolved => value
  const data = await fetch('https://api.github.com/users/ankitXD');
  const res = await data.json();
  console.log(res);
};
handlePromise()