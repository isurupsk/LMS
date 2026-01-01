import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";

function TeacherMyUsers(){
    return(
      <div className="container mt-4">
        <div className="row">
          <aside className="col-md-3">
            <TeacherSidebar />
          </aside>
<section className="col-md-9">
          <div className="card">
            <h5 className="card-header">My courses</h5>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Created By</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Php Development</td>
                    <td>
                      <Link to="/">Suraj Kumar</Link>
                    </td>
                    <td>
                      <button className="btn btn-danger btn-primary">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        </div>
        </div>
    );
}
export default TeacherMyUsers;