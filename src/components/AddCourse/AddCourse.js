import React from 'react';
import PropTypes from 'prop-types';
import { AddCourseWrapper } from './AddCourse.styled';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function AddCourse() {
   const [StartTime, setStartTime] = useState("");
   const [EndTime, setEndTime] = useState("");
   const [CourseName, setCourseName] = useState("");
   const [InstructorName, setInstructorName] = useState("");
   const [Department, setDepartment] = useState("");
   
   const navigate = useNavigate();

   const SubmitClick = () => {
      navigate('/CourseManagement');
    }
    const CancelClick = () => {
      navigate('/CourseManagement');
    }
   return (
      <AddCourseWrapper data-testid="AddCourse">
         <br></br>
         <br></br>
         <div class="container col-sm-6">
            <form>
               <div class="form-group row">
                  <label for="CourseName" class="col-sm-2 col-form-label">Course Name</label>
                  <div class="col-sm-6">
                     <input type="text" class="form-control" id="CourseName" value={CourseName} onChange={(e) => setCourseName(e.target.value)}></input>
                  </div>
               </div>
               <br></br>
               <div class="form-group row">
                  <label for="StartTime" class="col-sm-2 col-form-label">Start Time</label>
                  <div class="col-sm-6">
                     <input type="text" class="form-control" id="StartTime" value={StartTime} onChange={(e) => setStartTime(e.target.value)}></input>
                  </div>
               </div>
               <br></br>
               <div class="form-group row">
                  <label for="EndTime" class="col-sm-2 col-form-label">End Time</label>
                  <div class="col-sm-6">
                     <input type="text" class="form-control" id="EndTime" value={EndTime} onChange={(e) => setEndTime(e.target.value)}></input>
                  </div>
               </div>
               <br></br>
               <div class="form-group row">
                  <label for="InstructorName" class="col-sm-2 col-form-label">Instructor Name</label>
                  <div class="col-sm-6">
                     <input type="text" class="form-control" id="InstructorName" value={InstructorName} onChange={(e) => setInstructorName(e.target.value)}></input>
                  </div>
               </div>
               <br></br>
               <div class="form-group row">
                  <label for="Department" class="col-sm-2 col-form-label">Department</label>
                  <div class="col-sm-6">
                     <input type="text" class="form-control" id="Department" value={Department} onChange={(e) => setDepartment(e.target.value)}></input>
                  </div>
               </div>
               <br></br>
               <div class="form-group row">
                  <div class="col-sm-6">
                     <button type="button" class="btn btn-primary" onClick={SubmitClick}>Submit</button>
                  </div>
                  <div class="col-sm-6">
                     <button type="button" class="btn btn-danger" onClick={CancelClick}>Cancel</button>
                  </div>
               </div>
            </form>
         </div>
      </AddCourseWrapper>
   );
}

AddCourse.propTypes = {};

AddCourse.defaultProps = {};

export default AddCourse;
