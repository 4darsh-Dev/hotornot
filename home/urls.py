# Created by Admin

from django.contrib import admin
from django.urls import path, include
from home import views
from .views import Image 

from django.urls import path
from .views import Image

urlpatterns = [
    path("", views.index, name = 'home'),
    path("about", views.about, name = 'about'),
    path('services', views.services, name = 'services'),
    path('profiles', views.profiles, name = 'profiles'),
    path('search', views.search, name = 'search'),

    
    
]
