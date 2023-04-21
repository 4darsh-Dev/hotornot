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
    
# def save(self, *args, **kwargs):
#         if not self.id:
#             # Generate a unique ID for the image file name
#             unique_id = uuid.uuid4().hex
#             timestamp = timezone.now().strftime('%Y%m%d%H%M%S')
#             filename = f'{timestamp}_{unique_id}.jpg'
#             self.image.name = filename
#         models.Model.save(*args, **kwargs)