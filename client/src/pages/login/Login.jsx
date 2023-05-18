
import axios from "axios";
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext"
import "./login.css"

const Login=()=>{
  const[credentials,setCredentials]=useState({
    username:undefined,
    password:undefined,
  });

  const{loading,error,dispatch}=useContext(AuthContext);
  
const navigate = useNavigate()
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      //edit api endpoint with register api endpoint for register
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      //edit navigation endpoint with /login for register
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  



return (
  <div className="login">
    <div className="lContainer">
      <input
        type="text"
        placeholder="username"
        id="username"
        onChange={handleChange}
        className="lInput"
      />
       <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      
      
      <div className="registerbutton">
        Don't have an account yet?
        <Link to ="/register" className="register1"> Register</Link>
      </div>
      </div>
      </div>
      );
      };
      export default Login;