import { useEffect } from "react";
function Signout() {
  useEffect(() => {
    const access_token = localStorage.getItem("accessToken");
    const refresh_token = localStorage.getItem("refreshToken");
    console.log("access:", access_token);
    console.log("refresh:", refresh_token);
    if (access_token && refresh_token) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      console.log("User has been logged out successfully");
    } else {
      console.log("Error while signing out");
    }
  }, []);

  return null;

  // <div>
  //   <h1>Sign Out is SuccessFul...</h1>
  // </div>
}

export default Signout;
