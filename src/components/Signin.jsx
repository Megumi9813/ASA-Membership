import React, { useRef } from "react";
import { useUserContext } from "../contexts/userContext";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <div className="row">
      <div className="auth-wrapper">
          <div className="form">
            <h2> Login </h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <div className="form-item">
                  <label>Email</label>
                  <input type="email" ref={emailRef} />
                </div>
                <div className="form-item">
                  <label>Password</label>
                  <input type="password" ref={psdRef} />
                </div>
                <button type="submit">Sign In</button>
                <a onClick={forgotPasswordHandler}>Forgot Password?</a>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
};

export default Signin;