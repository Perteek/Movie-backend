const app =require("./app")

const dotenv=require("dotenv")

const connectdatabase=require("./config/database")

//handling uncaught error
process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`)
    console.log(`Shutting down the server due to uncaught expectation`)
    procees.exit(1)
})
// config
// dotenv.config({path:"./config/config.env"})  //for backend
dotenv.config({ path: "backend/config/config.env"}); //for both 
connectdatabase()


const server=app.listen(process.env.PORT,()=>{
    console.log(`App listening at port http://localhost:${process.env.PORT}`)
})

//unhandled promise rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error. ${err.message}`)
    console.log(`Shutting down the server due to unvalid connection string`)

    server.close(()=>{
        process.exit(1)
    })
})