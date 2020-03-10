from rest_framework import generics
from node.models import ChangeableInfo
from .serializers import NodeSerializer


class NodeListView(generics.ListAPIView):
    """特定ノードの特定ユーザの情報を返すための
    APIクラス"""

    serializer_class = NodeSerializer
    lookup_field = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return ChangeableInfo.objects.filter(user__id=user_id)
