import React, { useState, useEffect } from 'react';
import './Cssfiles/Register.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; 

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isloggedin, setIsLoggedIn] = useState(false);
  const [usernames, setUsernames] = useState([]);
  const [istaken, setIsTaken] = useState(false);
  const [popupStyle, setPopupStyle] = useState('hide');

  const navigate = useNavigate(); // Initialize useNavigate

  const popup = () => {
    setPopupStyle('login-popup-register');
    setTimeout(() => {
      setPopupStyle('hide');
      setUsername('');
      setPassword('');
      setMobile('');
      setPasswordConfirm('');
      setIsLoggedIn(false);
      setIsTaken(false);
      navigate('/login'); 
    }, 3000);
   
  };

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8080/show/reg')
      .then((response) => {
        const usernames = response.data.map((item) => item.username);
        setUsernames(usernames);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleNameChange = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
    checkUserSame(newUsername);
  };

  const checkUserSame = (newUsername) => {
    if (usernames.includes(newUsername)) {
      setIsTaken(true);
    } else {
      setIsTaken(false);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordChangeConfirm = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setMobile(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!istaken) {
      const data = {
        username: username,
        mobile: mobile,
        password: password,
      };
      axios
        .post('http://127.0.0.1:8080/add/reg', data)
        .then((response) => {
          setIsLoggedIn(true);
          popup();
          
        })
        .catch((error) => {
          console.error('Axios error:', error);
        });
    }
  };

  return (
    <div className="form-container">
      <div className="Container-1">
        {isloggedin ? (
          <div className={popupStyle}>
            <h2>Register Successful</h2>
          </div>
        ) : (
          <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
              <p>User Name</p>
              <input
                className="input"
                type="text"
                placeholder="Enter your username"
                onChange={handleNameChange}
                value={username}
              />
              {istaken ? <h4>User Name taken</h4> : <h4>User Name not taken</h4>}
              <p>Password</p>
              <input
                className="input"
                type="password"
                placeholder="Enter your Password"
                onChange={handlePasswordChange}
                value={password}
              />

              <p>Confirm Password</p>
              <input
                className="input"
                type="password"
                placeholder="Enter your Password"
                onChange={handlePasswordChangeConfirm}
                value={passwordConfirm}
              />

              <p>Mobile No :</p>

              <input
                className="input"
                type="text"
                placeholder="Enter mobile number"
                onChange={handlePhoneChange}
                value={mobile}
              />
              <br />
              <br />

              <button type="submit">Register</button>
            </form>

            <span>
              <p>
                Already have an Account?
                <i>
                  <Link to="/login">Go to Login</Link>
                </i>
              </p>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;