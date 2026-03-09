// const math=require('./math')
// console.log(math.add(10,20))
// console.log(math.mul(8,6))
// console.log(math.sqr(5))
// console.log(math.div(6,3))


//creating a folder
// fs.mkdir("new folder",(error)=>{
//     if(error) throw error
//     console.log("folder created")
// })

//create a file 
// fs.readFile("new folder/example.txt",'hello',(error)=>{
//     if (error) throw error
//     console.log("written successfully")
// })


//read a file
// fs.readFile("new folder/example.txt",'utf-8',(error,data)=>{
//     if (error) throw error
//     console.log(data)
// })

//append operation
// fs.appendFile("new folder/example.txt",'\nworld',(error)=>{
//     if (error) throw error
//     console.log("append successfully")
// })

//delete a file
// fs.unlink("new folder/example.txt",(error)=>{
//     if (error) (
//              console.log(error)
//              return
//         )
//     console.log("delete successfully")
// })


// read json file
// const fs =require("fs")
// const path=require("path")
// const filepath = path.join(__dirname , "cgcBackend/data" , "user.json")
// console.log(`the path to the folder --${filepath}`)
// fs.readFile(filepath,'utf-8',(err ,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)
// })

//--------------------------------------------------------------------------------------------------------//

//use OS module
// const os=require("os")
// //platform
// console.log(`platform:${os.platform()}`)
// //architecture
// console.log(`architecture:${os.arch()}`)
// //cpu cores
// console.log(`cpu cores:${os.cpus().length}`)
// //total memeory(gb)
// console.log(`total memeory:${os.totalmem()/(1024**3).toFixed(2)}`)
// //free memory(gb)
// console.log(`total free memory:${os.freemem()/(1024**3).toFixed(2)}`)


// //checking if syste id capable or not
// const totalMemory=(os.totalmem()/(1024**3).toFixed(2))
// console.log(totalMemory)
// if (totalMemory<16){
//     console.log("system does not meet minimum reqiurements")
// }
// else{
//     console.log("system is good to run the application")
//}

//--------------------------------------------------------------------------------------------------------//

// HTTp module

//create http severs and clients
//client(browser)->http request->Node.js server(http module)->http response->client sees output
// const http=require("http")
// const server=http.createServer((req,res)=>{
//     res.write("welcome User")
//     res.end()
// })
// server.listen(5000,()=>console.log("server is running on http://localhost:4000"))


//routing multiple pages
// const http=require("http")
// const server=http.createServer((req,res)=>{
//     if (req.url=='/'){
//         res.end("Home Page")
//     }
//     else if (req.url=="/about"){
//         res.end("About Page")
//     }
//     else if (req.url=="/service"){
//         res.end("Service Page")
//     }
//     else if (req.url=="/contact"){
//         res.end("Contact Page")
//     }
// })
// server.listen(5000,()=>console.log("server is running on http://localhost:5000"))



//setting response headers
//200 for success, 404 for page not found, 500 for server error
//to send html 
// const http=require("http")
// const fs = require("fs");
// const path = require("path");

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"application/json"})
//     const filepath = path.join(__dirname , "cgcBackend/data" , "user.json")
//     fs.readFile(filepath, "utf-8", (err, data) => {
//         if (err) {
//             res.writeHead(500, { "Content-Type": "application/json" });
//             res.end(JSON.stringify({ error: "Unable to read file" }));
//         } else {
//             res.end(data); 
//         }
//     });
// });


// server.listen(5000,()=>console.log("server is running on http://localhost:5000"))



// display data using route
// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.end("Home Page");
//     } 
//     else if (req.url === "/users") {
//         const filepath = path.join(__dirname, "cgcBackend", "data", "api.json");

//         fs.readFile(filepath, "utf-8", (err, data) => {
//             if (err) {
//                 res.writeHead(500, { "Content-Type": "application/json" });
//                 res.end(JSON.stringify({ error: "Unable to read file" }));
//             } else {
//                 res.writeHead(200, { "Content-Type": "application/json" });
//                 res.end(data);
//             }
//         });
//         // const filepath=path.join(__dirname,"cgcBackend/data","api.json")
//         // fs.readFile(filepath,"utf-8",(error,data)=>{
//         //     if(error){
//         //         console.log(JSON.stringify({error}))  //or use parse for convert into object and value data
//         //         return
//         //     }
//         //     else{
//         //         console.log(data)
//         //     }
//         // })
//     } 
// });

// server.listen(5000, () => console.log("Server is running on http://localhost:5000"));

