const express=require("express")
const cors=require("cors")
const error=require("./middleware/error")
const app =express()

app.use(express.json())
app.use(error)
app.use(cors())

const movie= require("./routes/movieroutes")
const Bookmovie=require("./routes/bookmovie")

app.use("/api/v1",movie)
app.use("/api/v1",Bookmovie)

module.exports=app