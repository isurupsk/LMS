import { Link } from "react-router-dom";
import TeacherSidebar from './TeacherSidebar';


function TeacherDashboard() {
  return (
    <div className="container mt-4">
      <div className="row">
        {/*............Dashboard Links...... */}
        <aside className="col-md-3">

        <div className="card">
         <TeacherSidebar />
        </div>
        </aside>
        {/**********Dashbord link end ******** */}

        {/* ***************My Courses******************* */}

        <section className="col-md-9">
          {/* <MyCourses /> */}
          Teacher Dashboard
        </section>
        {/* ********End of My Courses  */}
      </div>
    </div>
  )}
export default TeacherDashboard;
