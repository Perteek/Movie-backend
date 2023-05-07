import { useState } from "react";

function SelectSeat() {
  const [selectedSeats, setSelectedSeats] = useState({
    A1: 0,
    A2: 0,
    A13: 0,
    A4: 0,
    A5: 0,
  });

  const handleSelectSeat = (event, seatType) => {
    const value = event.target.value;
    setSelectedSeats((prevSeats) => ({
      ...prevSeats,
      [seatType]: value,
    }));
  };

  return (
    <div className="container" style={{textAlign:"left",width:"1331px"}}>
      <div className="row">
        <div className="col-sm-8 mt-2">
          <div className="border border-dark p-4" style={{borderRadius:"7px"}}>
          <h6 className="text-start" style={{color:'grey'}}>Select a Seat</h6>

          {`${selectedSeats.A1} ,${selectedSeats.A2} ,${selectedSeats.A3} ,${selectedSeats.A4} ,${selectedSeats.D1} ,${selectedSeats.D2}` }
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={(event) => handleSelectSeat(event, "A1")}
              >
                A1
              </button>
              <input
                type="number"
                value={selectedSeats["A1"]}
                onChange={(event) => handleSelectSeat(event, "A1")}
                min={0}
                max={10}
                style={{marginLeft:"-9px",marginRight:"7px"}}
              />

              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={(event) => handleSelectSeat(event, "A2")}
              >
                A2
              </button>
              <input
                type="number"
                value={selectedSeats["A2"]}
                onChange={(event) => handleSelectSeat(event, "A2")}
                min={0}
                max={10}
                style={{marginLeft:"-9px",marginRight:"7px"}}
              />

                <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={(event) => handleSelectSeat(event, "A3")}
              >
                A3
              </button>
              <input
                       type="number"
                       value={selectedSeats["A3"]}
                       onChange={(event) => handleSelectSeat(event, "A3")}
                       min={0}
                       max={10}
                       style={{marginLeft:"-9px",marginRight:"7px"}}
              />

              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={(event) => handleSelectSeat(event, "A4")}
              >
                A4
              </button>
              <input
                type="number"
                value={selectedSeats["A4"]}
                onChange={(event) => handleSelectSeat(event, "A4")}
                min={0}
                max={10}
                style={{marginLeft:"-9px",marginRight:"7px"}}
              />

              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={(event) => handleSelectSeat(event, "D1")}
              >
                D1
              </button>
              <input
                type="number"
                value={selectedSeats["D1"]}
                onChange={(event) => handleSelectSeat(event, "D1")}
                min={0}
                max={10}
                style={{marginLeft:"-9px",marginRight:"7px"}}
              />
            

            <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={(event) => handleSelectSeat(event, "D2")}
              >
                D2
              </button>
              <input
                type="number"
                value={selectedSeats["D2"]}
                onChange={(event) => handleSelectSeat(event, "D2")}
                min={0}
                max={10}
                style={{marginLeft:"-9px",marginRight:"7px"}}
              />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectSeat;
