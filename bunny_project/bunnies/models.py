from django.db import models
from django.contrib.auth.models import User  

class Bunny(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    description = models.TextField()
    photo = models.URLField()

    def __str__(self):
        return self.name

class Booking(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    num_of_people = models.PositiveIntegerField()
    contact = models.CharField(max_length=100)

    def __str__(self):
        return f"Booking by {self.name} on {self.date} at {self.time}"

