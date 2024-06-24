from django.db import models

class Meds(models.Model):
    MEDICINE_TYPES = (
        ('Tablet', 'Tablet'),
        ('Capsule', 'Capsule'),
        ('Liquid', 'Liquid'),
    )
    AGE_GROUP = (
        ('Kids', 'Kids'),
        ('Adults', 'Adults'),
    )
    medId = models.AutoField(primary_key=True,)
    medName = models.CharField(max_length=100)
    genericName = models.CharField(max_length=100)
    dosageForm = models.CharField(max_length=100, choices= MEDICINE_TYPES)
    manufacturer = models.CharField(max_length=100)
    ageGroup = models.CharField(max_length=20, choices=AGE_GROUP)
    formulation = models.CharField(max_length=255, null=True)
    netContent = models.CharField(max_length=255, null=True)
    indication = models.CharField(max_length=255)
    sideEffects = models.CharField(max_length=255)
    availability = models.BooleanField(default=True)
    image = models.CharField(max_length=255)
    
    def __str__(self):
        return self.medName
    
