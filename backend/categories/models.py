from django.db import models

# Create your models here.

class Category(models.Model):
    perseverance = models.CharField(max_length = 500)
    relationship = models.CharField(max_length = 500)
    discipline = models.CharField(max_length = 500)
    accountability = models.CharField(max_length = 500)
    generosity_humility = models.CharField(max_length = 500)
    general = models.CharField(max_length = 500)