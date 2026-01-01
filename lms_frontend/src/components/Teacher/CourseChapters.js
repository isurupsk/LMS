import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from "react"; // Corrected typo here
import { useParams } from "react-router-dom";
import axios from "axios";


const baseUrl = "http://127.0.0.1:8000/api";

function CourseChapters() {
  const [chapterData, setChapterData] = useState([]); 
  const[totalResult, settotalResults] = useState([]); 
  const { course_id } = useParams();

  // Fetch chapters when page loads
  useEffect(() => {
    try {
      axios.get(baseUrl + "/course-chapters/" + course_id).then((res) => {
        settotalResults(res.data.length);
        setChapterData(res.data); // Corrected variable name here
        
      });
    } catch (error) {
      console.log(error);
    }
  }, []);


// Delete  comfermation 

const Swal =require ('sweetalert2');
const handleDeleteClick = (chapter_id) => {
  Swal.fire({
    title: 'Confirm',
    text: "Are you sure you want to delete this data?",
    icon: 'info',
    confirmButtonText: 'Continue',
    showCancelButton: true
  }).then((result) => {
    if (result.isConfirmed) {
      try {
        axios.delete(baseUrl + '/Chapter/' + chapter_id)
          .then((res) => {
            Swal.fire('Success', 'Data has been deleted.', 'success');
  //  Page එක රීලෝඩ් වෙන්නැතුවට Data Length එක පෙන්නන්න (39V ) 
            try {
              axios.get(baseUrl + '/course-chapters/' + course_id)
                .then((res) => {
                  settotalResults(res.data.length);
                  setChapterData(res.data);
                })
                .catch((error) => {
                  console.log(error);
                });
            } catch (error) {
              console.log(error);
            }
          })
          .catch((error) => {
            console.log(error);
            Swal.fire('Error', 'Data has not been deleted!!', 'error');
          });
      } catch (error) {
        console.log(error);
        Swal.fire('Error', 'Data has not been deleted!!', 'error');
      }
    } else {
      Swal.fire('Cancelled', 'Data deletion cancelled.', 'info');
    }
  });
  
};

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
          <h5 className="card-header">
    All Chapters ({totalResult}) 
    <a className='btn btn-success btn-sm float-end' href={'/add-chapter/' + course_id}>Add Chapters</a>
</h5>

            {/* <link  className ='btn btn-success ' to = {'/add-chapter/'+course_id}>Add Chapters</link> */}
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Video</th>
                    <th>Remarks</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* අපි කොන්සල් එකේ පෙන්නපු  Data එක දැන් html එකේ පෙන්නන්න යන්නේ */}
                  {/* Course ekan tami metana TD (title eka) ganne )  index eka kiyanne data w */}
                  {chapterData.map((chapter, index) => (
                    <tr>
                      <td>
                        <Link to={"/edit-chapter"+ chapter.id}>{chapter.title}</Link>
                      </td>
                      <td>
                        <video width="250" controls>
                          <source src={chapter.video} type="video/webm" />
                          <source src={chapter.video} type="video/mp4" />
                          Sorry, your browser doesn't support embedded videos.
                        </video>
                      </td>
                      <td>{chapter.remarks}</td>
                      <td>
  <Link to={`/edit-chapter/${chapter.id}`} className="btn btn-sm text-white btn-info">
    <i className="bi bi-pencil-square"></i>
  </Link>
  <button onClick={()=>handleDeleteClick(chapter.id)} className="btn btn-sm btn-danger ms-1">
    <i className="bi bi-trash"></i>
  </button>
</td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CourseChapters;
