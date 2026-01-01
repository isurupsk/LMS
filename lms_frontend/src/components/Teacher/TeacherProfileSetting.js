import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";

function TeacherProfileSetting() {
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        {/******************* *Profile Setting *****************/}

        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header d-flex flex-column mb-3">TProfile Setting</h5>
            <div className="card-body">
              {/* Full Name  */}

              <div className="mb-3 row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 d-flex flex-column mb-3"
                >
                  Teachrs Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="staticEmail"
                  />
                </div>
              </div>
              {/* Interest  */}

              <div className="mb-3 row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Skills
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="staticEmail"
                  />
                </div>
              </div>
              {/* Email  */}

              <div className="mb-3 row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="staticEmail"
                  />
                </div>
              </div>
              {/* Password */}

              <div className="mb-3 row">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-2 col-form-label"
                >
                  Password
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              {/* Profile Photo */}

              <div className="mb-3 row">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-2 col-form-label"
                >
                  Profile Photo
                </label>
                <div className="col-sm-10">
                  <input
                    type="file"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              {/* Update Button */}

              <hr />
              <button className="btn btn-primary">Update</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TeacherProfileSetting;