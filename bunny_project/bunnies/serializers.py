from rest_framework import serializers
from .models import Bunny, Booking
from django.contrib.auth.models import User

class BunnySerializer(serializers.ModelSerializer):
    class Meta:
        model = Bunny
        fields = ['id', 'name', 'age', 'description', 'photo']



class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'bunny', 'name', 'date', 'time', 'num_of_people', 'contact', 'created_at']

class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user