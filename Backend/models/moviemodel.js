const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
  movieName: {
    type: String,
    required: true,
    unique:true
  },
  timeSlot: {
      Slot1: {
        type: String,
        // default: "08:00 AM"
      },
      Slot2: {
        type: String,
        // default: "11:00 AM"
      },
      Slot3: {
        type: String,
        // default: "01:00 PM"
      },
      Slot4: {
        type: String,
      }
  },
  seats: {
    type: {
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
    }
  }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
