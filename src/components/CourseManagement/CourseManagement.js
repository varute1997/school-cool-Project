import React from 'react';
import PropTypes from 'prop-types';
import { CourseManagementWrapper } from './CourseManagement.styled';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import AddCourse from '../AddCourse/AddCourse';

function CourseManagement() {
   const navigate = useNavigate();
   const Edit = () => {
      navigate('/AddCourse');
    }
    const Delete = () => {
      let text = "Do you want to delete selected Course from system!\nEither OK or Cancel.";
      if (window.confirm(text) == true) {
         text = "Course Deleted!";
         alert(text);
      } else {
      }
    } 
    const AddCourse = () => {
      navigate('/AddCourse');
    }
    const DashBoardClick = () => {
      navigate('/DashBoard');
    }

   return (
      <CourseManagementWrapper data-testid="CourseManagement">
         <br></br>
         <br></br>
         
         <div class="container">
            <div style={{float: 'right'}}>
               <button onClick={AddCourse} class="btn btn-warning"> Add Course </button>
            </div>
            <table class="table table-condensed">
               <thead>
                  <tr>
                     <th>Course Name</th>
                     <th>Department</th>
                     <th>Edit</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Grammer |</td>
                     <td>Language</td>
                     <td><button onClick={Edit} class="btn btn-primary"> Edit </button></td>
                     <td><button onClick={Delete}class="btn btn-danger"> Delete </button></td>
                  </tr>
                  <tr>
                     <td>Environmental Science</td>
                     <td>Science</td>
                     <td><button onClick={Edit} class="btn btn-primary"> Edit </button></td>
                     <td><button onClick={Delete} class="btn btn-danger"> Delete </button></td>
                  </tr>
                  <tr>
                     <td>World War ||</td>
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
      </CourseManagementWrapper>
   );
}
CourseManagement.propTypes = {};

CourseManagement.defaultProps = {};

export default CourseManagement;
