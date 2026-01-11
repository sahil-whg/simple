from django.urls import path
from .views import format_json

urlpatterns = [
    path('format/', format_json),
]
