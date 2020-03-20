from django.urls import path
from .views import UserNodeListView, RecursiveNodeView


urlpatterns = [
    # 特定ユーザのノードのリストを返す
    path('user/<int:user_id>/', UserNodeListView.as_view()),
    # 再帰的なノードの構造を返す
    path('nodes/', RecursiveNodeView.as_view())
]
