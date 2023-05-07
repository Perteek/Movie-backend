import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Allcontent from './components/Allcontent';
import SelectMovie from './components/SelectMovie';
import SelectTime from './components/SelectTime';


const App = (props) => {
  // const [timeSlot, setTimeSlot] = useState(null);

  return (
      <div className='container text-center'>
        <SelectMovie />
      </div>
  );
};

export default App;
