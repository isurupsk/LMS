import { Link } from "react-router-dom";

function PopulerCourses() {
  return (
    /* Latest Courses */
    <div className="container mt-3">
      <h3 className="pb-1 mb-4">Populer Courses</h3>
      <div className="row">
        {/* 1st කාඩ් එක */}
        <div className="col-md-3">
          {/* Style eka orginal eke na  */}
          <div className="card" style={{ width: "15rem", margin: "10px" }}>
            <Link to="/detail/1">
              <img src="python.jpg" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/1">Course title</Link>
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
              <img src="python.jpg" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">
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

        {/* 3rd කාඩ් එක */}
        <div className="col-md-3">
          {/* Style eka orginal eke na  */}
          <div className="card" style={{ width: "15rem", margin: "10px" }}>
            <a href="#">
              <img src="python.jpg" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">
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

        {/* 4th කාඩ් එක */}
        <div className="col-md-3">
          {/* Style eka orginal eke na  */}
          <div className="card" style={{ width: "15rem", margin: "10px" }}>
            <a href="#">
              <img src="python.jpg" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">
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

export default PopulerCourses;
