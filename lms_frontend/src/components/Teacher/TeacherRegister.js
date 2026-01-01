// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// // const baseUrl = "http://127.0.0.1:8000/api/";

// function TeacherRegister() {
//   const [teacherData, setteacherData] = useState({
//     full_name: "",
//     email: "",
//     password: "",
//     qualification: "",
//     mobile_no: "",
//     skills: "",
//     status: "",
//   });

//   // Change Element value
//   const handleChange = (event) => {
//     setteacherData({
//       ...teacherData,
//       [event.target.name]: event.target.value,
//       // teacher data eke name eka set karanwa  value ekata
//     });
//   };
//   // End

//   // Submit Form
//   const submitForm = () => {
//     const teacherFormData = new FormData();
//     teacherFormData.append("full_name", teacherData.full_name);
//     teacherFormData.append("email", teacherData.email);
//     teacherFormData.append("password", teacherData.password);
//     teacherFormData.append("qualification", teacherData.qualification);
//     teacherFormData.append("mobile_no", teacherData.mobile_no);
//     teacherFormData.append("skills", teacherData.skills);

//     try {
//       axios
//         .post("http://127.0.0.1:8000/api/teacher/", teacherFormData)
//         .then((response) => {
//           // console.log(response.data);
//           // // all the data api gannawa me data ekan
//           setteacherData({
//             full_name: "",
//             email: "",
//             password: "",
//             qualification: "",
//             mobile_no: "",
//             skills: "",
//             status: "succes",
//           });
//         });
//     } catch (error) {
//       console.log(error);
//       setteacherData({ status: "error" });
//       // error msgae eka match nam
//     }
//   };
//   // End useeffect
//   return (
//     <div className="container mt-4">
//       <div className="row">
//         <div className="col-6 offset-3">
//           {/* Re3gistration validations */}

//           {teacherData.status == "succes" && (
//             <p className="text-success">Thanks for your registration</p>
//           )}
//           {teacherData.status == "error" && (
//             <p className="text-danger">Something wrong happened!!</p>
//           )}
//           {/* Registration validation end */}
//           <div className="card">
//             <h5 className="card-header">Teacher Register</h5>
//             <div className="card-body">
//               <form>
//                 {/* **************Register Start*******************
//                   Databse model eka tiyana widhatama anupiliwalata tibiya yutui*/}
//                 {/* Full Name */}
//                 <div className="mb-3">
//                   <label htmlFor="exampleInputEmail1" className="form-label">
//                     Full Name
//                   </label>
//                   <input
//                     value={teacherData.full_name}
//                     onChange={handleChange}
//                     name="full_name"
//                     type="text"
//                     className="form-control"
//                   />
//                 </div>
//                 {/* Email */}
//                 <div className="mb-3">
//                   <label htmlFor="exampleInputEmail1" className="form-label">
//                     Email
//                   </label>
//                   <input
//                     value={teacherData.email}
//                     onChange={handleChange}
//                     name="email"
//                     type="email"
//                     className="form-control"
//                   />
//                 </div>
//                 {/* Pssword */}
//                 <div className="mb-3">
//                   <label htmlFor="exampleInputPassword1" className="form-label">
//                     Password
//                   </label>
//                   <input
//                     value={teacherData.password} // Use teacherData.password instead of teacherData.email
//                     onChange={handleChange}
//                     name="password"
//                     type="password"
//                     className="form-control"
//                     id="exampleInputPassword1"
//                   />
//                 </div>
//                 {/* QUlification */}
//                 <div className="mb-3">
//                   <label htmlFor="exampleInputEmail1" className="form-label">
//                     Qulification
//                   </label>
//                   <input
//                     value={teacherData.qualification}
//                     onChange={handleChange}
//                     name="qualification"
//                     type="text"
//                     className="form-control"
//                   />
//                 </div>
//                 {/* Mobile Number*/}
//                 <div className="mb-3">
//                   <label htmlFor="exampleInputEmail1" className="form-label">
//                     Mobile Number
//                   </label>
//                   <input
//                     value={teacherData.mobile_no}
//                     onChange={handleChange}
//                     name="mobile_no"

///////////////////////////////////////////////////////////////////////////////////////

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function TeacherRegister() {
  const [teacherData, setTeacherData] =  useState({
    full_name: "",
    email: "",
    password: "",
    qualification: "",
    mobile_no: "",
    skills: "",
    status: "",
  });

  const handleChange = (event) => {
    // console.log(event.target.name, event.target.value);
    setTeacherData({
      // Spred Operator for add value data 
      ...teacherData,
      // event eka tamai ape form eke tiyana names ewa uda tiyana name walata samana wenna oni
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = async () => {
    const teacherFormData = new FormData();
    teacherFormData.append("full_name", teacherData.full_name);
    teacherFormData.append("email", teacherData.email);
    teacherFormData.append("password", teacherData.password);
    teacherFormData.append("qualification", teacherData.qualification);
    teacherFormData.append("mobile_no", teacherData.mobile_no);
    teacherFormData.append("skills", teacherData.skills);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/teacher/",
        teacherFormData
      );
      setTeacherData({
        full_name: "",
        email: "",
        password: "",
        qualification: "",
        mobile_no: "",
        skills: "",
        status: "success",
        
      });
    } catch (error) {
      console.log(error);
      setTeacherData({ status: "error" });
    }
  };

  useEffect(() => {
    document.title = "Teacher Register";
  });

  const teacherLoginStatus = localStorage.getItem("teacherLoginStatus");
  if (teacherLoginStatus == "true") {
    // window.location.href = "/teacher-dashboard";
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 offset-3">
          {teacherData.status === "success" && (
            <p className="text-success">Thanks for your registration</p>
          )}
          {teacherData.status === "error" && (
            <p className="text-danger">Something wrong happened!!</p>
          )}
          <div className="card">
            <h5 className="card-header">Teacher Register</h5>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputText" className="form-label">
                    Full Name
                  </label>
                  <input
                    value={teacherData.full_name}
                    onChange={handleChange}
                    name="full_name"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    value={teacherData.email}
                    onChange={handleChange}
                    name="email"
                    type="email"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    value={teacherData.password}
                    onChange={handleChange}
                    name="password"
                    type="password"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Qualification
                  </label>
                  <input
                    value={teacherData.qualification}
                    onChange={handleChange}
                    name="qualification"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    value={teacherData.mobile_no}
                    onChange={handleChange}
                    name="mobile_no"
                    ////////////                   // //////////////////////////////////////////////////////////////////////////////
                    type="number"
                    className="form-control"
                  />
                </div>
                {/* Skills */}
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Skills
                  </label>
                  <textarea
                    value={teacherData.skills}
                    onChange={handleChange}
                    name="skills"
                    className="form-control"
                  ></textarea>
                  <div id="emailHelp" className="form-text">
                    Php,Python, Javescript, ect
                  </div>
                </div>
                {/* Save Button  */}
                <button
                  onClick={submitForm}
                  type="submit"
                  className="btn btn-primary"
                  style={{ marginTop: "10px", width: "100%" }}
                >
                  Teacher Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TeacherRegister;
