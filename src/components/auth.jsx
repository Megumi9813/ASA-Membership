import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="row">
      <div className="auth-wrapper">
        <div className="form">
            <div className="form-group">
              {!index ? <Signin /> : <Signup />}
              <p onClick={toggleIndex}>
                {!index ? <a>New User? Click here</a> : "Already have an acount?"}
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;