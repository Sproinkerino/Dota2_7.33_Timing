from django import forms
from .models import Timing

class TimingForm(forms.ModelForm):
    class Meta:
        model = Timing
        fields = ['time', 'description']
