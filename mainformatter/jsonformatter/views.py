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
