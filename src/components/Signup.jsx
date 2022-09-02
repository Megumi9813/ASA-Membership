import React, { useRef } from "react";
import { useUserContext } from "../contexts/userContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Signup = ({signUpOpen, setSignUpOpen}) => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && name && password) registerUser(email, name, password);
  };

  return (
    <div className="signUp">
      <div className={signUpOpen ? "signUp_background open" : "signUp_background"}></div>
      <div className={signUpOpen ? "auth-wrapper open" : "auth-wrapper"}>
        <div className="form">
          <div className="form_header">
            <button onClick={() => setSignUpOpen(false)}>
              <FontAwesomeIcon icon="fa-xmark" />
            </button>
          </div>
          <div className="form_body">
            <h2> Create your account </h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
              <div className="form-item">
                  <label>Name</label>
                  <input type="name" ref={nameRef} />
                </div>
                <div className="form-item">
                  <label>Email</label>
                  <input type="email" ref={emailRef} />
                </div>
                <div className="form-item">
                  <label>Password</label>
                  <input type="password" ref={psdRef} />
                </div>
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
          
  );
};

export default Signup;