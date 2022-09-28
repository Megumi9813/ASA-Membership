import React, { useRef } from "react";
import { useUserContext } from "../../contexts/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const {
    authCondition,
    registerUser,
    user,
    setAuthCondition,
  } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && name && password) registerUser(email, name, password);
  };

  return (
    <div className="signUp">
      {user === null && authCondition.signUp === true && (
        <>
          <div className="signUp_background open"></div>
          <div className="auth-wrapper open">
            <div className="form">
              <div className="form_header">
                <button onClick={() => setAuthCondition(false)}>
                  <FontAwesomeIcon icon="fa-xmark" />
                </button>
              </div>
              <div className="form_body">
                <h2> Create your account </h2>
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <div className="form-item">
                      <label>Name</label>
                      <input
                        type="name"
                        ref={nameRef}
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="form-item">
                      <label>Email</label>
                      <input
                        type="email"
                        ref={emailRef}
                        placeholder="asa@example.com"
                      />
                    </div>
                    <div className="form-item">
                      <label>Password</label>
                      <input
                        type="password"
                        ref={psdRef}
                        placeholder="• • • • • • • • • • • •"
                        className="password"
                      />
                    </div>
                    <button type="submit">Register</button>
                    <div className="auth_switch">
                      Already have an account?
                      <span
                        onClick={() =>
                          setAuthCondition((prevState) => ({
                            ...prevState,
                            signIn: true,
                            signUp: false,
                          }))
                        }
                      >
                        Sign In
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Signup;
