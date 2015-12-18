from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request):
    name = "Caroline"
    context = { 'name': name }
    return render(request, 'app/index.html', context)




def analyze(request, photo_uid):

    results = [
        {
            name: 'Kitchen',
            probability: 0.6
        },
        {
            name: 'Bathroom',
            probability: 0.2
        },
        {
            name: 'Living Room',
            probability: 0.3
        }
    ];

    return HttpResponse(results)



