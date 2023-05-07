const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookmovieSchema = new Schema({
  movieName: {
    type: String,
    required: true
  },
  timeSlot: {
    Slot: {
      type: String,
      default: "08:00 AM"
    }
  },
  seats: { 
    type1A1: {
      type: Number,
      default: 0
    },
    typeA2: {
      type: Number,
      default: 0
    },
    typeA3: {
      type: Number,
      default: 0
    },
    typeA4: {
      type: Number,
      default: 0
    },
    typeD1: {
      type: Number,
      default: 0
    },
    typeD2: {
      type: Number,
      default: 0
    }
  },
  totalseat: {
    type: Number,
    default: function() {
      return this.seats.type1A1 + this.seats.typeA2 + this.seats.typeA3 + this.seats.typeA4 + this.seats.typeD1 + this.seats.typeD2;
    }
  }
});

const Movie = mongoose.model('BookMovies', BookmovieSchema);

module.exports = Movie;
