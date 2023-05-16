import { React, useState, useEffect, useContext } from 'react'
import SelectMovie from './SelectMovie'
import SelectSeat from './SelectSeat'
import "./Movie.css"
import axios from 'axios'
import LastBooking from './LastBooking'
import { useLocation } from 'react-router-dom'
// import { TimeSlotContext } from './SelectTime'
import { TimeSlotContext } from './TimeSlotContext'
import { useSelector,useDispatch } from 'react-redux'
// import {Timevalue} from "../App"
const Allcontent = (props) => {
  const [seat, setSeat] = useState(null);
  const [typeA1, setTypeA1] = useState(null);
  const [typeA2, setTypeA2] = useState(null);
  const [typeA3, setTypeA3] = useState(null);
  const [typeA4, setTypeA4] = useState(null);
  const [typeD1, setTypeD1] = useState(null);
  const [typeD2, setTypeD2] = useState(null);
  const [bookmovies, setBookMovies] = useState(null);
  const [movieName, setmovieName] = useState(null);
  const [timeSlot,setTimeSlot]=useState(null)
  const [bookingdone,setbookingdone]=useState("")

  const {Time, renderTime,slot1,slot2,slot3,slot4,slot5,slot6}=useSelector(state => state.custom)
  // const { timeslot: selectedTimeSlot } = useContext(TimeSlotContext);
  // const [stateSelectedTimeSlot, setStateSelectedTimeSlot] = useState(selectedTimeSlot);
  // const timeslot = selectedTimeSlot ? selectedTimeSlot.timeslot : null;


  // // You can update the stateSelectedTimeSlot when the selectedTimeSlot changes
  // useEffect(() => {
  //   setStateSelectedTimeSlot(selectedTimeSlot);
  // }, [selectedTimeSlot]);

  console.log(props.movieName)
  const dispatch=useDispatch()
  // const moviename=props.movieName
  // const selectedTimeSlot = useContext(TimeSlotContext);
  const PostBooking = async (movie) => {
    try {
      const response1 = await axios.post('http://localhost:3000/api/v1/bookmovie', {
        movieName: `${props.movieName}`,
        timeSlot: {
          Slot: Time
        },
        seats: {
          type1A1: slot1,
          typeA2:slot2,
          typeA3: slot3,
          typeA4: slot4,
          typeD1:slot5,
          typeD2: slot6
        }
      });

      
      const moviesName = response1.data.movieName;
      const response2 = await axios.get(`http://localhost:3000/api/v1/getBookingDetails/${props.movieName}`);
      console.log(props.movieName)
      // Do something with response1 and response2
      const { bookmovies } =await response2.data;
      const timeSlot = await bookmovies.timeSlot.Slot
      const seat=bookmovies.totalseat
      const movieName=bookmovies.movieName
      const typeA1=bookmovies.seats.type1A1
      const typeA2=bookmovies.seats.typeA2
      const typeA3=bookmovies.seats.typeA3
      const typeA4=bookmovies.seats.typeA4
      const typeD1=bookmovies.seats.typeD1
      const typeD2=bookmovies.seats.typeD2
      console.log(bookmovies.timeSlot.Slot)
      setSeat(bookmovies.totalseat);
      setTypeA1(typeA1);
      setTypeA2(typeA2);
      setTypeA3(typeA3);
      setTypeA4(typeA4);
      setTypeD1(typeD1);
      setTypeD2(typeD2);
      setBookMovies(bookmovies);
      setmovieName(movieName);
      setTimeSlot(timeSlot)
      dispatch({ type: 'renderTime', payload: false });
      console.log(typeD2)
      console.log(seat)
      console.log(timeSlot)
      console.log(bookmovies)
    } catch (error) {
      console.error(error);
    }
  }

  
  // You can update the timeSlot when the value of selectedTimeSlot changes

  return (
    <>
    {/* <h1>helllo {Time} </h1>
    <h1> this is {renderTime}</h1>
    <h1> this is 1({slot1}</h1>
    <h1> this is 2({slot2}</h1>
    <h1> this is 3({slot3}</h1>
    <h1> this is 4({slot4}</h1>
    <h1> this is 5({slot5}</h1>
    <h1> this is 6({slot6}</h1>
    <h1>hello this is {props.movieName} and this is time{a}</h1> */}
        <SelectSeat />
        {renderTime && <button type="button" className="btn btn-success" style={{ float: 'left', marginLeft: "12px", marginTop: "12px", background: "linear-gradient(to right, #1CB5E0, #000046)" }} onClick={PostBooking}>Book now</button>}
        <div className="d-flex justify-content-end" >
          {bookmovies && <LastBooking Seats={seat} A1={typeA1} A2={typeA2} A3={typeA3} A4={typeA4} D1={typeD1} D2={typeD2} Slot={Time} Movie={movieName} />}
        </div>
    </>
  );
};

export default Allcontent;
