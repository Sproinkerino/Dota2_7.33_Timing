import json
from django.shortcuts import render
from .models import Timing
from .timings_data import timings

def index(request):
    timings_json = json.dumps(timings)
    return render(request, 'myapp/index.html', {'timings': timings_json})
