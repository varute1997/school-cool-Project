import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { LoginWrapper } from './login.styled';
import { useNavigate } from "react-router-dom";

function Login() {
   const [UserName, setName] = useState("");
   const [Password, setPassword] = useState("");
   const navigate = useNavigate();
   const LoginClick = () => {
      navigate('/dashboard');
    }


   return (
      <LoginWrapper data-testid="Login">
         <h1>Welcome to School Cool Application</h1>
         <br></br>
         <br></br>
         <form>
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
               <div class="col-sm-6">
                  <button type="button" class="btn btn-primary" onClick={LoginClick}>Login</button>
               </div>
            </div>
         </form>
      </LoginWrapper>
   );
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
