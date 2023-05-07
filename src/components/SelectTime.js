import React, { useState, createContext } from 'react';
import Allcontent from './Allcontent';

export const TimeSlotContext = createContext();

function SelectTime(props) {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const handleSelect = (event) => {
    setSelectedTimeSlot(event.target.value);
  };

  return (
    <TimeSlotContext.Provider value={selectedTimeSlot}>
      <div className="container" style={{textAlign:"left", width:"1331px"}}>
        <div className="row">
          <div className="col-sm-8 mt-2">
            <div className="border border-dark p-4" style={{borderRadius:"7px"}}>
              <h6 className="text-start" style={{color:'grey'}}>Select Time Slot {selectedTimeSlot}</h6>
              <div className="btn-group">
                <button
                  type="button"
                  className={`btn ${selectedTimeSlot === props.timeSlots.Slot1 ? 'btn-danger' : 'btn-outline-secondary'}`}
                  onClick={handleSelect}
                  value={props.timeSlots.Slot1}
                  style={{marginRight:"7px"}}
                >
                  {props.timeSlots.Slot1}
                </button>
                <button
                  type="button"
                  className={`btn ${selectedTimeSlot === props.timeSlots.Slot2 ? 'btn-danger' : 'btn-outline-secondary'}`}
                  onClick={handleSelect}
                  value={props.timeSlots.Slot2}
                  style={{marginRight:"7px"}}
                >
                  {props.timeSlots.Slot2}
                </button>
                <button
                  type="button"
                  className={`btn ${selectedTimeSlot === props.timeSlots.Slot3 ? 'btn-danger' : 'btn-outline-secondary'}`}
                  onClick={handleSelect}
                  value={props.timeSlots.Slot3}
                  style={{marginRight:"7px"}}
                >
                  {props.timeSlots.Slot3}
                </button>
                <button
                  type="button"
                  className={`btn ${selectedTimeSlot === props.timeSlots.Slot4 ? 'btn-danger' : 'btn-outline-secondary'}`}
                  onClick={handleSelect}
                  value={props.timeSlots.Slot4}
                  style={{marginRight:"7px"}}
                >
                  {props.timeSlots.Slot4}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TimeSlotContext.Provider>
  );
}

export default SelectTime;
