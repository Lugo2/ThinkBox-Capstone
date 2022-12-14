from rest_framework import serializers
from .models import JournalEntries

class JournalEntriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = JournalEntries
        fields = ['philosophile', 'entry', 'date', 'category', 'author', 'quote_source']
        depth = 1