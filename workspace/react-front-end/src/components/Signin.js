// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Signin.css";
// import { Link } from "react-router-dom";

// function Signin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(
//       `Sign information has been submitted: Email: ${email}, Password: ${password}`
//     );

//     const data = { email, password };
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     };

//     fetch("http://127.0.0.1:8000/auth/api/token/", requestOptions)
//       .then((response) => response.json())
//       .then((data) => {
//         setEmail("");
//         setPassword("");
//         if (data.access && data.refresh) {
//           console.log("User has been signed In successfully");
//

//           // Save tokens to local storage
//           localStorage.setItem("accessToken", data.access);
//           localStorage.setItem("refreshToken", data.refresh);

//           const user_id = Math.floor(Math.random() * 1000000000); // generate a random number
//           console.log("user id generated", user_id);
//           navigate("/");
//         } else {
//           console.log("Tokens are not generated");
//         }
//         console.log("Access Token: ", data.access);
//         console.log("Refresh Token", data.refresh);
//       })
//       .catch((error) => console.log("Error while logging in"));
//   };

//   return (
//     <div className="sign-in-container">
//       <h1 class="welcome_class">Welcome to Airbnb</h1>
//       <form className="sign-in-form" onSubmit={handleSubmit}>
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={email}
//           onChange={handleEmailChange}
//           required
//         />

//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={handlePasswordChange}
//           required
//         />

//         <button type="submit">Sign In</button>
//         <br></br>
//         <Link to="/signup"> Don't have an account yet? Sign Up</Link>
//       </form>
//     </div>
//   );
// }

// export default Signin;

// ////////////

// import React, { useState, useContext } from "react";
// // import { GoogleLogin } from "react-google-login";
// import "./Signin.css";
// import { Link } from "react-router-dom";
// import AuthContext from "./AuthContext";
// // import { GoogleLogin } from "@react-oauth/google";
// // import jwt_decode from "jwt-decode";
// function Signin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   let { loginUser } = useContext(AuthContext);

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(
//       `Sign information has been submitted: Email: ${email}, Password: ${password}`
//     );

//     const data = { email, password };
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     };
//   };

//   // const responseGoogle = (response) => {
//   //   // Handle Google Sign-In response
//   //   console.log(response);
//   // };

//   return (
//     <div className="sign-in-container">
//       <h1 className="welcome_class">Welcome to Airbnb</h1>
//       <form className="sign-in-form" onSubmit={handleSubmit}>
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={email}
//           onChange={handleEmailChange}
//           required
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={handlePasswordChange}
//           required
//         />
//         <button type="submit">Sign In</button>
//         {/* <GoogleLogin
//           onSuccess={(credentialResponse) => {
//             console.log(credentialResponse);
//           }}
//           onError={() => {
//             console.log("Login Failed");
//           }}
//         />
//         ; */}
//         <br />
//         <Link to="/signup"> Don't have an account yet? Sign Up</Link>
//       </form>
//     </div>
//   );
// }

// export default Signin;

import React, { useState, useContext } from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { base_url } from "../base_url";
import axios from "axios";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let { loginUser } = useContext(AuthContext);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlegooglelogin = async (data) => {
    axios.post(`${base_url}auth/api/register/`, data);
    console.log("api has been called");
  };

  return (
    <div className="sign-in-container">
      <h1 class="welcome_class">Welcome to Airbnb</h1>
      <form className="sign-in-form" onSubmit={loginUser}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Sign In</button>
        <br></br>

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log("credentialResponse...", credentialResponse);

            var decoded = jwt_decode(credentialResponse.credential);
            const data = {
              name: decoded.name,
              email: decoded.email,
              password: "123",
              username: decoded.name,
            };
            // calling function handlegooglelogin and passing the data
            handlegooglelogin(data);
            console.log("data...", data);
            console.log("decoded...", decoded);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        <br></br>

        <Link to="/signup"> Don't have an account yet? Sign Up</Link>
      </form>
    </div>
    // </>
  );
}

export default Signin;
