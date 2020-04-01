from rest_framework import generics, views, status
from rest_framework.response import Response

from node.models import ChangeableInfo, UnChangeableInfo
from .serializers import UserNodeListSerializer, RecursiveNodeSerializer, NodeSerializer


class UserNodeListView(generics.ListAPIView):
    """特定ユーザのノードのリストを返すための
    APIクラス"""

    serializer_class = UserNodeListSerializer
    lookup_field = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return ChangeableInfo.objects.filter(user__id=user_id)


class NodeView(generics.RetrieveAPIView):
    """特定ノードの詳細情報を返すためのAPIクラス"""

    serializer_class = NodeSerializer
    queryset = UnChangeableInfo.objects.all()


class RecursiveNodeView(views.APIView):
    """全てのノードの不可変データを再帰構造で取得する（一覧）APIクラス.
    api/v1/nodes (GET) で取得できるようにするため、クエリ判定は不要"""

    # override
    def get(self, request, *args, **kwargs):
        """ノードの取得（一覧）APIに対応するハンドラメソッド"""
        # 根となるオブジェクトを取得
        queryset = UnChangeableInfo.objects.filter(parent_node=None).get()
        # serializers.HyperlinkedIdentityFieldを使うための準備
        context = {'request': request}
        # シリアライザオブジェクトを作成
        serializer = RecursiveNodeSerializer(instance=queryset, context=context)
        # レスポンスオブジェクトを作成して返す
        return Response(serializer.data, status.HTTP_200_OK)
