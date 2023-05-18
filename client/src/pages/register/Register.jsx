
// import axios from "axios";
// import { Link } from 'react-router-dom';

// import { useNavigate } from "react-router-dom";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../context/AuthContext"
// import "./register.css"

// const Register=()=>{
//   const[credentials,setCredentials]=useState({
//     username:undefined,
//     email:undefined,
//     country:undefined,
//     city:undefined,
//     phone:undefined,
//     password:undefined,
    
//   });


//   const{loading,error,dispatch}=useContext(AuthContext);
  
// const navigate = useNavigate()
//   const handleChange = (e) => {
//     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };
//   const handleClick = async (e) => {
//     e.preventDefault();
//     dispatch({ type: "REGISTER_START" });
//     try {
      
//       const res = await axios.post("/auth/register", credentials);
//       dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
//       alert("Registration successful.Now you can log in.")
//       navigate("/login")
//     } catch (err) {
//       dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
//     }
//   };
  



// return (
//   <div className="login">
//     <div className="lContainer">
//       <input
//         type="text"
//         placeholder="username"
//         id="username"
//         onChange={handleChange}
//         className="lInput"
        
//       />
//       <input
//           type="email"
//           placeholder="email"
//           id="email"
//           onChange={handleChange}
//           className="lInput"
//         />
//         <input
//           type="text"
//           placeholder="country"
//           id="country"
//           onChange={handleChange}
//           className="lInput"
//         />
//         <input
//           type="text"
//           placeholder="city"
//           id="city"
//           onChange={handleChange}
//           className="lInput"
//         />
//         <input
//           type="number"
//           placeholder="phone"
//           id="phone"
//           onChange={handleChange}
//           className="lInput"
//         />
//        <input
//           type="password"
//           placeholder="password"
//           id="password"
//           onChange={handleChange}
//           className="lInput"
//         />
//         <button disabled={loading} onClick={handleClick} className="lButton">
//           Register
//         </button>
//         {error && <span>{error.message}</span>}
      
      
//       <div className="registerbutton">
//        Already have account?
//         <Link to ="/login" className="register1"> Login</Link>
//       </div>
//       </div>
//       </div>
//       );
//       };
//       export default Register;


// import axios from "axios";
// import { Link } from 'react-router-dom';

// import { useNavigate } from "react-router-dom";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../context/AuthContext"
// import "./register.css"

// const Register = () => {
//   const [credentials, setCredentials] = useState({
//     username: undefined,
//     email: undefined,
//     country: undefined,
//     city: undefined,
//     phone: undefined,
//     password: undefined,
//   });

//   const [errors, setErrors] = useState({});
//   const { loading, error, dispatch } = useContext(AuthContext);

//   const navigate = useNavigate()

//   const handleChange = (e) => {
//     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    
//     // Validate each field as it changes
//     const { id, value } = e.target;
//     const updatedErrors = { ...errors };

//     switch (id) {
//       case "username":
//         updatedErrors.username = value.trim() ? "" : "Username is required";
//         break;
//       case "email":
//         updatedErrors.email = value.trim() ? "" : "Email is required";
//         break;
//       case "country":
//         updatedErrors.country = value.trim() ? "" : "Country is required";
//         break;
//       case "city":
//         updatedErrors.city = value.trim() ? "" : "City is required";
//         break;
//       case "phone":
//         updatedErrors.phone = value.trim() ? "" : "Phone number is required";
//         break;
//       case "password":
//         updatedErrors.password = value.trim() ? "" : "Password is required";
//         break;
//       default:
//         break;
//     }

//     setErrors(updatedErrors);
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     dispatch({ type: "REGISTER_START" });

//     // Perform form-level validation
//     const formErrors = {};
//     Object.keys(credentials).forEach((key) => {
//       const value = credentials[key];
//       if (!value || !value.trim()) {
//         formErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
//       }
//     });

//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }

//     try {
//       const res = await axios.post("/auth/register", credentials);
//       dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
//       alert("Registration successful. Now you can log in.")
//       navigate("/login")
//     } catch (err) {
//       dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
//     }
//   };

//   return (
//     <div className="login">
//       <div className="lContainer">
//         <input
//           type="text"
//           placeholder="username"
//           id="username"
//           onChange={handleChange}
//           className="lInput"
//         />
//         {errors.username && <span>{errors.username}</span>}

//         <input
//           type="email"
//           placeholder="email"
//           id="email"
//           onChange={handleChange}
//           className="lInput"
//         />
//         {errors.email && <span>{errors.email}</span>}

//         <input
//           type="text"
//           placeholder="country"
//           id="country"
//           onChange={handleChange}
//           className="lInput"
//         />
//         {errors.country && <span>{errors.country}</span>}

//         <input
//           type="text"
//           placeholder="city"
//           id="city"
//           onChange={handleChange}
//           className="lInput"
//         />
//         {errors.city && <span>{errors.city}</span>}

//         <input
//           type="number"
//           placeholder="phone"
//           id="phone"
//           onChange={handleChange}
//           className="lInput"
//         />
//         {errors.phone && <span>{errors.phone}</span>}

//         <input
//           type="password"
//           placeholder="password"
//           id="password"
//           onChange={handleChange}
//           className="lInput"
//         />
//         {errors.password && <span>{errors.password}</span>}

//         <button disabled={loading} onClick={handleClick} className="lButton">
//           Register
//         </button>
//         {error && <span>{error.message}</span>}

//         <div className="registerbutton">
//           Already have an account? <Link to="/login" className="register1"> Login</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


      
import axios from "axios";
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext"
import "./register.css"

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    country: undefined,
    city: undefined,
    phone: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // Perform validation
    const errors = {};

    if (!credentials.username || credentials.username.trim() === "") {
      errors.username = "Username is required";
    }

    if (!credentials.email || credentials.email.trim() === "") {
      errors.email = "Email is required";
    } else {
      // Validate email format
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!credentials.email.match(emailRegex)) {
        errors.email = "Invalid email format";
      }
    }

    if (!credentials.country || credentials.country.trim() === "") {
      errors.country = "Country is required";
    }

    if (!credentials.city || credentials.city.trim() === "") {
      errors.city = "City is required";
    }

    if (!credentials.phone || credentials.phone.trim() === "") {
      errors.phone = "Phone number is required";
    } else {
      // Validate phone number format
      const phoneRegex = /^[0-9]{10}$/;
      if (!credentials.phone.match(phoneRegex)) {
        errors.phone = "Invalid phone number format";
      }
    }

    if (!credentials.password || credentials.password.trim() === "") {
      errors.password = "Password is required";
    }

    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    dispatch({ type: "REGISTER_START" });

    try {
      const res = await axios.post("/auth/register", credentials);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
      alert("Registration successful. Now you can log in.");
      navigate("/login");
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="jackie"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        {errors.username && <span className="error">{errors.username}</span>}
        <input
          type="email"
          placeholder="visitor@gmail.com"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <input
          type="text"
          placeholder="Nepal"
          id="country"
          onChange={handleChange}
          className="lInput"
        />
        {errors.country && <span className="error">{errors.country}</span>}
        <input
          type="text"
          placeholder="Bharatpur"
          id="city"
          onChange={handleChange}
          className="lInput"
        />
        {errors.city && <span className="error">{errors.city}</span>}
        <input
          type="text"
          placeholder="9999988888"
          id="phone"
          onChange={handleChange}
          className="lInput"
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        {errors.password && <span className="error">{errors.password}</span>}
        <button disabled={loading} onClick={handleClick} className="lButton">
          Register
        </button>
        {error && <span>{error.message}</span>}

        <div className="registerbutton">
          Already have an account?
          <Link to="/login" className="register1">
            {' '}
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

