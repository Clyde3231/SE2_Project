from rest_framework import generics
from .models import Meds
from .serializers import MedsSerializer
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.generics import RetrieveUpdateAPIView

from rest_framework import status

from django.shortcuts import render

def front(request):
    context = {
        }

    return render(request, "index.html", context)

class MedsList(ListCreateAPIView):
    queryset = Meds.objects.all()
    serializer_class = MedsSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MedsDetail(RetrieveUpdateDestroyAPIView):
    queryset = Meds.objects.all()
    serializer_class = MedsSerializer

class MedsDelete(RetrieveUpdateDestroyAPIView):
    queryset = Meds.objects.all()
    serializer_class = MedsSerializer

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class MedsEdit(RetrieveUpdateAPIView):
    queryset = Meds.objects.all()
    serializer_class = MedsSerializer
    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)