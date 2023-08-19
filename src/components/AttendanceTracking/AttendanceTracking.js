import React from 'react';
import PropTypes from 'prop-types';
import { AttendanceTrackingWrapper } from './AttendanceTracking.styled';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function AttendanceTracking() {
   const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

   function sayHello(name) {
      alert(`hello, ${name}`);
    }
   return (
      <AttendanceTrackingWrapper data-testid="AttendanceTracking">
         AttendanceTracking Component
         <button  onClick={() => sayHello('James')}>Greet</button>
         <br></br>
         <div>
            <h1>Hello Devdojo</h1>
            <button onClick={handleToggle} className={`btn btn-${isActive ? "danger" : "success"}`} >
               Toggle Button State
            </button>
         </div>

         <div>
            <h1>Hello Devdojo</h1>
            <button onClick={handleToggle} className={`btn btn-${isActive ? "danger" : "success"}`} >
               Toggle Button State 2
            </button>
         </div>
      </AttendanceTrackingWrapper>
   );
}

AttendanceTracking.propTypes = {};

AttendanceTracking.defaultProps = {};

export default AttendanceTracking;
