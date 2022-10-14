from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .models import JournalEntries
from .serializers import JournalEntriesSerializer

# Create your views here.

@api_view(['GET'])
def journal_entries_list(request):

    return Response('ok')