from rest_framework import serializers
from .models import snippet,LANGUAGE_CHOICES,STYLE_CHOICES

class snippetserializer(serializers.ModelSerializer):
    class Meta:
        model = snippet
        fields=('id','message','created_at','updated_at',)
