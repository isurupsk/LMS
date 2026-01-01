from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import permissions
from .serializers import TeacherSerializer, CourseCategorySerializer, CourseSerializer, ChapterSerializer
from . import models

from .models import Teacher


class TeacherList (generics. ListCreateAPIView):
    queryset = models. Teacher.objects.all()
    serializer_class = TeacherSerializer
    # Simple Authontication (Not Token Base)Cant visible 3rd party our data
    # permission_classes = [permissions.IsAuthenticated]


class TeacherDetail (generics. RetrieveUpdateDestroyAPIView):
    queryset = models. Teacher.objects.all()
    serializer_class = TeacherSerializer
    # permission_classes = [permissions.IsAuthenticated]


@api_view(['POST'])
@csrf_exempt
def teacher_login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    try:
        teacherData = Teacher.objects.get(email=email, password=password)
        return JsonResponse({'bool': True, 'teacher_id': teacherData.id})
    except Teacher.DoesNotExist:
        return JsonResponse({'bool': False})


# @csrf_exempt
# def teacher_login(request):
#     email = request.POST('email')
#     password = request.POST('password')
#     teacherData = Teacher.objects.get(email=email, password=password)
#     if teacherData:
#         return JsonResponse({'bool':True})
#     else:
#         return JsonResponse({'bool':False})


class CourseCategoryList (generics. ListCreateAPIView):
    queryset = models. CourseCategory.objects.all()
    serializer_class = CourseCategorySerializer

# Corse View This is Class base view this hanndle The GET and POST


class CourseList (generics. ListCreateAPIView):
    queryset = models. Course.objects.all()
    serializer_class = CourseSerializer


    def get_queryset(self):
        qs = super().get_queryset()
        if 'result' in self.request.GET:
            limit=int(self.request.GET['result'])
            qs = models.Course.objects.all().order_by('-id')[:limit]
        return qs





# Spacipic Teacher Course


class TeacherCourseList (generics. ListCreateAPIView):
    # queryset = models. Course.objects.all()
    serializer_class = CourseSerializer

    # Overright the queryset
    def get_queryset(self):
        teacher_id = self.kwargs['teacher_id']
        teacher = models.Teacher.objects.get(pk=teacher_id)
        return models.Course.objects.filter(teacher=teacher)
    




# class TeacherCourseDetail (generics. RetrieveUpdateDestroyAPIView):
    # queryset = models. Course.objects.all()
    # serializer_class = CourseSerializer
    # lookup_field = 'pk'
class TeacherCourseDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CourseSerializer
    lookup_field = 'pk'

    def get_queryset(self):
        return models.Course.objects.all()



# Corse View This is Class base view this hanndle The GET and POST
class ChapterList (generics. ListCreateAPIView):
    queryset = models. Chapter.objects.all()
    serializer_class = ChapterSerializer

class ChapterDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models. Chapter.objects.all()
    serializer_class = ChapterSerializer



class CourseChapterList(generics.ListAPIView):
    serializer_class = ChapterSerializer

    def get_queryset(self):
        course_id = self.kwargs['course_id']
        course = models.Course.objects.get(pk=course_id)
        return models.Chapter.objects.filter(course=course)

