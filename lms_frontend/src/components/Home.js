import { Link } from "react-router-dom";
import AllCourses from "./AllCourses";
import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

function Home() {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${baseUrl}/Course/?result=4`);
        setCourseData(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    //  margin top (mt-4) එකෙන් Space එකක් උඩට ගත හැකිය

    <div className="container mt-4">
      {/* Latest Courses */}

      <h3 className="pb-1 mb-4">
        Latest Courses
        <Link to="/all-courses" className="float-end">
          See All
        </Link>
      </h3>
      <div className="row">
        {/* 1st කාඩ් එක */}

        {/* Dinamatically කලින් Div  එකක් සෑදීම  Video 41 */}
        {courseData &&
          courseData.map((course, index) => (
            <div className="col-md-3">
              {/* Style eka orginal eke na  */}
              <div className="card" style={{ width: "15rem", margin: "10px" }}>
                <Link to={"/detail/$(course.id)"}>
                  <img
                    src={course.featured_img}
                    className="card-img-top"
                    alt={course.title}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to={"/detail/$(course.id)"}>{course.title}</Link>
                  </h5>
                </div>
              </div>
            </div>
          ))}

        {/* End  කාඩ් එක */}
      </div>

      {/* Latest Courses Cards End */}

      {/* ****************************** Populer Courses*********************** */}

      {/* my-4 මෙයින් උඩට ද  margin එකක් දිය හැක  */}

      <h3 className="pb-1 mb-4 mt-5">
        Populer Courses{" "}
        <Link to="/populer-courses" className="float-end">
          See All
        </Link>
      </h3>
      <div className="row">
        {/* 1st කාඩ් එක */}

        <div className="col-md-3">
          {/* Style eka orginal eke na  */}

          <div className="card" style={{ width: "15rem", margin: "10px" }}>
            <a href="#">
              {" "}
              <img src="logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <a href="#">Course title</a>
              </h5>
            </div>

            {/* Ratings */}
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4.5/5</span>
                <span className="float-end">Views: 78945</span>
              </div>
            </div>
            {/* end the reating div */}
          </div>
        </div>

        {/* දෙවැනි කාඩ් එක */}

        <div className="col-md-3">
          {/* Style eka orginal eke na  */}

          <div className="card" style={{ width: "15rem", margin: "10px" }}>
            <a href="#">
              {" "}
              <img src="logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <a href="#">Course title</a>
              </h5>
            </div>
          </div>
        </div>

        {/* 3rd කාඩ් එක */}

        <div className="col-md-3">
          {/* Style eka orginal eke na  */}

          <div className="card" style={{ width: "15rem", margin: "10px" }}>
            <a href="#">
              {" "}
              <img src="logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <a href="#">Course title</a>
              </h5>
            </div>
          </div>
        </div>

        {/* 4th කාඩ් එක */}

        <div className="col-md-3">
          {/* Style eka orginal eke na  */}

          <div className="card" style={{ width: "15rem", margin: "10px" }}>
            <a href="#">
              {" "}
              <img src="logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <a href="#">Course title</a>
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* Populer Courses Card End */}

      {/***********************************Populer Teachers *********************************/}

      {/* my-4 මෙයින් උඩට ද  margin එකක් දිය හැක  */}

      <h3 className="pb-1 mb-4 mt-5">
        Populer Teachers{" "}
        <Link to="/populer-teacher" className="float-end">
          See All
        </Link>
      </h3>
      <div className="row">
        {/* 1st කාඩ් එක */}

        <div className="col-md-3">
          {/* Style eka orginal eke na  */}

          <div className="card" style={{ width: "15rem", margin: "10px" }}>
            <a href="#">
              {" "}
              <img src="logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <a href="#">Teacher Name </a>
              </h5>
            </div>
          </div>
        </div>

        {/* දෙවැනි කාඩ් එක */}

        <div className="col-md-3">
          {/* Style eka orginal eke na  */}

          <div className="card" style={{ width: "15rem", margin: "10px" }}>
            <a href="#">
              {" "}
              <img src="logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <a href="#">Teacher Name</a>
              </h5>
            </div>
          </div>
        </div>

        {/* 3rd කාඩ් එක */}

        <div className="col-md-3">
          {/* Style eka orginal eke na  */}

          <div className="card" style={{ width: "15rem", margin: "10px" }}>
            <a href="#">
              {" "}
              <img src="logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <a href="#">Teacher Name</a>
              </h5>
            </div>
          </div>
        </div>

        {/* 4th කාඩ් එක */}

        <div className="col-md-3">
          {/* Style eka orginal eke na  */}

          <div className="card" style={{ width: "15rem", margin: "10px" }}>
            <a href="#">
              {" "}
              <img src="logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <a href="#">Teacher Name</a>
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* Populer Teachers Card End */}

      {/* Stident Testimoial */}

      <h3 className="pb-1 mb-4 mt-5">Student Testimoial</h3>

      <div
        id="carouselExampleIndicators"
        className="carousel slide bg-dark text-white py-5"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* Bloker Quteas ekak danwa  eka touch harma wakiyak enwa*/}
            <figure class="text-center">
              <blockquote class="blockquote">
                <p>1 well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
            {/* iwarai eka methanin */}
          </div>
          <div className="carousel-item">
            {/* Bloker Quteas ekak danwa  eka touch harma wakiyak enwa*/}

            <figure class="text-center">
              <blockquote class="blockquote">
                <p>2 well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
            {/* iwarai eka methanin */}
          </div>
          <div className="carousel-item">
            {/* Bloker Quteas ekak danwa  eka touch harma wakiyak enwa*/}
            <figure class="text-center">
              <blockquote class="blockquote">
                <p>3 well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
            {/* iwarai eka methanin */}{" "}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
