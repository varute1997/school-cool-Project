import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DashBoard from './components/DashBoard/DashBoard';
import StudentManagement from './components/StudentManagement/StudentManagement';
import StudentAddEdit from './components/StudentAddEdit/StudentAddEdit';
import StaffManagement from './components/StaffManagement/StaffManagement';
import StaffAddEdit from './components/StaffAddEdit/StaffAddEdit';
import CourseManagement from './components/CourseManagement/CourseManagement';
import AddCourse from './components/AddCourse/AddCourse';
import AttendanceTracking from './components/AttendanceTracking/AttendanceTracking';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<App />} />
          <Route path="DashBoard" element={<DashBoard />} />
          <Route path="StudentManagement" element={<StudentManagement />} />
          <Route path="StudentAddEdit" element={<StudentAddEdit />} />
          <Route path="StaffManagement" element={<StaffManagement />} />
          <Route path="StaffAddEdit" element={<StaffAddEdit />} />
          <Route path="CourseManagement" element={<CourseManagement />} />
          <Route path="AddCourse" element={<AddCourse />} />
          <Route path="AttendanceTracking" element={<AttendanceTracking />} />          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
