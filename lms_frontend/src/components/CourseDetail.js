import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// This is a functional React component named CourseDetail, which is making use of the useParams() hook from the react-router-dom library.

// The useParams() hook allows the component to access any parameters that were passed to the route as part of the URL.

// In this particular code snippet, the component is extracting the course_id parameter from the URL and then rendering a simple HTML heading element (<h1>) with the text "Course Detail" followed by the value of course_id.

// Assuming that the component is being used as part of a larger application that makes use of React Router, when a user navigates to a URL that matches the route associated with this component (e.g. "/courses/123"), the CourseDetail component will be rendered with the course_id parameter set to "123".

function CourseDetail() {
  let { course_id } = useParams();
  return (
    <div className="container mt-3">
      <div className="row">
        {/************************** Course Image eka****************/}

        <div className="col-4">
          <img
            src="/logo512.png"
            className="img-thumbnail"
            alt="Course Image"
          />
        </div>
        {/* ************************Course Title******************* */}
        <div className="col-8">
          <h3>Course Title</h3>
          <p>
            Using a combination of grid and utility classes, cards can be made
            horizontal in a mobile-friendly and responsive way. In the example
            below, we remove the grid gutters with .g-e and use .col-md- classes
            to make the card horizontal at the md breakpoint. Further
            adjustments may be needed depending on your card content.
          </p>
          <p className="fw-bold">
            Course By: <Link to="/teacher-detail/1">Teacher 1</Link>
          </p>
          <p className="fw-bold">Duration: 3 Hours 30 Minuts</p>
          <p className="fw-bold">Total Enrolled: 456 Students</p>
          <p className="fw-bold">Rating: 4.5/5</p>
        </div>
      </div>

      {/*****************************Course Videos***************************/}

      {/* bootstrap icons කරා මේකට  (bi-youtube) */}
      {/* 1st Group */}
      <div className="card mt-4">
        <h5 className="card-header">Course Videos</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Introduction
            <span className="float-end">
              <span className="me-3">1:30 min</span>
              {/* This is video model calling ID and # mark is nessesary requirement */}
              <button
                className="btn btn-sm btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#VideoModel"
              >
                <i className="bi-youtube"></i>
              </button>
            </span>
            {/* *Video Model Start 1st* */}
            <div
              className="modal fade"
              id="VideoModel"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              {/* If this is bigger larage samall <div className="modal-dialog modal-xl"> model video  */}
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                  {/* Starting Ifreame youtube video */}
                  <div className="modal-body">
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                        title="youTube video"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  {/* End Iframe youtube video */}
                </div>
              </div>
            </div>
            {/* *End Video Model* */}
          </li>
        </ul>
      </div>

      {/********************* අලුත් කාඩ් එකක් ඇත් කරනවා(Releted Course) ************/}

      <h3 className="pb-1 mb-4 mt-5">Releted Courses</h3>
      <div className="row">
        {/*===============1st කාඩ් එක===============*/}

        <div className="col-md-3">
          {/* Style eka orginal eke na  */}

          <div className="card" style={{ width: "15rem", margin: "10px" }}>
            <Link to="/detail/1">
              {" "}
              <img src="/logo512.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <Link to="/detail/1">Course title</Link>
              </h5>
            </div>
          </div>
        </div>

        {/*================2nd Card with Image===============*/}

        <div className="col-md-3">
          {/* Style eka orginal eke na  */}

          <div className="card" style={{ width: "15rem", margin: "10px" }}>
            <Link to="/detail/1">
              {" "}
              <img src="/logo512.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <Link to="/detail/1">Course title</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CourseDetail;
