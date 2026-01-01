import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";

import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
const baseUrl = "http://127.0.0.1:8000/api";

function EditCourses() {
  const [cats, setCats] = useState([]);
  const [courseData, setCourseData] = useState({
    category: "", // Changing the field name to match Django model
    title: "",
    description: "",
    prev_img: "",
    f_img: "",
    techs: "",
  });

  // From course ID get 

  const { course_id } = useParams();

  useEffect(() => {
    try {
      axios.get(baseUrl + "/CourseCategory/").then((res) => {
        setCats(res.data);
      });
    } catch (error) {
      console.log(error);

    }

    // Fetch Current Course Data 

    try {
      axios.get(baseUrl + "/Teacher-Course-Detail/" + course_id).then((res) => {
        // console.log(res.data);
        setCourseData({
          category: res.data.category,
          title: res.data.title,
          description: res.data.description,
          prev_img: res.data.featured_img,
          f_img:'',
          techs: res.data.techs,
          // title: res.data.title,
          // description: res.data.description,
       
        });
  
      });
    } catch (error) {
      console.log(error);
    }
    // end 
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
    if(courseData.f_img!==''){
      _formData.append("featured_img", courseData.f_img, courseData.f_img.name);
    }
    _formData.append("techs", courseData.techs);

    try {
      axios
        .put(baseUrl + "/Teacher-Course-Detail/" +course_id, _formData, {
          headers: {
            // Image date database ekata dameemata yodagani
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          // console.log(res.data);
          if (res.status==200){
            const Swal =require ('sweetalert2');
 
                Swal.fire({
                  title: 'Data has been updated',
                  icon: 'success',
                  toast: true,
                  timer: 3000,
                  position: 'top-right', // Enclosed in single quotes
                  timerProgressBar: true,
                  showConfirmButton: false
                
                })
              };
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
          <h5 class="card-header bg-light text-dark">Edit Courses</h5>

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
                    value={courseData.category}
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
                    value={courseData.title}
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
                    value={courseData.description}
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

                  {
                    courseData.prev_img && <p className="mt-2"><img src={courseData.prev_img} width ="300"/> </p>
                  }
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
                    value={courseData.techs}
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
                  Edit Course
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EditCourses;
