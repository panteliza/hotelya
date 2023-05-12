

import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './register.css';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateName = () => {
    if (name.trim() === '') {
      setNameError('Name is required');
      return false;
    } else {
      setNameError('');
      return true;
    }
  };

  const validateEmail = () => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
      setEmailError('Email is required');
      return false;
    } else if (!re.test(email)) {
      setEmailError('Invalid email address');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePassword = () => {
    if (password.trim() === '') {
      setPasswordError('Password is required');
      return false;
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPassword.trim() === '') {
      setConfirmPasswordError('Confirm password is required');
      return false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
      return false;
    } else {
      setConfirmPasswordError('');
      return true;
    }
  };

//   const handleSubmit = (e) => {
//     e.preventDefault
//     const isNameValid = validateName();
// const isEmailValid = validateEmail();
// const isPasswordValid = validatePassword();
// const isConfirmPasswordValid = validateConfirmPassword();

// if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
//   axios.post('http://localhost:8800/register', {
//     name: name,
//     email: email,
//     password: password
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// }
// };

return (
<form className="registration-form" >

<div className="form-group">
<input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} onBlur={validateName} />
{nameError && <span className="error">{nameError}</span>}
</div>
<div className="form-group">
<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validateEmail} />
{emailError && <span className="error">{emailError}</span>}
</div>
<div className="form-group">
<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={validatePassword} />
{passwordError && <span className="error">{passwordError}</span>}
</div>
<div className="form-group">
<input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} onBlur={validateConfirmPassword} />
{confirmPasswordError && <span className="error">{confirmPasswordError}</span>}
</div>
{/* <button className=""  type="submit">Register</button> */}
<button className='butn'><Link to="/login" className="link">
         Register
        </Link>
        </button>
  
<div className="registerbutton">
        Already have an account?
        <Link to ="/login"> Login</Link>
      </div>
</form>

);
}

export default RegistrationForm;


