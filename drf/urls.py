
from django.contrib import admin
from django.urls import path, include
from Booking.views import index

urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", include("accounts.urls"), name="account_all_urls"),
    path("booking/", include("Booking.urls"), name="booking_all_urls"),
    path("hotel/", include("hotel.urls"), name="hotel_all_urls"),
    path("", index, name="index")
]
