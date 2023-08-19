import React from 'react';
import PropTypes from 'prop-types';
import { StudentManagementWrapper } from './StudentManagement.styled';
import { useNavigate } from "react-router-dom";
function StudentManagement() {
   const navigate = useNavigate();
   const Edit = () => {
     //alert(id);
      navigate('/StudentAddEdit');
    }
    const Delete = () => {
      //alert(id);
      let text = "Do you want to delete the student from system!\nEither OK or Cancel.";
      if (window.confirm(text) == true) {
         text = "Student Deleted!";
         alert(text);
      } else {
      }
      // navigate('/StudentAddEdit');
    } 
    const AddStudnet = () => {
      //alert(id);
      // alert('Add Student');
      navigate('/StudentAddEdit');
    }
    const DashBoardClick = () => {
      //alert(id);
      // alert('Add Student');
      navigate('/DashBoard');
    }
    
   return (
      <StudentManagementWrapper data-testid="StudentManagement">
         <br></br>
         <br></br>
         
         <div class="container">
            <div style={{float: 'right'}}>
               <button onClick={AddStudnet} class="btn btn-warning"> Add Student </button>
            </div>
            <table class="table table-condensed">
               <thead>
                  <tr>
                     <th>Student Name</th>
                     <th>Last Name</th>
                     <th>Email</th>
                     <th>Edit</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>John</td>
                     <td>Doe</td>
                     <td>john@example.com</td>
                     <td><button onClick={Edit} class="btn btn-primary"> Edit </button></td>
                     <td><button onClick={Delete}class="btn btn-danger"> Delete </button></td>
                  </tr>
                  <tr>
                     <td>Mary</td>
                     <td>Moe</td>
                     <td>mary@example.com</td>
                     <td><button onClick={Edit} class="btn btn-primary"> Edit </button></td>
                     <td><button onClick={Delete} class="btn btn-danger"> Delete </button></td>
                  </tr>
                  <tr>
                     <td>July</td>
                     <td>Dooley</td>
                     <td>july@example.com</td>
                     <td><button onClick={Edit} class="btn btn-primary"> Edit </button></td>
                     <td><button onClick={Delete} class="btn btn-danger"> Delete </button></td>
                  </tr>
               </tbody>
            </table>
            <div style={{float: 'right'}}>
               <button onClick={DashBoardClick} class="btn btn-warning"> DashBoard </button>
            </div>
         </div>
      </StudentManagementWrapper>
   );
}

StudentManagement.propTypes = {};

StudentManagement.defaultProps = {};

export default StudentManagement;
