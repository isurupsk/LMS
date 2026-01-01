import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useParams } from "react-router-dom";

import React, { useState, useEffect } from "react";
import axios from "axios";
const baseUrl = "http://127.0.0.1:8000/api";

function EditChapter() {
  const [chapterData, setChapterData] = useState({
    course:"",
    title: "",
    description: "",
    prev_video: "",
    video:"",
    remarks: ""
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

  const { chapter_id } = useParams();

  const formSubmit = () => {
    const _formData = new FormData();
    //
    _formData.append("course",chapterData.course);
    _formData.append("title", chapterData.title);
    _formData.append("description", chapterData.description);
    // Chapter වීඩියෝ එකි (not emphty) විතරයි aලුත් වීඩියෝ එකක් අප්ලෝඩ් කරන්ඩ ඕනේ නැත්තං Previouse වීඩියෝ එකම තියෙන්න ඕනි  (38 LMS)
    if(chapterData.video!==''){
      _formData.append("video", chapterData.video, chapterData.video.name);
    }

    _formData.append("remarks", chapterData.remarks);

    try {
      axios
        .put(baseUrl + "/Chapter/"+chapter_id, _formData, {
          headers: {
            // Image date database ekata dameemata yodagani
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          // window.location.href = "/add-chapter/1";

          // succesfully  අප්ඩේට් වුණා නම් (ස්ටේටර්ස් එක  == 200 )නම් Sweet Alert එකක් පෙන්නන්න ඕන (38V T 22M)
          if (res.status==200){
            const Swal =require ('sweetalert2');
 
                Swal.fire({
                  title: 'Data has been updated',
                  icon: 'success',
                  toast: true,
                  timer: 3000,
                  position: 'top-right', // Enclosed in single quotes
                  timerProgressBar: true,
                  showConfirmButton: false
                
                })
              };

          
        });
    } catch (error) {
      console.log(error);
    }
  };
 
  
  // Fetch chapters when page loads
  //   useEffect එක අරගෙන html එකේ value එකේ ලබා දීමේ අපට  එඩිට් කරන්න අවශ්‍ය Data පෙන්නන්න පුළුවන්

  useEffect(() => {
    try {
      axios.get(baseUrl + "/Chapter/" + chapter_id).then((res) => {
        // console.log(res.data);
        setChapterData({
          course: res.data.course,
          title: res.data.title,
          description: res.data.description,
          prev_video: res.data.video, // Assuming "prev video" is a typo, and you meant "prevVideo"
          remarks: res.data.remarks,
          video: ''
        });
  
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>

        {/*************** Course Form ****************/}

        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">Update Chapter</h5>
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
                  value={chapterData.title}
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
                  value={chapterData.description}
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

              {chapterData.prev_video &&                 
                <video controls width="100%" height="250" className='mt-2'>
                <source src={chapterData.prev_video} type="video/webm" />
                <source src={chapterData.prev_video} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>
          }
                

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
                  value={chapterData.remarks}
                  onChange={handleFileChange}
                  id="remarks"
                  rows="4"
                ></textarea>
              </div>

              {/* Add Course Button */}
              <hr />
              <button
                type="button"
                onClick={formSubmit}
                className="btn btn-primary"
              >
                Update
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EditChapter;
