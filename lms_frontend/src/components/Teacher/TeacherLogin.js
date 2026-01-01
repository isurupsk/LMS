//
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const baseUrl = "http://127.0.0.1:8000/api";

function TeacherLogin() {
  const [teacherLoginData, setTeacherLoginData] = useState({
    email: "",
    password: "",
  });
  // if iser is not succesfully loging (bool = Flase  error msg  video 35)
  const [errorMsg,seterrorMsg] = useState('');


  const handleChange = (event) => {
    setTeacherLoginData({
      ...teacherLoginData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();

    //   try {
    //     const response = await axios.post(`${baseUrl}/teacher-login`, teacherLoginData);
    //     console.log(response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // const submitForm = () => {
    const teacherFormData = new FormData();
    teacherFormData.append("email", teacherLoginData.email);
    teacherFormData.append("password", teacherLoginData.password);
    try {
      axios
        .post(baseUrl + "/teacher-login", teacherFormData)
        .then((response) => {
          console.log(response.data);

          // ලොග් උනාට පසුව browser storage නැත්තං localstorage එකේ data save කිරිම

          // const teacherLoginStatus=localStorage.getItem ('teacherLoginStatus')
          // if(teacherLoginStatus== 'true'){
          //   window.location.href ='/teacher-dashboard';
          // }

          if (response.data.bool == true) {
            localStorage.setItem("teacherLoginStatus", true);
            // View.py  එකෙන් ගත්තු Teacher_id  එකේ මෙතනට පාස් කරගන්නවා

            localStorage.setItem("teacherId",response.data.teacher_id);
            window.location.href = "/teacher-dashboard";
          } else {
            seterrorMsg('Invalid Email or Passwoerd !!')
          }




        });
    } catch (error) {
      console.log(error);
    }
  };

  const teacherLoginStatus = localStorage.getItem("teacherLoginStatus");

  
  if (teacherLoginStatus == "true") {
    // window.location.href = "/teacher-dashboard";
  }
  useEffect(() => {
    document.title = "Teacher Login";
  }, []);

  

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <h5 className="card-header">Teacher Login</h5>
            <div className="card-body">
              <form>
                {errorMsg && <p className="text-danger">{errorMsg}</p>}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={teacherLoginData.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={teacherLoginData.password}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                {/* Submit Button  */}
                <button
                  type="submit"
                  onClick={submitForm}
                  className="btn btn-primary"
                  style={{ marginTop: "10px", width: "100%" }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherLogin;
