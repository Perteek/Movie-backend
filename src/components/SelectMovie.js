import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SelectTime from './SelectTime';
import Allcontent from './Allcontent';
function MovieSelector() {
  const [selectedMovie, setSelectedMovie] = useState('');
  const [movies, setMovies] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);

  const handleSelect = (event) => {
    setSelectedMovie(event.target.value);
  };

  const getTimeSlot = async (movieName) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/getTimeSlot/${movieName.movieName}`);
      const { movie } = response.data;
      const timeSlot = movie.timeSlot;
      setTimeSlots(timeSlot);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/getallmovie');
        setMovies(response.data.movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  const handleButtonClick = (event, movie) => {
    handleSelect(event);
    getTimeSlot(movie);
    // console.log(movie.movieName)
  };
  return (
    <div className="Allcontent" style={{ marginTop: "10px"}}>
       <h2 className="text-start" style={{ marginLeft: "12px" }}>Book A Movie</h2>
    <div className="container" style={{ textAlign: 'left', width: '1331px'  }}>
      <div className="row">
        <div className="col-sm-8 " style={{marginLeft:"10px"}}>
          <div className="border border-dark p-4" style={{ borderRadius: '7px' }}>
            <h6 className="text-start" style={{ color: 'grey' }}>
              Select a Movie
            </h6>
            <div className="btn-group">
              {movies.map((movie) => (
                <button
                  key={movie._id}
                  type="button"
                  className={`btn ${selectedMovie === movie.movieName ? 'btn-danger' : 'btn-outline-secondary'}`}
                  onClick={(event) => handleButtonClick(event, movie)}
                  value={movie.movieName}
                  style={{ marginRight: '7px' }}
                >
                  {movie.movieName}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {selectedMovie && <SelectTime selectedMovie={selectedMovie} timeSlots={timeSlots} />}
      <Allcontent movieName={selectedMovie}/>
    </div>
    </div>
  );
}

export default MovieSelector;
