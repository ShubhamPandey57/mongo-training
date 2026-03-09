// const product=(a,b)=>a*b
// console.log(`product:${44,50}`)



// const userdata={
//     fullname:"shubham",
//     email:"admin@gamil.com",
//     phone:232434343434,
//     city:'mohali'
// }
// console.log(userdata)
// console.log(userdata.fullname)

// fetch('https://jsonplaceholder.typicode.com/posts/5')
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// async function fetchData() {
//     try{
//         const res=await fetch('https://fakestoreapi.com/carts')
//         const data=await res.json()
//         console.log(data)
//     }
//     catch(error){
//         console.log(`fetch operation failed:${error}`)
//     }

// }
// fetchData()

//async programming
// console.log("start")
// setTimeout(()=>{
//     console.log("timer")
// },5000)
// console.log("end")

//user request->node server->v8 execute JS->if sync(call stack) if async(libuv)->libuv handles via:thread,os networking->callback added to queue->event loop executes callback
