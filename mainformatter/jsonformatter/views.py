import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def format_json(request):
    # import ipdb;ipdb.set_trace()
    raw_json = request.data.get("json")

    if not raw_json:
        return Response(
            {"error": "No JSON provided"},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        parsed = json.loads(raw_json)
        formatted = json.dumps(parsed, indent=4)
        return Response({"formatted": formatted})
    except json.JSONDecodeError as e:
        return Response(
            {"error": str(e)},
            status=status.HTTP_400_BAD_REQUEST
        )


# views.py
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Feedback

@csrf_exempt
def feedback_view(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'POST only'}, status=405)

    try:
        data = json.loads(request.body)
        message = data.get('message', '').strip()
        # ftype = data.get('type', 'feature')

        if not message:
            return JsonResponse({'error': 'Message required'}, status=400)

        Feedback.objects.create(
            # type=ftype,
            message=message
        )

        return JsonResponse({'status': 'ok'})
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)
