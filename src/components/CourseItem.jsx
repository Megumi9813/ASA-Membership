import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CourseItem({ course }) {
  return (
    <div className="courseItem">
      <li className="card-item" key={course.id}>
        {console.log(course.id)}
        <figure className="course-item_img">
          <img src={course.bgImg} alt="" />
        </figure>
        <div className="course-item_description">
          <div className="course-item_up">
            <div className="course-item_teahcer">
              <figure className="teacher_img">
                <img src={course.TeacherImg} alt="" />
              </figure>
              <div className="teacher_name">{course.Teacher}</div>
            </div>
            <h4 className="course-item_title">{course.title}</h4>
          </div>
          <div className="course-item_condition">
            <div className="numberOfHours">
              <FontAwesomeIcon icon="fa-folder-open" />
              {course.NumberOfClass} classes
            </div>
            <div className="price">Price: ${course.price}.00</div>
          </div>
        </div>
      </li>
    </div>
  );
}

export default CourseItem