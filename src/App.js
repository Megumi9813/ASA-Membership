import React, { useEffect, useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import Home from "./pages/Home";
import Theater from "./components/Theater";
import Signin from "./components/Account/Signin";
import Signup from "./components/Account/Signup";
import ForgotPW from "./components/Account/ForgotPW";
import Writing from "./components/Writing";

function App() {
  // const [courses, setCourses] = useState([]);
  const [writing, setWriting] = useState([]);

  useEffect(() => {
    // const coursesCollectionRef = collection(db, "courses");
    // const getCourses = async () => {
    //   const coursesData = await getDocs(coursesCollectionRef);
    //   setCourses(
    //     coursesData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    //   );
    // };
    // getCourses();
    const writingsCollectionRef = collection(db, "writing");
    const getWriting = async () => {
      const writingData = await getDocs(writingsCollectionRef);
      setWriting(
        writingData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getWriting();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Signin />
      <Signup />
      <ForgotPW />
      <main className="course_main">
        <aside className="sidebar_wrapper">
          {/* <Sidebar courses={courses} /> */}
          <Sidebar writing={writing} />
        </aside>
        <div className="course_wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<Home courses={courses} />} /> */}
            <Route path="/writing" element={<Writing writing={writing} />} />
            {/* <Route
              path="/ielts/introduction"
              element={<Theater courses={courses} />}
            />
            <Route
              path="/ielts/class02"
              element={<Theater courses={courses} />}
            />
            <Route
              path="/ielts/class03"
              element={<Theater courses={courses} />}
            /> */}
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
