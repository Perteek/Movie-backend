const Errorhandler = require("../utils/errorhandlerr")

module.exports=(err,req,res,next)=>{
    err.statuscode=err.statuscode ||(500)
    err.message=err.message || "Internal server errror"

    //wrong mongodb id error
    if(err.name==="CastError"){
    const message=`Resource not found. Invalid: ${err.path}`
    err=new Errorhandler(message,400)
}

    //mogoose duplictae key error
    if(err.code===11000){
        const message=`Duplicate ${Object.keys(err.keyvalue)} entered`
        err=new Errorhandler(message,400)
    }


        //wrong Jwt error
        if(err.name==="jsonwebTokenerror"){
            const message=`Json web token is invalid`
            err=new Errorhandler(message,400)
        }

        //jwt expire error
    if(err.name==="Tokenexpireerror"){
        const message=`Json web token is invalid`
        err=new Errorhandler(message,400)
    }
   
    
    res.status(err.statuscode).json({
        success:false,
        message:err.message
    })
}