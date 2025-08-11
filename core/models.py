from django.db import models

# Create your models here.
class Contact(models.Model):
    type = models.CharField(max_length=20)
    label = models.CharField(max_length=50)
    url = models.CharField(max_length=255, blank=True)
    icon = models.CharField(max_length=50, blank=True)
    display = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return f"{self.type}: {self.label}"
    
class Skill(models.Model):
    name = models.CharField(max_length=50)
    icon=models.FileField(upload_to='static/skills/', blank=True)
    description = models.TextField(blank=True)
    about=models.TextField(blank=True)

    def __str__(self):
        return self.name
