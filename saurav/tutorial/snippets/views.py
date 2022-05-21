from django.shortcuts import render
from rest_framework import generics
from .models import snippet
from .serializers import snippetserializer

class SnippetList(generics.ListCreateAPIView):
    queryset=snippet.objects.all()
    serializer_class=snippetserializer

class SnippetDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset=snippet.objects.all()
    serializer_class=snippetserializer
# Create your views here.
