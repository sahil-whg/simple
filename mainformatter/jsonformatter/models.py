from django.db import models

# Create your models here.
class Feedback(models.Model):
    # TYPE_CHOICES = (
    #     ('feature', 'Feature Request'),
    #     ('bug', 'Bug Report'),
    # )

    message = models.TextField()
    user_agent = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
