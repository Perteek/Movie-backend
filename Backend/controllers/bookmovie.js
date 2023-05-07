const Errorhandler = require("../utils/errorhandlerr")
const catchasyncerror=require("../middleware/catchasyncerror")
const Bookmovies=require("../models/bookmovies")


exports.BookMovie=catchasyncerror(async(req,res,next)=>{

    const bookmovies= await Bookmovies.create(req.body)

    res.status(200).json({
        success:true,
       bookmovies
    })
})

exports.getBookingDetails=catchasyncerror(async(req,res,next)=>{
    const { movieName } = req.params;


    const bookmovies = await Bookmovies.findOne({ movieName });

    if (!bookmovies) {
        return next(new Errorhandler("Movie not found", 404));
    }
    
    res.status(200).json({
        success: true,
        bookmovies
    });
})