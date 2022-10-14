from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from .models import Category
from .serializers import CategorySerializer
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

@api_view(['GET'])
def categories_list(request):

    return Response('ok')