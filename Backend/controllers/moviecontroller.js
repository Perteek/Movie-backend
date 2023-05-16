const Errorhandler = require("../utils/errorhandlerr")
const catchasyncerror=require("../middleware/catchasyncerror")
const Movie=require("../models/moviemodel")



exports.createmovie=catchasyncerror(async(req,res,next)=>{

    const movie= await Movie.create(req.body)

    res.status(200).json({
        success:true,
        movie
    })
})

exports.deletemovie=catchasyncerror(async(req,res,next)=>{

    const movie= await Movie.findByIdAndDelete(req.params.id)


    if (!movie) {
        return next(
          new Errorhandler(`Movie does not exist with Id: ${req.params.id}`, 400)
        );
      }

    res.status(200).json({
        success:true,
        message:"product deleted successfully"
    })
})

exports.getallmovie=catchasyncerror(async(req,res,next)=>{

    const movies=await Movie.find()

    res.status(200).json({
        success:true,
        movies
    })
})

exports.bookamovie=catchasyncerror(async(req,res,next)=>{
    const { movieName } = req.params;

    try {
      const movie = await Movie.findOne({ movieName });
      if (!movie) return res.status(404).json({ message: 'Movie not found' });
  
      // Update time slots if provided in the request body
      if (req.body.timeSlot) movie.timeSlot = req.body.timeSlot;
  
      // Update seats if provided in the request body
      if (req.body.seats) movie.seats = req.body.seats;
  
      const updatedMovie = await movie.save();
      res.json(updatedMovie);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  
})

exports.getTimeSlot = catchasyncerror(async (req, res, next) => {
    const { movieName } = req.params;
    console.log(movieName)
    const movie = await Movie.findOne({movieName:movieName});
    console.log(movie)
    if (!movie) {
        return next(new Errorhandler("Movie not found", 404));
    }
    
    res.status(200).json({
        success: true,
        movie
    });
});

  
  
// exports.bookamovie = catchasyncerror(async (req, res, next) => {
//     const movie = await Movie.findById(req.params.id);
//     if (!movie) {
//       return next(new Errorhandler("Movie not found", 404));
//     }
  
//     const { seats, type } = req.body;
  
//     if (!seats || !type) {
//       return next(new Errorhandler("Please provide seatType and quantity", 400));
//     }
  
//     // Check if requested seat type is available
//     if (!movie.seats.hasOwnProperty(seats)) {
//       return next(new Errorhandler("Invalid seatType", 400));
//     }
  
//     // Check if requested quantity is available
//     const availableSeats = movie.seats[seats];
//     if (availableSeats < quantity) {
//       return next(new Errorhandler("Not enough seats available", 400));
//     }
  
//     // Update the movie object with new seat count
//     movie.seats[seatType] -= quantity;
//     await movie.save();
  
//     const { movieName, timeSlot } = movie;
  
//     res.status(200).json({
//       success: true,
//       message: `Successfully booked ${quantity} seat(s) of type ${seatType} for ${movieName} at ${timeSlot}`,
//     });
//   });
  
  