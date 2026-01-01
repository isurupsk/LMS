from django.urls import path
from . import views
from .views import teacher_login

urlpatterns = [
    # Teachers
    path('teacher/', views.TeacherList.as_view()),
    path('teacher/<int:pk>/', views.TeacherDetail.as_view()),
    path('teacher-login', teacher_login, name='teacher_login'),
    # Course Catogery CourseCategory
    path('CourseCategory/', views.CourseCategoryList.as_view()),
    # Course
    path('Course/', views.CourseList.as_view()),
    # Teacher courses
    path('Teacher-Courses/<int:teacher_id>',
         views.TeacherCourseList.as_view()),

    # Spasipic Course Teacher (Twacher course daetail )
     # path('Teacher-Course-Detail/<int:course_id>',views.TeacherCourseDetail.as_view()),
     path('Teacher-Course-Detail/<int:pk>', views.TeacherCourseDetail.as_view()),


    # Chapter
    path('Chapter/', views.ChapterList.as_view()),
    path('Chapter/<int:pk>', views.ChapterDetail.as_view(), name='chapter-detail'),

    # Spasipic Course Chapter
    path('course-chapters/<int:course_id>',
         views.CourseChapterList.as_view()),
]
