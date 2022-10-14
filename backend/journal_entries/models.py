from django.db import models
from authentication.models import User

# Create your models here.

class JournalEntries(models.Model):
    philosophile = models.ForeignKey(User, on_delete=models.CASCADE)
    entry = models.CharField(max_length = 5000)
    date = models.DateField.auto_now_add
    category = models.CharField(max_length = 50)
    author = models.CharField(max_length = 75)
    quote_source = models.CharField(max_length = 100)