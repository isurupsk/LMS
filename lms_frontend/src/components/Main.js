// URL එකේ Componet Folder  එක කෝල් කරන්න ඕන නෑ
import Header from "./Header";
import Home from "./Home";
import CourseDetail from "./CourseDetail";
import TeacherDetail from "./TeacherDetail";


// User
import Login from "./User/Login";
import Register from "./User/Register";
import Dashboard from "./User/Dashboard";
import MyCourses from "./User/MyCourses";
import FavoriteCourses from "./User/FavoriteCourses";
import RecommendedCourse from "./User/RecommendedCourse";
import ProfileSetting from "./User/ProfileSetting";
import ChangePasswoard from "./User/ChangePasswoard";
// එකම නම්කින් තියෙන්නෙ බෑ teacher log  user විදියට ගත්තේ එක හින්දා(Teacher)
import TeacherLogin from "./Teacher/TeacherLogin";
import TeacherLogout from "./Teacher/TeacherLogout";
import TeacherRegister from "./Teacher/TeacherRegister";
import TeacherDashboard from "./Teacher/TeacherDashboard";
import TeacherChangePasswoard from "./Teacher/TeacherChangePasswoard";
import TeacherProfileSetting from "./Teacher/TeacherProfileSetting";
import TeacherMyUsers from "./Teacher/TeacherMyUsers";
import TeacherMyCourses from "./Teacher/TeacherMyCourses";


// list Pages
import AllCourses from "./AllCourses";
import PopulerCourses from "./PopulerCourses";
import PopulerTeacher from "./PopulerTeacher";


// Other
import TeacherAddCourses from "./Teacher/TeacherAddCourses";
import AddChapter from "./Teacher/AddChapter";
import AllChapters from "./Teacher/CourseChapters";
import EditChapter from "./Teacher/EditChapter";
import EditCourse from "./Teacher/EditCourse";

import About from "./About";

import Footer from "./Footer";

import { Routes as Switch, Route } from "react-router-dom";

function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:course_id" element={<CourseDetail />} />
        <Route path="/user-login" element={<Login />} />
        <Route path="/user-register" element={<Register />} />
        <Route path="/user-dashboard" element={<Dashboard />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/favorite-courses" element={<FavoriteCourses />} />
        <Route path="/recommended-courses" element={<RecommendedCourse />} />
        <Route path="/profile-setting" element={<ProfileSetting />} />
        <Route path="/change-password" element={<ChangePasswoard />} />
        {/* Teachers */}
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/teacher-logout" element={<TeacherLogout />} />
        <Route path="/teacher-register" element={<TeacherRegister />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher-change-password" element={<TeacherChangePasswoard />} />
        <Route path="/teacher-profile-setting" element={<TeacherProfileSetting />} />
        <Route path="/teacher-my-users" element={<TeacherMyUsers  />} />
        <Route path="/teacher-my-courses" element={<TeacherMyCourses  />} />
        <Route path="/teacher-add-courses" element={<TeacherAddCourses  />} />
        <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail  />} />
        {/* According to the Couser ID  / teacher add course එකේ add chapter ලින්ක් එකට මෙම අයි.ඩී එක දාල තියෙනවා*/}
        <Route path="/add-chapter/:course_id" element={<AddChapter  />} />

        {/* Courses List */}
        <Route path="/user-register" element={<Register />} />
        <Route path="/edit-course/:course_id" element={<EditCourse  />} />

        <Route path="/all-courses" element={<AllCourses  />} />
        {/* Chapters */}
        <Route path="/all-chapters" element={<AllChapters  />} />
        <Route path="/all-chapters/:course_id" element={<AllChapters  />} />
        <Route path="/edit-chapter/:chapter_id" element={<EditChapter  />} />


        {/*Other  */}
        <Route path="/populer-courses" element={<PopulerCourses />} />
        <Route path="/populer-teacher" element={<PopulerTeacher />} />
        {/* <Route path="/category/:category_slug" element={<CategoryCourses />} /> */}


      </Switch>
      <Footer />
    </div>
  );
}
export default Main;
