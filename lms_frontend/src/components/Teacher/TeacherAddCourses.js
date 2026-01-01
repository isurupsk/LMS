import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";

import React, { useState, useEffect } from "react";
import axios from "axios";
const baseUrl = "http://127.0.0.1:8000/api";

function TeacherAddCourses() {
  const [cats, setCats] = useState([]);
  const [courseData, setCourseData] = useState({
    category: "", // Changing the field name to match Django model
    title: "",
    description: "",
    f_img: "",
    techs: "",
  });

  useEffect(() => {
    try {
      axios.get(baseUrl + "/CourseCategory/").then((res) => {
        setCats(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChange = (event) => {
    setCourseData({
      ...courseData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setCourseData({
      ...courseData,
      [event.target.name]: event.target.files[0],
    });
  };

  const formSubmit = () => {
    const _formData = new FormData();
    _formData.append("category", courseData.category); // Use category field as per Django model
    _formData.append("teacher", 1); // Assuming teacher ID is 1 for now
    _formData.append("title", courseData.title);
    _formData.append("description", courseData.description);
    _formData.append("featured_img", courseData.f_img, courseData.f_img.name);
    _formData.append("techs", courseData.techs);

    try {
      axios
        .post(baseUrl + "/Course/", _formData, {
          headers: {
            // Image date database ekata dameemata yodagani
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          // console.log(res.data);
                    window.location.href="/teacher-add-courses";
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>

        {/* Course Form */}
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">Add Courses</h5>
            <div className="card-body">
              <form>
                {/* Course Category */}
                <div className="d-flex flex-column mb-3">
                  {/* Adjusted to match Django model field name */}
                  <label htmlFor="courseTitle" className="form-label">
                    Course Category
                  </label>
                  <select
                    name="category"
                    onChange={handleChange}
                    className="form-control"
                  >
                    {cats.map((courseCategory) => (
                      <option key={courseCategory.id} value={courseCategory.id}>
                        {courseCategory.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Course Title */}
                <div className="d-flex flex-column mb-3">
                  <label htmlFor="courseTitle" className="form-label">
                    Course Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    className="form-control"
                    id="title"
                  />
                </div>

                {/* Course Description */}
                <div className="d-flex flex-column mb-3">
                  <label htmlFor="courseDesc" className="form-label">
                    Course Description
                  </label>
                  <textarea
                    className="form-control"
                    type="text"
                    name="description"
                    onChange={handleChange}
                    id="description"
                    rows="4"
                  ></textarea>
                </div>

                {/* Course Video */}
                <div className="d-flex flex-column mb-3">
                  <label htmlFor="courseVideo" className="form-label">
                    Featured
                  </label>
                  <input
                    type="file"
                    name="f_img"
                    onChange={handleFileChange}
                    className="form-control"
                    id="courseVideo"
                  />
                </div>

                {/* Course Technologies */}
                <div className="d-flex flex-column mb-3">
                  <label htmlFor="courseTech" className="form-label">
                    Technologies
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Php,Python,Java,..."
                    name="techs"
                    onChange={handleChange}
                    id="techs"
                    rows="4"
                  ></textarea>
                </div>

                {/* Add Course Button */}
                <hr />
                <button
                  type="button"
                  onClick={formSubmit}
                  className="btn btn-primary"
                >
                  Add Course
                </button>
              </form>
            </div>
          </div>    
        </section>
      </div>
    </div>
  );
}

export default TeacherAddCourses;
