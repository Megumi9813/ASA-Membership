import React, { useRef } from "react";
import { useUserContext } from "../../contexts/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { authCondition, signInUser, user, setAuthCondition } =
    useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  return (
    <div className="signIn">
      {user === null && authCondition.signIn === true && (
        <>
          <div className="signIn_background open"></div>
          <div className="auth-wrapper open">
            <div className="form">
              <div className="form_header">
                <button onClick={() => setAuthCondition(false)}>
                  <FontAwesomeIcon icon="fa-xmark" />
                </button>
              </div>
              <div className="form_body">
                <div className="form_contents">
                  <h2> Login </h2>
                  <form onSubmit={onSubmit}>
                    <div className="form-group">
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
                      <button type="submit">Sign In</button>
                      <div
                        className="auth_switch authToForgotPW"
                        onClick={() =>
                          setAuthCondition((prevState) => ({
                            ...prevState,
                            signIn: false,
                            signUp: false,
                            forgotPW: true,
                          }))
                        }
                      >
                        Forgot password?
                        {console.log(authCondition.forgotPW)}
                      </div>
                      <div className="auth_switch">
                        Don't have an account yet?
                        <span
                          onClick={() =>
                            setAuthCondition((prevState) => ({
                              ...prevState,
                              signIn: false,
                              signUp: true,
                            }))
                          }
                        >
                          Register
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Signin;
