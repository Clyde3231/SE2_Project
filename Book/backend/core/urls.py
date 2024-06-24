from django.urls import path
from .views import MedsList, MedsDetail, MedsDelete, MedsEdit

urlpatterns = [
    path('meds/', MedsList.as_view(), name='meds-list-create'),
    path('meds/<int:pk>/', MedsDetail.as_view(), name='meds-detail'),
    path('meds/<int:pk>/delete', MedsDelete.as_view(), name='meds-delete'),
    path('meds/<int:pk>/edit', MedsEdit.as_view(), name='meds-edit'),


    # Add other URLs as needed
]