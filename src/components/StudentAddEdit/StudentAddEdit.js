import React from 'react';
import PropTypes from 'prop-types';
import { StudentAddEditWrapper } from './StudentAddEdit.styled';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function StudentAddEdit() {

   const [UserName, setName] = useState("");
   const [Password, setPassword] = useState("");
   const [StudentFullName, setStudentFullName] = useState("");
   const [DateOfBirth, setDateOfBirth] = useState("");
   const [Eamil, setEamil] = useState("");
   const [BloodGroup, setBloodGroup] = useState("");
   
   const navigate = useNavigate();

   const SubmitClick = () => {
      navigate('/StudentManagement');
    }
    const CancelClick = () => {
      navigate('/StudentManagement');
    }
   return (
      <StudentAddEditWrapper data-testid="StudentAddEdit">
         <br></br>
         <br></br>
         <div class="container col-sm-6">
            <form>
               <div class="form-group row">
                  <label for="StudentFullName" class="col-sm-2 col-form-label">Student Full Name</label>
                  <div class="col-sm-6">
                     <input type="text" class="form-control" id="StudentFullName" value={StudentFullName} onChange={(e) => setStudentFullName(e.target.value)}></input>
                  </div>
               </div>
               <br></br>
               <div class="form-group row">
                  <label for="UserName" class="col-sm-2 col-form-label">User Name</label>
                  <div class="col-sm-6">
                     <input type="text" class="form-control" id="UserName" value={UserName} onChange={(e) => setName(e.target.value)}></input>
                  </div>
               </div>
               <br></br>
               <div class="form-group row">
                  <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                  <div class="col-sm-6">
                     <input type="password" class="form-control" id="inputPassword" value={Password} onChange={(e) => setPassword(e.target.value)}></input>
                  </div>
               </div>
               <br></br>
               <div class="form-group row">
                  <label for="DateOfBirth" class="col-sm-2 col-form-label">Date of Birth</label>
                  <div class="col-sm-6">
                     <input type="date" class="form-control" id="DateOfBirth" value={DateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}></input>
                  </div>
               </div>
               <br></br>
               <div class="form-group row">
                  <label for="Eamil" class="col-sm-2 col-form-label">Eamil</label>
                  <div class="col-sm-6">
                     <input type="email" pattern=".+@globex\.com" size="30" class="form-control" id="Eamil" value={Eamil} onChange={(e) => setEamil(e.target.value)}></input>
                  </div>
               </div>
               <br></br>
               <div class="form-group row">
                  <label for="BloodGroup" class="col-sm-2 col-form-label">Blood Group</label>
                  <div class="col-sm-6">
                     <input type="text" class="form-control" id="BloodGroup" value={BloodGroup} onChange={(e) => setBloodGroup(e.target.value)}></input>
                  </div>
               </div>
               <br></br>
               <br></br>
               <div class="form-group row">
                  <label for="Eamil" class="col-sm-2 col-form-label">Select Class</label>
                  <div class="col-sm-6">
                     <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select Class
                           <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                           <li><a href="#">HTML</a></li>
                           <li><a href="#">CSS</a></li>
                           <li><a href="#">JavaScript</a></li>
                        </ul>
                     </div>
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
      </StudentAddEditWrapper>
   );
}

StudentAddEdit.propTypes = {};

StudentAddEdit.defaultProps = {};

export default StudentAddEdit;
