from django.urls import path
from .views import BunnyListView, BunnyCreateView
from .views import BookingCreateView, BookingListView
from rest_framework_simplejwt import views as jwt_views
from .views import UserRegistrationView

urlpatterns = [
    path('bunnies/', BunnyListView.as_view(), name='bunny-list'),
    path('bunnies/create/', BunnyCreateView.as_view(), name='bunny-create'),
    path('bookings/', BookingListView.as_view(), name='booking-list'),  
    path('bookings/create/', BookingCreateView.as_view(), name='booking-create'),  
    path('auth/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api/register/', UserRegistrationView.as_view(), name='user-register'),
]
