from django.db import models

# Create your models here.

class File(models.Model):
    title = models.CharField(max_length=255, blank=True)
    file = models.FileField(upload_to='uploads')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title