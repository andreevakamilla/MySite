from django.contrib import admin
from .models import Bunny, Booking

@admin.register(Bunny)
class BunnyAdmin(admin.ModelAdmin):
    list_display = ('name', 'age', 'description', 'photo')  

class BookingAdmin(admin.ModelAdmin):
    list_display = ('name', 'date', 'time', 'num_of_people', 'contact')  
    list_filter = ('date', 'time')  
    search_fields = ('name', 'contact')  

admin.site.register(Booking, BookingAdmin)
