from rest_framework import generics
from node.models import ChangeableInfo
from .serializers import UserNodeListSerializer


class UserNodeListView(generics.ListAPIView):
    """特定ユーザのノードのリストを返すための
    APIクラス"""

    serializer_class = UserNodeListSerializer
    lookup_field = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return ChangeableInfo.objects.filter(user__id=user_id)
