const mongoose=require("mongoose")


const connectdatabase=()=>{
    mongoose.connect(process.env.DB_URI,{useNewUrlParser: true,useUnifiedTopology: true,
        //  useCreateIndex: true,
        }).then((data)=>{
        console.log(`Mondodb connected to server ${data.connection.host}`)
        }).catch((err)=>{
            console.log(err)
        })
}

module.exports=connectdatabase