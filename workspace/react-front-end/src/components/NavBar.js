// import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import { useContext } from "react";
// import AuthContext from "./AuthContext";
// const useStyles = makeStyles((theme) => ({
//   navbar: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 1,
//     padding: "0.5rem 1rem",
//     backgroundColor: "white",
//     boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//   },
//   logo: {
//     height: "40px",
//   },
//   button: {
//     margin: theme.spacing(0, 1),
//     fontWeight: "bold",
//     borderRadius: "5px",
//     textDecoration: "none",
//     textTransform: "none",
//     color: "#555",
//   },

//   activeButton: {
//     backgroundColor: "#ff5a5f",
//     color: "white",
//     "&:hover": {
//       backgroundColor: "#ff787d",
//     },
//   },
// }));

// function NavBar() {
//   let { isSignedIn } = useContext(AuthContext);
//   const classes = useStyles();

//   return (
//     <div className={classes.navbar}>
//       <Link to="/">
//         <img
//           src={`${process.env.PUBLIC_URL}/logo.png`}
//           alt="Logo"
//           className={classes.logo}
//         />
//       </Link>
//       <div>
//         {!isSignedIn && (
//           <Button
//             component={Link}
//             to="/signin"
//             variant="contained"
//             color="primary"
//             className={`${classes.button} ${classes.activeButton}`}
//           >
//             Sign In
//           </Button>
//         )}
//         {isSignedIn && (
//           <Button
//             component={Link}
//             to="/bookinghist"
//             variant="contained"
//             color="primary"
//             className={`${classes.button} ${classes.activeButton}`}
//           >
//             Booking History
//           </Button>
//         )}
//         {isSignedIn && (
//           <Button
//             component={Link}
//             to="/userdetail"
//             variant="contained"
//             color="primary"
//             className={`${classes.button} ${classes.activeButton}`}
//           >
//             User Details
//           </Button>
//         )}
//         <Button
//           component={Link}
//           to="/"
//           variant="contained"
//           color="primary"
//           className={`${classes.button} ${classes.activeButton}`}
//         >
//           Listing
//         </Button>
//         {isSignedIn && (
//           <Button
//             component={Link}
//             to="/signout"
//             variant="contained"
//             color="primary"
//             className={`${classes.button} ${classes.activeButton}`}
//           >
//             Sign Out
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default NavBar;

import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthContext";
import "./NavBar.css";

function NavBar() {
  const { isSignedIn } = useContext(AuthContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="Logo"
          className="logo"
        />
      </Link>

      <div>
        {!isSignedIn && (
          <Link to="/signin" className={`button ${true ? "activeButton" : ""}`}>
            Sign In
          </Link>
        )}
        {isSignedIn && (
          <Link
            to="/bookinghist"
            className={`button ${false ? "activeButton" : ""}`}
          >
            Booking History
          </Link>
        )}
        {isSignedIn && (
          <Link
            to="/userdetail"
            className={`button ${false ? "activeButton" : ""}`}
          >
            User Details
          </Link>
        )}
        <Link to="/" className={`button ${false ? "activeButton" : ""}`}>
          Listing
        </Link>
        {isSignedIn && (
          <Link
            to="/signout"
            className={`button ${false ? "activeButton" : ""}`}
          >
            Sign Out
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
