from django.shortcuts import render, redirect, HttpResponse
from .forms import FileForm
from .models import File

# Create your views here.
def index(request):
    context = {"files": File.objects.all()}
    return render(request, 'index.html', context)

def upload_file(request):
    if request.method == 'POST':
        # print(request.POST)
        # print(request.FILES)
        form = FileForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            # return HttpResponse('success')  # Provide a success message
    else:
        form = FileForm()
    return render(request, 'upload.html', {'form': form})

def downloads(request):

    context = {'files': File.objects.all()}
    return render(request, 'download.html', context)

