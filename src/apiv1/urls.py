from django.urls import path
from .views import UserNodeListView


urlpatterns = [
    # 特定ユーザのノードのリストを返す
    path('user/<int:user_id>/', UserNodeListView.as_view())
]
