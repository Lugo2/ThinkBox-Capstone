from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import JournalEntries
from .serializers import JournalEntriesSerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def journal_entries_list(request):
    entries = JournalEntries.objects.all()
    serializer = JournalEntriesSerializer(entries, many = True)
    print(request)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def create_entry(request):
    if request.method == 'GET':
        entries = JournalEntries.objects.all(philosophile = request.philosophile)
        serializer = JournalEntriesSerializer(entries, many = True)
        print(request)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = JournalEntriesSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save(philosophile = request.philosophile)
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

