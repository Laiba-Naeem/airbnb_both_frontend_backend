import React from "react";
import { GoogleLogin } from "react-google-login";

const Signingoogle = () => {
  const responseGoogle = (response) => {
    // Handle Google Sign-In response
    console.log(response);
  };

  return (
    <div>
      <GoogleLogin
        clientId="YOUR_CLIENT_ID"
        buttonText="Sign In with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

export default Signingoogle;
