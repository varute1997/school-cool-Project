import React from 'react';
import PropTypes from 'prop-types';
import { StaffManagementWrapper } from './StaffManagement.styled';
import { useNavigate } from "react-router-dom";

function StaffManagement() {
   const navigate = useNavigate();
   const Edit = () => {
      navigate('/StaffAddEdit');
    }
    const Delete = () => {
      let text = "Do you want to delete selected Staff from system!\nEither OK or Cancel.";
      if (window.confirm(text) == true) {
         text = "Staff Deleted!";
         alert(text);
      } else {
      }
    } 
    const AddStaff = () => {
      navigate('/StaffAddEdit');
    }
    const DashBoardClick = () => {
      navigate('/DashBoard');
    }

   return (
      <StaffManagementWrapper data-testid="StaffManagement">
         <br></br>
         <br></br>
         
         <div class="container">
            <div style={{float: 'right'}}>
               <button onClick={AddStaff} class="btn btn-warning"> Add Staff </button>
            </div>
            <table class="table table-condensed">
               <thead>
                  <tr>
                     <th>Staff Name</th>
                     <th>Department</th>
                     <th>Education</th>
                     <th>Edit</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Andrew</td>
                     <td>Language</td>
                     <td>Graduate</td>
                     <td><button onClick={Edit} class="btn btn-primary"> Edit </button></td>
                     <td><button onClick={Delete}class="btn btn-danger"> Delete </button></td>
                  </tr>
                  <tr>
                     <td>John</td>
                     <td>Science</td>
                     <td>Ph.D</td>
                     <td><button onClick={Edit} class="btn btn-primary"> Edit </button></td>
                     <td><button onClick={Delete} class="btn btn-danger"> Delete </button></td>
                  </tr>
                  <tr>
                     <td>Melanie</td>
                     <td>Histroy</td>
                     <td>Histroy</td>
                     <td><button onClick={Edit} class="btn btn-primary"> Edit </button></td>
                     <td><button onClick={Delete} class="btn btn-danger"> Delete </button></td>
                  </tr>
               </tbody>
            </table>
            <div style={{float: 'right'}}>
               <button onClick={DashBoardClick} class="btn btn-warning"> DashBoard </button>
            </div>
         </div>
      </StaffManagementWrapper>
   );
}

StaffManagement.propTypes = {};

StaffManagement.defaultProps = {};

export default StaffManagement;

