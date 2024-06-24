from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import Meds

class MedsAdmin(admin.ModelAdmin):
    list_display = ('medId', 'medName', 'dosageForm', 'manufacturer', 'ageGroup', 'availability')
    list_filter = ('dosageForm', 'manufacturer', 'ageGroup', 'availability')
    search_fields = ('medName', 'manufacturer', 'dosageForm')

admin.site.register(Meds, MedsAdmin)
