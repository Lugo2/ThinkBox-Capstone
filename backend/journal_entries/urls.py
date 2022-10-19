from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.journal_entries_list),
    path('create/', views.create_entry),
]