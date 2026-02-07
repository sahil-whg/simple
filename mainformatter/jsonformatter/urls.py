from django.urls import path
from .views import format_json, feedback_view

urlpatterns = [
    path('format/', format_json),
    path('feedback/', feedback_view),
]
