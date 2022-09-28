import React from "react";
import CourseItem from "./CourseItem";

function CourseList({ courses }) {
  return (
    <div className="courseList">
      <div className="row">
        <div className="course-wrapper">
          <ul className="card-list">
            {courses?.map((course) => (
              <CourseItem course={course} key={course.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CourseList;
