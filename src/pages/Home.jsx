import React from 'react'
import MembershipHome from '../assets/MembershipHome.jpg'
import CourseList from "../components/CourseList";

function Home({ courses }) {
  return (
    <div className="home">
      <div className="bgImg-wrapper">
        <h1>Self Study Package</h1>
        <figure>
          <img src={MembershipHome} alt="" />
        </figure>
      </div>
      <CourseList courses={courses} />
    </div>
  );
}

export default Home