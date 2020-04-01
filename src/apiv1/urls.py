from django.urls import path
from .views import UserNodeListView, RecursiveNodeView, NodeView


urlpatterns = [
    # 特定ユーザのノードのリストを返す
    path('user/<int:user_id>/', UserNodeListView.as_view()),
    # ノードの詳細情報を返す
    path('nodes/<pk>/', NodeView.as_view(), name='detail-url'),
    # 再帰的なノードの構造を返す
    path('nodes/', RecursiveNodeView.as_view())
]
