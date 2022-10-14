from rest_framework import serializers
from .models import Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        category = Category
        fields = ['perseverance', 'relationship', 'discipline', 'accountability', 'generosity_humility', 'general']
        depth = 1