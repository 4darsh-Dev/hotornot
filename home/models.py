from django.db import models
import uuid
from django.utils import timezone

# Create your models here.

class Image(models.Model):
    name = models.CharField(max_length= 50)
    image = models.ImageField(upload_to = "images/", null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    points = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.id}: {self.image.name}'
    
