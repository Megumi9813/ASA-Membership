import React, { useRef } from "react";
import { useUserContext } from "../../contexts/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ForgotPW = () => {
  const emailRef = useRef();
  const { authCondition, forgotPassword, setAuthCondition, user } =
    useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email) forgotPassword(email).then(() => {
        "Password reset email sent! Please check your inbox.";
    })
  };

  return (
    <div className="forgotPW">
      {user === null && authCondition.forgotPW === true && (
        <>
          <div className="forgotPW_background open"></div>
          <div className="auth-wrapper open">
            <div className="form">
              <div className="form_header">
                <button
                  className="backToSignIn"
                  onClick={() =>
                    setAuthCondition((prevState) => ({
                      ...prevState,
                      signIn: true,
                      signUp: false,
                      forgotPW: false,
                    }))
                  }
                >
                  <FontAwesomeIcon icon="fa-chevron-left" />
                </button>
                <button onClick={() => setAuthCondition(false)}>
                  <FontAwesomeIcon icon="fa-xmark" />
                </button>
              </div>
              <div className="form_body">
                <h2> Forgot your password? </h2>
                <div className="forgotPW_sub">
                  Don't worry, we'll send you an email to help you reset your
                  password.
                </div>
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
                    <button onClick={forgotPasswordHandler}>Continue</button>
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

export default ForgotPW;
