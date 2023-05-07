const express=require("express")
const { BookMovie, getBookingDetails } = require("../controllers/bookmovie")
const router=express.Router()



router.route("/bookmovie").post(BookMovie)
router.route("/getBookingDetails/:movieName").get(getBookingDetails)

module.exports=router