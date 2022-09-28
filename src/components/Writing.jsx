import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WritingForm from "./WritingForm";
import { useUserContext } from "../contexts/userContext";

function Writing({ writing }) {
  const { user, setAuthCondition } = useUserContext();

  return (
    <>
      {user ? (
        <>
          {writing.map((writingTask) =>
            writingTask.classes.map((writingAnswer) => (
              <div className="classRoom_container" key={writingAnswer.title}>
                <div className="classRoom_header">
                  <h2>{writingAnswer.title}</h2>
                  <div className="timer">
                    <p>TIme remaining: 00 minutes 00 seconds</p>
                  </div>
                </div>
                <div className="classRoom_body">
                  <div className="writing_question-left">
                    <div className="question_intro">
                      <FontAwesomeIcon icon="fa-circle-exclamation" />
                      Read the following information.
                    </div>
                    <div className="question">{writingAnswer.Question1}</div>
                  </div>
                  <div className="writing_question-right">
                    <div className="question_intro">
                      <FontAwesomeIcon icon="fa-circle-exclamation" />
                      {writingAnswer.Question2}
                    </div>
                    <ul className="task">
                      {writingAnswer.Task.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                    <WritingForm />
                  </div>
                </div>
              </div>
            ))
          )}
        </>
      ) : (
        <>
          <div className="classRoom_container noUser">
            <div className="unLock-wall">
              <FontAwesomeIcon icon="fa-lock" />
              <h2>Unlock this lesson</h2>
              <p className="unLock-wall_para">
                Log into your account to take this lesson!
              </p>
              <div>
                <button
                  className="btn onLock-btn"
                  onClick={() =>
                    setAuthCondition((prevState) => ({
                      ...prevState,
                      signIn: true,
                    }))
                  }
                >
                  Login
                </button>
                <button
                  className="btn"
                  onClick={() =>
                    setAuthCondition((prevState) => ({
                      ...prevState,
                      signUp: true,
                    }))
                  }
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Writing;
