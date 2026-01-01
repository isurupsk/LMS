from django.db import models

################################# Teacher Model ############################


class Teacher (models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=100)
    qualification = models.CharField(max_length=200)
    mobile_no = models.CharField(max_length=20)
    skills = models.TextField()

    class Meta:
        verbose_name_plural = "1. Teachers"

################################# Course Category Model ####################


class CourseCategory(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()

    class Meta:
        verbose_name_plural = "2. Course Categories"

        # Course catogery wala PHP Python wage catogery ekanma penneemata admin panel eke/ 
        # (Def ekka class ekata kelin thibbe nati nisa hariyata pennuwe na ) 

    def __str__(self):
        return self.title

 ########################### Course Model ##################################


class Course (models.Model):

    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    description = models.TextField()
    featured_img = models.ImageField(upload_to='course_imgs/', null=True)
    techs = models.TextField(null=True)

    class Meta:
        verbose_name_plural = "3. Courses"


###########################  Student Model #################################
class Student (models.Model):

    full_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    qualification = models.CharField(max_length=200)
    mobile_no = models.CharField(max_length=20)
    address = models.TextField()
    interested_categories = models.TextField()

    class Meta:
        verbose_name_plural = "4. Students"



 ########################### Chapter Model  ##################################


class Chapter (models.Model):

    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    description = models.TextField()
    #  වීඩියෝ එකක් ගන්න දාන්නෙ ෆිල්ෆයිඩ් ෆිල්d එකයි
    video = models.FileField(upload_to='chapter_videos/', null=True)
    remarks = models.TextField(null=True)

    class Meta:
        verbose_name_plural = "5. Chapters"
