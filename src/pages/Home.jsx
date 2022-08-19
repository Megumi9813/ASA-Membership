import React from 'react'
import MembershipHome from '../assets/MembershipHome.jpg'

function Home() {
  return (
    <div className="home">
        <div className="bgImg-wrapper">
            <h1>Courses</h1>
            <figure>
                <img src={MembershipHome} alt="" />
            </figure>
        </div>
        <div className="row">
            <div className="course-wrapper">
                <ul className="course-list">
                    <li className="course-item"></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Home