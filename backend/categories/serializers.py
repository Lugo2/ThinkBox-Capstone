from pyexpat import model
from rest_framework import serializers
from .models import Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['perseverance', 'relationship', 'discipline', 'accountability', 'generosity_humility', 'general']
        depth = 1