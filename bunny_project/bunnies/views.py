from rest_framework import generics, permissions
from .models import Bunny, Booking
from .serializers import BunnySerializer, BookingSerializer
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Bunny
from .serializers import BunnySerializer
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Booking
from .serializers import BookingSerializer, UserRegistrationSerializer
from rest_framework_simplejwt.tokens import RefreshToken

class BunnyListView(APIView):
    permission_classes = [AllowAny]  

    def get(self, request):
        bunnies = Bunny.objects.all()
        serializer = BunnySerializer(bunnies, many=True)
        return Response(serializer.data)

class BunnyCreateView(APIView):
    permission_classes = [IsAdminUser]  

    def post(self, request):
        serializer = BunnySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class BookingListView(APIView):
    permission_classes = [IsAdminUser]  
    def get(self, request, *args, **kwargs):
        bookings = Booking.objects.all()
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)

class BookingCreateView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request, *args, **kwargs):
        serializer = BookingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    

class UserRegistrationView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            return Response({
                'username': user.username,
                'email': user.email,
                'access_token': str(refresh.access_token),
                'refresh_token': str(refresh),
            })
        return Response(serializer.errors, status=400)

