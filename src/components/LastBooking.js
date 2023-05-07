import React from 'react'

const LastBooking = (props) => {
  return (
    <div>
      <div className="container">
      <div className="border border-dark p-2 "style={{ width: "250px", height:"280px",borderRadius:"7px",marginTop:"34px",marginRight:"0px"}}>
        <h5 className="text-start" >Last Booking Details:</h5>
        <p className="text-start" style={{marginBottom:"0rem"}} >Seats:{props.Seats}</p>
        <h6 className="text-start"style={{marginBottom:"0rem"}}>A1: {props.A1}</h6>
        <p className="text-start" style={{marginBottom:"0rem"}}>A2: {props.A2}</p>
        <p className="text-start" style={{marginBottom:"0rem"}}>A3: {props.A3}</p>
        <p className="text-start" style={{marginBottom:"0rem"}}>A4: {props.A4}</p>
        <p className="text-start" style={{marginBottom:"0rem"}}>D1: {props.D1}</p>
        <p className="text-start" style={{marginBottom:"0rem"}}>D2: {props.D2}</p>
        <h5 className="text-start"style={{marginBottom:"0rem"}}>Slot: {props.Slot}</h5>
        <p className="text-start" style={{marginBottom:"0rem"}}>Movie: {props.Movie}</p>
      </div>
    </div>
    </div>
  )
}

export default LastBooking
