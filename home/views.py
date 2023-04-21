from django.shortcuts import render,redirect
from django.http import HttpResponse,JsonResponse
from django.contrib import messages
from .models import Image # defualt = .models



# Create your views here.

def index(request):

    # Check if there are any active images left
    active_images = Image.objects.filter(is_active=True)

    # if not active_images.exists():
    #     # If not, set is_active of all images to True
    #     Image.objects.all().update(is_active=True)
    #     active_images = Image.objects.filter(is_active=True)

    images = Image.objects.filter(is_active=True).order_by('?')[:2]

    if request.method == 'POST':
        winner_id = request.POST.get('winner')
        loser_id = [image.id for image in images if image.id != winner_id][0]

        # Update the is_active field of the images
        Image.objects.filter(id=winner_id).update(is_active=True)
        Image.objects.filter(id=loser_id).update(is_active=False)

        # Update the points field of the winner
        winner = Image.objects.get(id=winner_id)
        winner.points += 5
        winner.save()

    context = {
        'images': images
    }
    return render(request, 'index.html', context)


def about(request):
    return render(request, "about.html")

def services(request):
    return render(request, "services.html")

def profiles(request):
    pics = Image.objects.all()

    # Sort the data by maximum points
    pics = sorted(pics, key=lambda x: x.points, reverse=True)
    
    context = {
        "pics": pics
    }
    return render(request, "profiles.html", context)

def search(request):
    allProfiles = Image.objects.all()
    return render(request, "search.html", allProfiles)

# def get_competitors(request):
#     competitors = Image.objects.all()
#     data = [{'id': c.id, 'name': c.name, 'image': c.image.url} for c in competitors]
#     return JsonResponse(data, safe=False)


# def choose_winner(request):
#     winner_id = int(request.POST['winner_id'])
#     loser_id = int(request.POST['loser_id'])
#     winner = Image.objects.get(id=winner_id)
#     loser = Image.objects.get(id=loser_id)
#     winner.wins += 1
#     loser.losses += 1
#     winner.save()
#     loser.save()
#     return JsonResponse({})