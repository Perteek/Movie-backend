import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const MoviesForm = () => {
  const [movie, setMovie] = useState({
    movieName: '',
    timeSlot: {
      Slot1: '',
      Slot2: '',
      Slot3: '',
      Slot4: '',
    },
    seats: {
      type1A1: 0,
      typeA2: 0,
      typeA3: 0,
      typeA4: 0,
      typeD1: 0,
      typeD2: 0,
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/api/movies', movie);
      console.log('Movie created successfully!');
      // Reset the form fields
      setMovie({
        movieName: '',
        timeSlot: {
          Slot1: '',
          Slot2: '',
          Slot3: '',
          Slot4: '',
        },
        seats: {
          type1A1: 0,
          typeA2: 0,
          typeA3: 0,
          typeA4: 0,
          typeD1: 0,
          typeD2: 0,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleTimeSlotChange = (event) => {
    const { name, value } = event.target;
    setMovie((prevMovie) => ({
      ...prevMovie,
      timeSlot: {
        ...prevMovie.timeSlot,
        [name]: value,
      },
    }));
  };

  const handleSeatsChange = (event) => {
    const { name, value } = event.target;
    setMovie((prevMovie) => ({
      ...prevMovie,
      seats: {
        ...prevMovie.seats,
        [name]: parseInt(value),
      },
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="movieName">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control
          type="text"
          name="movieName"
          value={movie.movieName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="Slot1">
        <Form.Label>Time Slot 1</Form.Label>
        <Form.Control
          type="time"
          name="Slot1"
          value={movie.timeSlot.Slot1}
          onChange={handleTimeSlotChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="Slot2">
        <Form.Label>Time Slot 2</Form.Label>
        <Form.Control
          type="time"
          name="Slot2"
          value={movie.timeSlot.Slot2}
          onChange={handleTimeSlotChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="Slot3">
        <Form.Label>Time Slot 3</Form.Label>
        <Form.Control
          type="time"
          name="Slot3"
          value={movie.timeSlot.Slot3}
          onChange={handleTimeSlotChange}
          required
        />
      </Form.Group>

      </Form>
)}

export default MoviesForm

