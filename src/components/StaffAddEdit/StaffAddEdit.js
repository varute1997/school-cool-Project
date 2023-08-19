import React from 'react';
import PropTypes from 'prop-types';
import { StaffAddEditWrapper } from './StaffAddEdit.styled';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function StaffAddEdit() {
   const [UserName, setName] = useState("admin");
   const [Password, setPassword] = useState("");
   const [StaffFullName, setStaffFullName] = useState("");
   const [DateOfBirth, setDateOfBirth] = useState("");
   const [Eamil, setEamil] = useState("");
   const [ParaName, setParaName] = useState("");
   const [BloodGroup, setBloodGroup] = useState("");
   const [EducationQualification, setEducationQualification] = useState("");
   const [YearOfExperice, setYearOfExperice] = useState("");
   
   
   const navigate = useNavigate();

   const SubmitClick = () => {
      console.log(StaffFullName);
      //navigate('/StaffManagement');
    }
    const CancelClick = () => {
      navigate('/StaffManagement');
    }

   return (
      <StaffAddEditWrapper data-testid="StaffAddEdit">
         <br></br>
         <br></br>
         <div class="container col-sm-6">
            <form>
               <div class="form-group row">
                  <label for="StaffFullName" class="col-sm-2 col-form-label">Staff Full Name</label>
                  <div class="col-sm-6">
                     <input type="text" class="form-control" id="StaffFullName" value={StaffFullName} onChange={(e) => setStaffFullName(e.target.value)}></input>
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
               <div class="form-group row">
                  <label for="YearOfExperice" class="col-sm-2 col-form-label">Year Of Experice</label>
                  <div class="col-sm-6">
                     <input type="text" class="form-control" id="YearOfExperice" value={YearOfExperice} onChange={(e) => setYearOfExperice(e.target.value)}></input>
                  </div>
               </div>
               <div class="form-group row">
                  <label for="EducationQualification" class="col-sm-2 col-form-label">Education Qualification</label>
                  <div class="col-sm-6">
                     <input type="text" class="form-control" id="EducationQualification" value={EducationQualification} onChange={(e) => setEducationQualification(e.target.value)}></input>
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
      </StaffAddEditWrapper>
   );
}

StaffAddEdit.propTypes = {};

StaffAddEdit.defaultProps = {};

export default StaffAddEdit;
