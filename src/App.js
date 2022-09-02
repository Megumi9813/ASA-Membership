import React, { useEffect, useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Theater from "./components/Theater";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  const [courses, setCourses] = useState([]);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  useEffect(() => {
    const coursesCollectionRef = collection(db, "courses");
    const getCourses = async () => {
      const coursesData = await getDocs(coursesCollectionRef);
      setCourses(
        coursesData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getCourses();
  }, []);

  return (
    <div className="App">
      <Nav
        signInOpen={signInOpen}
        setSignInOpen={setSignInOpen}
        signUpOpen={signUpOpen}
        setSignUpOpen={setSignUpOpen}
      />
      <Signin signInOpen={signInOpen} setSignInOpen={setSignInOpen} />
      <Signup signUpOpen={signUpOpen} setSignUpOpen={setSignUpOpen} />
      <main className="course_main">
        <aside className="sidebar_wrapper">
          <Sidebar courses={courses} />
        </aside>
        <div className="course_wrapper">
          <Routes>
            <Route path="/" element={<Home courses={courses} />} />
            <Route path="/account" element={<Account />} />
            <Route
              path="/ielts/introduction"
              element={<Theater courses={courses} />}
            />
            {console.log(courses)}
            <Route
              path="/ielts/class02"
              element={<Theater courses={courses} />}
            />
            <Route
              path="/ielts/class03"
              element={<Theater courses={courses} />}
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
