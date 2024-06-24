from rest_framework import serializers
from .models import Meds

class MedsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meds
        fields = '__all__'
