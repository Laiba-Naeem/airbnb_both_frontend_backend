// import SignUp from "./components/signup";
// import Home from "./components/Home";
// import NavBar from "./components/NavBar";
// import Signin from "./components/Signin";
// import Signout from "./components/Signout";
// import Bookinghistory from "./components/bookinghistory";
// import Userdetail from "./components/userdetail";
// // import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/signin" element={<Signin />} />
//           <Route path="/signout" element={<Signout />} />
//           <Route path="/bookinghist" element={<Bookinghistory />} />
//           <Route path="/userdetail" element={<Userdetail />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// ////
import SignUp from "./components/signup";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Signin from "./components/Signin";
import Signout from "./components/Signout";
import Bookinghistory from "./components/bookinghistory";
import Userdetail from "./components/userdetail";

// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signout" element={<Signout />} />
            <Route path="/bookinghist" element={<Bookinghistory />} />
            <Route path="/userdetail" element={<Userdetail />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
