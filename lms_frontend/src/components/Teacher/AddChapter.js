import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import {useParams} from 'react-router-dom';

import React, { useState, useEffect } from "react";
import axios from "axios";
const baseUrl = "http://127.0.0.1:8000/api";


function AddChapter() {


    const [chapterData, setChapterData] = useState({
     
      title: "",
      description: "",
      video: "",
      remarks: "",
    });
  

  
    const handleChange = (event) => {
      setChapterData({
        ...chapterData,
        [event.target.name]: event.target.value,
      });
    };
  
    const handleFileChange = (event) => {
      setChapterData({
        ...chapterData,
        [event.target.name]: event.target.files[0],
      });
    };

    

//  යුවාරිල්ලකින් පාස් කරන අයිඩී එක අපට ගන්න පුළුවන් ඒකට අදාල 
// දේට අපිට ගන්න යූස් පැරම් ඕනි වෙනවා තොප් එකේකට රියක් රවුට්ට ඩොම් 
// එක install කරන්ඩ වෙනවා  (video Numb er 34)
  
    const {course_id}= useParams();

    const formSubmit = () => {
      const _formData = new FormData();
      // 
      _formData.append("course", course_id); // Assuming teacher ID is 1 for now
      _formData.append("title", chapterData.title);
      _formData.append("description", chapterData.description);
      _formData.append("video", chapterData.video, chapterData.video.name);
      _formData.append("remarks", chapterData.remarks);
  
      try {
        axios
          .post(baseUrl + "/Chapter/", _formData, {
            headers: {
              // Image date database ekata dameemata yodagani
              "content-type": "multipart/form-data",
            },
          })
          .then((res) => {
            // console.log(res.data);
                      window.location.href="/add-chapter/1";
          });
      } catch (error) {
        console.log(error);
      }
    };
  

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>

        {/*************** Course Form ****************/}

        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">Add Chapter</h5>
            <div className="card-body">

              {/* Course Title */}
              <div className="d-flex flex-column mb-3">
                <label htmlFor="title" className="form-label">
                  Course Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  onChange={handleChange}
                  id="title"
                />
              </div>

              {/* Course Description */}
              <div className="d-flex flex-column mb-3">
                <label htmlFor="description" className="form-label">
                  Course Description
                </label>
                <textarea
                  className="form-control"


                  name="description"
                  onChange={handleChange}
                  id="description"
                  rows="4"
                ></textarea>
              </div>

              {/* Course Video */}
              <div className="d-flex flex-column mb-3">
                <label htmlFor="video" className="form-label">
                  Video
                </label>
                <input
                  type="file"
                  className="form-control"
                  
                  name="video"
                  onChange={handleFileChange}
                  id="video"
                />
              </div>

              {/* Course Technologies */}
              <div className="d-flex flex-column mb-3">
                <label htmlFor="remarks" className="form-label">
                 Remarks
                </label>
                <textarea
                  className="form-control"
                  placeholder="This video Is focoused on Basic Introdructions"
                                  
                  name="remarks"
                  onChange={handleChange}  
                  id="remarks"
                  rows="4"
                ></textarea>
              </div>

              {/* Add Course Button */}
              <hr />
              <button type ="button" onClick={formSubmit} className="btn btn-primary">Add Course</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddChapter;



