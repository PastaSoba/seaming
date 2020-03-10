from django.urls import path
from .views import NodeListView


urlpatterns = [
    # 特定ユーザのノードのリストを返す
    path('nodes/user/<int:user_id>/', NodeListView.as_view()),
]
