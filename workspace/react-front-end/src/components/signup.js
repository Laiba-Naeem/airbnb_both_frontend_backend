

import React, { useState } from 'react';
import './signup.css'
import { useNavigate } from 'react-router-dom';
import { base_url } from '../base_url'

const SignUp = () => {
  const navigate = useNavigate();

  // define state variables
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(name, username, email, password);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !username || !email || !password) {
      console.log('Please fill in all fields');
      alert("Please fill in all fields");
      return;
    }
    console.log(`Submitted: ${name}, ${username}, ${email}, ${password}`);
    const data = { name, username, email, password };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch(`${base_url}auth/api/register/`, requestOptions)
      .then(response => response.json())
      .then(data => {
        setName('');
        setUsername('');
        setEmail('');
        setPassword('');
        console.log('User registered successfully');
        // alert("User registered successfully'");
        navigate("/signin");
      })
      .catch(error => console.log('Error registering user: ', error));
  };

  return (
    <div class='body'>
      <div className="signup-container">
        <h1>Sign up to become an Airbnb host</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"> Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" >Sign Up</button>
        </form>
      </div >
    </div>



  );
};

export default SignUp;
























