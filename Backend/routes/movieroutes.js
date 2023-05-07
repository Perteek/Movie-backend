const express=require("express")
const {createmovie, deletemovie, getallmovie, bookamovie, getTimeSlot}=require("../controllers/moviecontroller")

const router=express.Router()

router.route("/createmovie").post(createmovie)

router.route("/deletemovie/:id").delete(deletemovie)

router.route("/getallmovie").get(getallmovie)

router.route("/getTimeSlot/:movieName").get(getTimeSlot)

router.route("/bookamovie/:movieName").put(bookamovie)

module.exports=router