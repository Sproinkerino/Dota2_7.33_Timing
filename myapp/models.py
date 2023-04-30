from django.db import models

# Create your models here.
from django.db import models

class Timing(models.Model):
    time = models.DurationField()
    description = models.CharField(max_length=200)