from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from .models import Category
from .serializers import CategorySerializer
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def categories_list(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many = True)
    return Response(serializer.data)