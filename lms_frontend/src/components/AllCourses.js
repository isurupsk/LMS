import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

function AllCourses() {
  const [courseData, setCourseData] = useState([]);

  // Fetch Courses  When page load
  useEffect(() => {
    try {
      axios.get(baseUrl + "/Course/").then((res) => {
        setCourseData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(
    "අපි සේවකරපු කෝස් Tර්ස්ර්ස්ලගේ මෙතනින් බලන්න පුළුවන්",
    courseData
  );
  return (
    /* Latest Courses */
    <div className="container mt-3">
      <h3 className="pb-1 mb-4">Latest Courses</h3>
      <div className="row">
        {/* 1st කාඩ් එක */}
        {/* Dinamatically කලින් Div  එකක් සෑදීම  Video 41 */}
        {courseData && courseData.map((course,index) =>

        <div className="col-md-3">
          {/* Style eka orginal eke na  */}
          <div className="card" style={{ width: "15rem", margin: "10px" }}>
            <Link to={"/detail/$(course.id)"}>
              <img src={course.featured_img} className="card-img-top" alt={course.title} />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to={"/detail/$(course.id)"}>{course.title}</Link>
              </h5>
            </div>
          </div>
        </div>

)}
      </div>

      {/* Latest Courses Cards End */}

      {/* Pagination Start */}
      <nav aria-label="Page navigation example mt-5">
        {/* justify-content-center centering the pagination*/}
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      {/* END */}
    </div>
  );
}

export default AllCourses;
