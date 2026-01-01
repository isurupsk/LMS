import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <h5 className="card-header">User Register</h5>
            <div className="card-body">
              <form>
                {/* **************Register Start******************* */}

                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Full Name
                  </label>
                  <input type="email" className="form-control" />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" />
                </div>

                {/* Username */}
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Username
                  </label>
                  <input type="email" className="form-control" />
                </div>
                {/* Pssword */}

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                {/* Interest */}
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Interest
                  </label>
                  <textarea className="form-control"></textarea>
                  <div id="emailHelp" className="form-text">
                    Php,Python, Javescript, ect
                  </div>
                </div>

                {/* Save Button  */}
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ marginTop: "10px", width: "100%" }}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
