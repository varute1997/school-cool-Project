import React from 'react';
import PropTypes from 'prop-types';
import { DashBoardWrapper } from './DashBoard.styled';
import { useNavigate } from "react-router-dom";

function DashBoard() {
   const navigate = useNavigate();

   const StudentManagementClick = () => {
      navigate('/StudentManagement');
    }
    const StaffManagement = () => {
      navigate('/StaffManagement');
    }
    const CourseManagement = () => {
      navigate('/CourseManagement');
    }
    const AttendanceTracking = () => {
      navigate('/AttendanceTracking');
    }
    
   return (
      <DashBoardWrapper data-testid="DashBoard">
         <br></br>
         <br></br>
         <div class='container'>
            <button style={{height:'150px',width:'150px',margin:'50px'}} name='Student Management' class="btn btn-success" onClick={StudentManagementClick}> Student Management </button>
            <button style={{height:'150px',width:'150px',margin:'50px'}} name='Staff Management' class="btn btn-success" onClick={StaffManagement}> Staff Management </button>
            <button style={{height:'150px',width:'150px',margin:'50px'}} name='Course Management' class="btn btn-success" onClick={CourseManagement}> Course Management </button>
            <button style={{height:'150px',width:'150px',margin:'50px'}} name='Attendance Tracking' class="btn btn-success" onClick={AttendanceTracking}> Attendance Tracking </button>
         </div>
      </DashBoardWrapper>
   );
}

DashBoard.propTypes = {};

DashBoard.defaultProps = {};

export default DashBoard;
