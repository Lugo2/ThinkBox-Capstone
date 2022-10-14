from django.urls import path
from . import views

urlpatterns = [
    path('', views.journal_entries_list),
]