import { Link } from "react-router-dom";
import Sidebar from './Sidebar';


function Dashboard() {
  return (
    <div className="container mt-4">
      <div className="row">
        {/*............Dashboard Links...... */}
        <aside className="col-md-3">

        <div className="card">
         <Sidebar />
        </div>
        </aside>
        {/**********Dashbord link end ******** */}

        {/* ***************My Courses******************* */}

        <section className="col-md-9">
          {/* <MyCourses /> */}
          Dashboard
        </section>
        {/* ********End of My Courses  */}
      </div>
    </div>
  );
}

export default Dashboard;
